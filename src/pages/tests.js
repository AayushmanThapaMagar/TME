import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import swell from "@/utils/swell";
import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchCart() {
    setLoading(true);
    const response = await swell.cart.get();
    if (response && response.items) {
      setCart(response.items); // changed from setItems
      localStorage.setItem('cartItems', JSON.stringify(response.items));
    }
    setLoading(false);
  }

  const addToCart = async (productId, quantity) => {
    setLoading(true);
    await swell.cart.update({
      items: [{ product_id: productId, quantity }],
    });
    await fetchCart();
    setLoading(false);
  }

  const removeFromCart = async (itemId) => {
    setLoading(true);
    await swell.cart.removeItem(itemId);
    await fetchCart();
    setLoading(false);
  }

  const clearCart = async () => {
    setLoading(true);
    await swell.cart.clear();
    await fetchCart();
    setLoading(false);
  }

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems) {
      setCart(cartItems);
    } else {
      fetchCart();
    }
  }, []);

  return {
    cart,
    loading,
    addToCart,
    removeFromCart,
    clearCart,
    fetchCart
  };
};

function Cart() {
  const { cart, loading, addToCart, removeFromCart, clearCart, fetchCart } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div>
        <h1>Cart</h1>
        <button onClick={fetchCart}>Refresh cart</button>
        <button onClick={() => addToCart('123', 1)}>Add item</button>
        <button onClick={clearCart}>Clear cart</button>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} ({item.quantity}){' '}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Cart;

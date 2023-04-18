import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
  } from '@chakra-ui/react';

  import React from 'react';
  import swell from "@/utils/swell";
  import { useEffect, useState } from "react";
  
  export function CartComponent({ isOpen, onClose, productID, quantity, source }) {
    const btnRef = React.useRef();

    const [catInit, setCartInit] = useState(null);


  
    return (
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>
  
          <DrawerBody>
            {source}
            {productID}
          </DrawerBody>
  
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  
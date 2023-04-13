import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';


    export function ProductCategories() {
        return (
            <Menu>
                <MenuButton color="#201e26" fontWeight='bold'> Products </MenuButton>
                <MenuList>
                    <MenuItem as = 'a' href = '/products'>All Products</MenuItem>
                    <MenuItem as = 'a' href = '/products/Madhoney'> Mad Honey</MenuItem>
                    <MenuItem as = 'a' href = '/products/Expedition'> Expedition</MenuItem>
                </MenuList>
            </Menu>
        )
    }
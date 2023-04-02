import { Button, IconButton, Image } from "@chakra-ui/react";

export function NavBar() {
    return (
        <>
        <div // center of the screen 75% width and grey background
            style={{
                width: '100',
                margin: '0 auto',
                height: '10vh',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'

            }}>
                <div
                    style={{
                        paddingRight: ' 10rem',
                    }}
                >
                    "Logo" 
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button>
                        Home
                    </Button>
                    <Button>
                        Products
                    </Button>
                    <Button>
                        Our Story
                    </Button>
                    <Button>
                        Contact
                    </Button>
                    <IconButton
                        aria-label="My Cart"
                        icon={<Image src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="logo" boxSize="50px" />}
                    >
                        
                    </IconButton>
                </div>

            </div>
        </>
    )
}
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'


 export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} backgroundColor="white" onClick={onOpen} marginTop="10px">
        <HamburgerIcon w={6} h={6} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody display="flex" flexDirection="column" marginTop="50px">
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="220px">Tariff</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="220px">Store</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="20px">Flag-Off RB Adventure Tour Club</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="145px">Partner With Us</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="230px">Blog</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="130px">Indian Bike Routes</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="200px">About Us</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="130px">Terms & Conditions</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="200px">Bike Tour</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="170px">Privacy Policy</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="240px">FAQ</Button>
             <Button textAlign="left"  height="60px" backgroundColor="transparent" paddingTop="10px" paddingBottom="10px" borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4" paddingRight="200px">Reach Us</Button>
            </DrawerBody>
  
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
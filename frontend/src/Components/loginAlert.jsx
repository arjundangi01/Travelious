import React, { useEffect } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
const LoginAlert = ({message}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    useEffect(() => {
        onOpen()
   },[])
    return (
      <>
        {/* <Button colorScheme='red' onClick={onOpen}>
          Delete Customer
        </Button> */}
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Alert!
              </AlertDialogHeader>
  
              <AlertDialogBody>
                {message}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                {/* <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button> */}
                <Button colorScheme='red' onClick={onClose} ml={3}>
                  Okay
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
}

export default LoginAlert
import {  Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'


export default function EditModel({ isOpen, onOpen, onClose, title, Children }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

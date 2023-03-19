import React, { useState } from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
  } from "@chakra-ui/react";

export default function AddContactForm({addContact, button, contactData, updateContact}) {
    const [ name , setName] = useState(contactData?.name);
    const [ email , setEmail] = useState(contactData?.email);
    const [ id, setId] = useState(contactData?.id);
    // console.log(name)
    const onSubmitHandler = () =>{
        if(!contactData) 
        {
        addContact(name, email)
        }
        else
        {
        updateContact(id, name, email)
        }
    }

  return (
    <Stack>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <Button alignSelf={"flex-end"} colorScheme='purple' onClick={onSubmitHandler}>{button}</Button>
          </Stack>
  )
}

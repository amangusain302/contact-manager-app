
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import AddContactForm from "./AddContactForm";
import ContactCard from "./ContactCard";
import EditModel from "./EditModel";
import { v4 as uuidv4 } from 'uuid';

export default function Frame() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
  const [contactData, setContact] = useState([
    { id: 1, name: "Aman", email: "amangusain@gmail.com" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com" },
    { id: 3, name: "Sachin", email: "Sachin@gmail.com" },
    { id: 4, name: "Garv", email: "garv@gmail.com" },
    { id: 5, name: "Nadeem", email: "nadeem@gmail.com" },
  ]);

  const [selectContact, setSelectContact] = useState();
  const [searchData, setSearchData] = useState([]);

  console.log(contactData);
  
    const searchItem = contactData.filter(Element => (Element.name.includes(searchData)) )


  const addContactArry = (name , email) => {
    if((contactData.findIndex(value => value.email === email)) === -1 && email !== undefined)
    {
      console.log("heloo clalling", email);
    setContact(prev => [...prev , { id : uuidv4(), name, email}])
    }
    onClose();
  } 

  const updateContact = (id, name , email) => {
    setContact(prev => [...prev.filter(value => value.id !== id), {id , name , email}])
    onCloseEdit();
  }

  const deleteContact = (id) => {
    setContact(prev => prev.filter(value => value.id !== id));
  }

  const getContactId = (id) => {
    console.log(id);
    const openContact = contactData.find(value => value.id === id);
    setSelectContact(openContact);
  } 

  return (
    <>
      <EditModel
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        title={"Add Contact"}
        Children={<AddContactForm button="Add Contact" addContact={addContactArry}/>}
      />
      <EditModel
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        onOpen={onOpenEdit}
        title={"Update Contact"}
        Children={<AddContactForm button='update' contactData={selectContact} updateContact={updateContact}/>}
      />
      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <img src="/assets/logo_white.png" alt="Contact Manager" />
          </div>
          <div className="add-contact" onClick={onOpen}>
            <AiOutlinePlusCircle className="plus" />
            <span>Add New Contact</span>
          </div>
          <div className="search-contact">
            <AiOutlineSearch className="search" />
            <input type="text" placeholder="Search Contact..."  onChange={(e) => setSearchData(e.target.value)}/>
          </div>
        </div>
        <hr />
        <div className="contact-box">
          {searchItem.map((data, i) => (
            <ContactCard data={data} onOpen={onOpenEdit} key={data.id} getContactId={getContactId} deleteContact={deleteContact}/>
          ))}
        </div>
      </div>
    </>
  )
}

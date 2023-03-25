import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import AddContactForm from "./AddContactForm";
import ContactCard from "./ContactCard";
import EditModel from "./EditModel";
import {
  addContactOnServer,
  deleteContactFromServer,
  displayContactFromServer,
  updateContactFronServer,
} from "./network";

export default function Frame() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const [contactData, setContact] = useState([]);
  const [Increment, setIncrement] = useState(0);
  const [selectContact, setSelectContact] = useState();
  const [searchData, setSearchData] = useState([]);

  const fetchContacts = async () => {
    const data = await displayContactFromServer();
    setContact(data.data);
  };
  useEffect(() => {
    fetchContacts();
  }, [Increment]);

  console.log(contactData);

  const searchItem = contactData.filter((Element) =>
    Element.name.includes(searchData)
  );

  const addContactArry = async (name, email) => {
    if (
      contactData.findIndex((value) => value.email === email) === -1 &&
      email !== undefined
    ) {
      const data = await addContactOnServer(name, email);
      console.log(data.data);

      setContact((prev) => [...prev, { id: data.data._id, name, email }]);
    }
    onClose();
  };

  const updateContact = async (id, name, email) => {
    await updateContactFronServer(
      { name: name, email: email },
      id
    );
    setIncrement(Increment + 1);
    // const data = await displayContactFromServer();
    // setContact(data.data)
    onCloseEdit();
  };

  const deleteContact = async (id) => {
    console.log(id, "deleteitem");
    await deleteContactFromServer(id);
    setIncrement(Increment + 1);
  };

  const getContactId = (id) => {
    console.log(id, "slected id");
    const openContact = contactData.find((value) => value._id === id);
    setSelectContact(openContact);
  };

  return (
    <>
      <EditModel
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        title={"Add Contact"}
        Children={
          <AddContactForm button="Add Contact" addContact={addContactArry} />
        }
      />
      <EditModel
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        onOpen={onOpenEdit}
        title={"Update Contact"}
        Children={
          <AddContactForm
            button="update"
            contactData={selectContact}
            updateContact={updateContact}
          />
        }
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
            <input
              type="text"
              placeholder="Search Contact..."
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <div className="contact-box">
          {searchItem.map((data, i) => (
            <ContactCard
              data={data}
              onOpen={onOpenEdit}
              key={data.id}
              getContactId={getContactId}
              deleteContact={deleteContact}
            />
          ))}
        </div>
      </div>
    </>
  );
}

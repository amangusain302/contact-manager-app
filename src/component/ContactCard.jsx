import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export default function ContactCard({ data, onOpen, getContactId, deleteContact }) {
  const onOpenEditHandler = (id) => {
    onOpen();
    getContactId(id);
  }
  return (
    <>
      <div className="contact-card">
        <div className="user-profile">
          <FaUserCircle className="profile-image" />
          <div className="profile-data">
            <span>{data.name}</span>
            <span>{data.email}</span>
          </div>
        </div>
        <div className="card-action">
          <FiEdit
            className="edit-profile"
            onClick={() => onOpenEditHandler(data._id)}
          />
          <AiFillDelete className="delete-profile" onClick={() => deleteContact(data._id)} />
        </div>
      </div>
    </>
  );
}

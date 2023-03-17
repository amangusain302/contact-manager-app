import "./App.css";
import { AiOutlinePlusCircle, AiOutlineSearch, AiFillDelete } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <div className="logo">
              <img src="assets/logo_orange.png" />
            </div>
            <div className="add-contact">
              <AiOutlinePlusCircle className="plus" />
              <span>Add New Contact</span>
            </div>
            <div className="search-contact">
              <AiOutlineSearch className="search" />
              <input type="text" placeholder="Search Contact..." />
            </div>
          </div>
          <hr />
          <div className="contact-box">
            <div className="contact-card">
              <FaUserCircle  className="profile-image" />
              <div className="profile-data">
                <span>Aman</span>
                <span>aman@gmail.com</span>
              </div>
              <FiEdit  className="edit-profile" />
              <AiFillDelete className="delete-profile" />
            </div>
            <div className="contact-card">
              <FaUserCircle  className="profile-image" />
              <div className="profile-data">
                <span>Aman</span>
                <span>aman@gmail.com</span>
              </div>
              <FiEdit  className="edit-profile" />
              <AiFillDelete className="delete-profile" />
            </div>
            <div className="contact-card">
              <FaUserCircle  className="profile-image" />
              <div className="profile-data">
                <span>Aman</span>
                <span>aman@gmail.com</span>
              </div>
              <FiEdit  className="edit-profile" />
              <AiFillDelete className="delete-profile" />
            </div>
            <div className="contact-card">
              <FaUserCircle  className="profile-image" />
              <div className="profile-data">
                <span>Aman</span>
                <span>aman@gmail.com</span>
              </div>
              <FiEdit  className="edit-profile" />
              <AiFillDelete className="delete-profile" />
            </div>
            <div className="contact-card">
              <FaUserCircle  className="profile-image" />
              <div className="profile-data">
                <span>Aman</span>
                <span>aman@gmail.com</span>
              </div>
              <FiEdit  className="edit-profile" />
              <AiFillDelete className="delete-profile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

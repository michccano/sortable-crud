import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
const AddUsers = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  let history = useHistory();
  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/users`, user);
    history.push("/");
  };
  return (
    <div className="container">
      <h1 className="text-center my-5">Add FAQ</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Question"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="username"
            value={username}
            className="form-control"
            placeholder="Enter Answer"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        {/* <div className="form-group mb-3">
          <input
            type="text"
            name="email"
            value={email}
            className="form-control"
            placeholder="Enter your email"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="phone"
            value={phone}
            className="form-control"
            placeholder="Enter your phone"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="website"
            value={website}
            className="form-control"
            placeholder="Enter your website"
            onChange={(e) => onInputChange(e)}
          />
        </div> */}
        <Button type="submit">Save FAQ</Button>
      </form>
    </div>
  );
};

export default AddUsers;

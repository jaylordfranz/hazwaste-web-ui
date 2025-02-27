// src/Components/user/EditProfile.jsx
import { useState } from "react";
import "../css/EditProfile.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    profilePicture: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="edit-profile-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="edit-profile-input"
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleChange}
          className="edit-profile-textarea"
        ></textarea>
        <input
          type="file"
          name="profilePicture"
          className="edit-profile-file"
        />
        <button type="submit" className="edit-profile-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
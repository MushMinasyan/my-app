// UserGallery.js
import React from "react";
import UserCard from "./UserCard.js.jsx";

const UserGallery = ({ users, showAddress, showGeo }) => {
  return (
    <div className="user-gallery">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          showAddress={showAddress}
          showGeo={showGeo}
        />
      ))}
    </div>
  );
};

export default UserGallery;

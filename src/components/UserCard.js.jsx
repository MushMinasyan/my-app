import React from "react";

const UserCard = ({ user, showAddress, showGeo }) => {
  return (
    <div className="user-card">
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>

      {showAddress && (
        <>
          <p>
            <strong>Address:</strong>
          </p>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
        </>
      )}

      {showGeo && (
        <>
          <p>
            <strong>Geo:</strong>
          </p>
          <p>Lat: {user.address.geo.lat}</p>
          <p>Lng: {user.address.geo.lng}</p>
        </>
      )}

      <p>
        <strong>Company:</strong>
      </p>
      <p>{user.company.name}</p>
      <p>{user.company.catchPhrase}</p>
      <p>{user.company.bs}</p>
    </div>
  );
};

export default UserCard;

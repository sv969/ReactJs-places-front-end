import React from "react";
import UserList from "../components/UserList/UserList";

const User = () => {
  const USERS = [
    {
      id: 1,
      name: "Sampath Sai Varukolu",
      image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default User;

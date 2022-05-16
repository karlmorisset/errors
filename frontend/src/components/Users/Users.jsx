import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Users.css";
import User from "@components/Users/User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <div>
      <ul className="users">
        user.map({(user) => <User user={user} />)}
      </ul>
    </div>
  );
}

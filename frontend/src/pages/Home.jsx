import { useState } from "react/cjs/react.production.min";
import logo from "@assets/logo.svg";
import Counter from "@components/Counter/Counter";
import Message from "@components/Message/Message";
import Users from "@components/Users/Users";

const [count, setCount] = useState(0);
const [message, setMessage] = useState("");

export default function Home() {
  return (
    <header className="App-header">
      <img src="{logo}" alt="" />
      <p>Regardez mon beau compteur :</p>
      <Counter count={count} setCount={setCount} setMessage={setMessage} />

      <Message message={msg} />
      <Users />
    </header>
  );
}

import { useEffect, useState } from "react";
import {
  onSnapshot,
  addDoc,
  serverTimestamp,
  query,
  collection,
  orderBy,
  getFirestore,
} from "firebase/firestore";
import { getApp } from "firebase/app";
import { Link } from "react-router-dom";
import moment from "moment";

function ChatPage({ user }) {
  const firestore = getFirestore(getApp());
  const chatCollection = collection(firestore, "chat");
  const chatQuery = query(chatCollection, orderBy("time"));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(chatQuery, (snapshot) => {
      setMessages([
        ...snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })),
      ]);
    });

    return unsubscribe;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.currentTarget.inputMessage.value;
    await addDoc(chatCollection, {
      text,
      sender: user,
      time: serverTimestamp(),
    });
    e.target.reset();
  };

  //Perlu pake try catch karena behavior serverTimestampnya gimana gimana gitu
  const getTime = (time) => {
    try {
      return moment(time.toDate()).format("HH:mm");
    } catch {
      return moment().format("HH:mm");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Kamu adalah '{user}'</h3>
      <Link to={user === "user1" ? "/user2" : "/user1"}>
        Ganti ke {user === "user1" ? "user2" : "user1"}
      </Link>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{ alignSelf: message.sender === user ? "end" : "start" }}
          >
            <div style={{ padding: "8px", border: "1px solid black" }}>
              {message.text}
            </div>
            <div style={{ margin: "4px 0" }}>{getTime(message.time)}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputMessage"
          placeholder="Chatnya disini gan"
        />
      </form>
    </div>
  );
}

export default ChatPage;

import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <p>Halo ini simple chat pake firestore, silahkan pilih usernya</p>
      <Link to="/user1">user1</Link>
      <br />
      <Link to="/user2">user2</Link>
    </div>
  );
}

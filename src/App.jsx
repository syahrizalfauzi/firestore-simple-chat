import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user1" element={<ChatPage user="user1" />} />
        <Route path="/user2" element={<ChatPage user="user2" />} />
      </Routes>
    </Router>
  );
}

export default App;

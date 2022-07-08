import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatpage from "./Pages/Chatpage";
import ChatBox from "./components/ChatBox.jsx";
import Center from "./components/Centre";
import Prrofile from "./components/Prrofile";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage />} exact />
      <Route path="/chats" element={<Chatpage />} />
      <Route path="/prrofile" element={<Prrofile />} />
      <Route path="/chatbox" element={<ChatBox />} />
      <Route path="/centre" element={<Center />} />
      </Routes>
    </div>
  );
}

export default App;

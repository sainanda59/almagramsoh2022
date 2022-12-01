import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from "./components/Chat/Chat";
import Referral from "./components/Referral/Referral";
import Collab from "./components/Collab/Collab"

function App() {
  return (
    <div className="App">
      <NavBar/>
      
    </div>
  );
}

export default App;

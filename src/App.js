import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from "./components/Chat/Chat";
import Referral from "./components/Referral/Referral";
import Collab from "./components/Collab/Collab"

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route exact path='/chat' element={<Chat />} />
        <Route exact path='/referral' element={<Referral />} />
        <Route exact path='/collab' element={<Collab />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

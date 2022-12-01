import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from "./components/Chat/Chat";
import Referral from "./components/Referral/Referral";
import Collab from "./components/Collab/Collab"
import HomePage from "./components/HomePage/HomePage";
import Protected from "./components/Protected/Protected";
import Profile from "./components/Profile/Profile";

function App() {
    return (
      <div className="App">
        <Router>
        <NavBar />
          <Routes>
          <Route exact path='/' element={<Protected><HomePage /></Protected>} />  
          <Route exact path='/chat' element={<Protected><Chat /></Protected>} />
          <Route exact path='/referral' element={<Protected><Referral /></Protected>} />
          <Route exact path='/profile' element={<Protected><Profile /></Protected>} />
        </Routes>
        </Router>
      </div>
    );
  }

export default App;

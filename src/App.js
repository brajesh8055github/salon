import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './Pages/LandingPage';
import Top from './components/Top';

function App() {
  return (
    <div>
      <Top/>
      <Navbar/>
      <LandingPage/>
    </div>
  );
}

export default App;

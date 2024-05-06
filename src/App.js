import './App.css'; 
import NavBar from './NavBar/NavBar';
import Dashborad from './NavBar/Dashbord';
import FirstPage from './NavBar/FirstPage';
import SecondPage from './NavBar/SecondPage';
import ThirdPage from './NavBar/ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';

function App() {
  return (
    <div className="App"> 
    <Dashborad/> 
    <NavBar/>
    <FirstPage/>
    <SecondPage/> 
    <ThirdPage/>
    <FourthPage/>
    <FifthPage/>

    

    </div>
  );
}

export default App;

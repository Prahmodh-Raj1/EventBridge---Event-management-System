import logo from './logo.svg';
import './App.css';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import ParticipatedEvents from './Components/ParticipatedEvents/ParticipatedEvents';
import HostedEvents from './Components/HostedEvents/HostedEvents';
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents';
import EventRegister from './Components/EventRegister/EventRegister';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import LoginSuccessful from './Components/Form/LoginSuccessful';
import RegisterSuccessful from './Components/Form/RegisterSuccessful';
import EventSuccess from './Components/EventRegister/EventSuccess';
import CreateSuccess from './Components/CreateEvent/CreateSucces';
import Feedback from './Components/Feedback/Feedback';
import FeedbackSuccessful from './Components/Feedback/FeedbackSuccessful';
import BookAccomodation from './Components/ParticipatedEvents/BookAccomodation';
import UpdateSuccess from './Components/UpdateProfile/UpdateSuccess';

function App() {
  return (
    <BrowserRouter>
      
    <GlobalStyle/>
   
    <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/success1" element={<LoginSuccessful />} ></Route>
        <Route path="/success2" element={<RegisterSuccessful />} ></Route>
        <Route path="/success3" element={<EventSuccess />} ></Route>
        <Route path="/success4" element={<CreateSuccess />} ></Route>
        <Route path="/success5" element={<FeedbackSuccessful/>}></Route>
        <Route path="/success6" element={<BookAccomodation/>}></Route>
        <Route path="/success7" element={<UpdateSuccess/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboard/createevent" element={<CreateEvent/>}></Route>
        <Route path="/dashboard/participatedevents" element={<ParticipatedEvents/>}></Route>
        <Route path="/dashboard/hostedevents" element={<HostedEvents/>}></Route>
        <Route path="/dashboard/upcomingevents" element={<UpcomingEvents/>}></Route>
        <Route path="/dashboard/eventregister" element={<EventRegister/>}></Route>
        <Route path="/dashboard/updateprofile" element={<UpdateProfile/>}></Route>
        <Route path="/dashboard/feedback" element={<Feedback/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
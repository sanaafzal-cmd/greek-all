import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/HomePage/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';
import Layout from './Components/Layout';
import ForgotPassword from './Components/ForgotPassword';
import Otp from './Components/Otp';
import NewPassword from './Components/NewPassword';
import Events from './Components/Events';
import Jobs from './Components/Jobs';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import Greeks from './Components/Greeks';
import Modal from './Components/HomePage/Modal';
import EventsCalendar from './Components/EventsPage/EventsCalendar'
import Interested from './Components/EventsPage/allTabs/Interested';





function App() {
  return (
   
      <BrowserRouter>
      
<Routes>

  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
    {/* <Route exact path='/home' element={<Home />} /> */}
     <Route exact path='/events' element={<EventsCalendar />} />
     <Route exact path='/jobs' element={<Jobs />} />
     <Route exact path='/contact' element={<Contact />} />
     <Route exact path='/faqs' element={<Faq />} />
     <Route exact path="/signup" element={<Signup />} />
    <Route exact path="/login" element={<Login />} /> 
    <Route exact path="/setpassword" element={<NewPassword />} /> 
    <Route exact path="/greeks" element={<Greeks />} /> 
    <Route exact path="/forgotpassword" element={<ForgotPassword />} />
    <Route exact path="/otp" element={<Otp />} />
    <Route exact path="/eventmodal" element={<Modal />} />
    <Route exact path="/eventcalendar" element={<EventsCalendar />} />
   
   
  </Route>
  
</Routes>
 </BrowserRouter>  
    
  );
}

export default App;



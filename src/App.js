import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import Protected from './pages/Home/Protected';
import SignUp from './pages/Home/SignUp';
import Navbar from './pages/shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import MyHistory from './pages/Dashboard/MyHistory';
import AllUsers from './pages/Dashboard/AllUsers';
import ProtectedAdmin from './pages/Home/ProtectedAdmin';
import AddDoctors from './pages/Dashboard/AddDoctors';
import ManageDoctors from './pages/Dashboard/ManageDoctors';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <Protected>
            <Appointment></Appointment>
          </Protected>
        }></Route>
        <Route path='/dashboard' element={
          <Protected>
            <Dashboard></Dashboard>
          </Protected>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='addDoctor' element={<AddDoctors></AddDoctors>}></Route>
          <Route path='manageDoctor' element={<ManageDoctors></ManageDoctors>}></Route>
          <Route path='users' element={
            <ProtectedAdmin>
              <AllUsers></AllUsers>
            </ProtectedAdmin>
          }></Route>
          {/* <Route path='addDoctor' element={
            <ProtectedAdmin>
              <AddDoctors></AddDoctors>
            </ProtectedAdmin>
          }></Route> */}
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

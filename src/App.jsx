//import { Button } from 'react-bootstrap';
// import Navigation from './components/Navigation';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

// News & Advisories
import BcwdNews from './pages/news_advisory/BcwdNews';
import ServiceAdvisories from './pages/news_advisory/ServiceAdvisories';
import WaterQualityResult from './pages/news_advisory/WaterQualityResult';
import DonorUpdates from './pages/news_advisory/DonorUpdates';

// Bills & Payments
import BillsPaymentPartners from './pages/bills_payments/BillsPaymentPartners';
import BillCalculator from "./pages/bills_payments/BillCalculator";

// Company
import AboutUs from './pages/company/AboutUs';
import Bidding from './pages/company/Bidding';
import Transparency from './pages/company/Transparency';

// Contact Us
import ContactUs from './pages/contact_us/ContactUs';
import Faqs from './pages/contact_us/Faqs';

// Auth
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import NewPassword from "./pages/authentication/NewPassword";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import VerificationCode from "./pages/authentication/VerificationCode";
import SuccessfullyResetPassword from "./pages/authentication/SuccessfullyResetPassword";

// My Water Bill
import MyProfile from "./pages/myWaterBill/MyProfile";
import MyWaterBill from "./pages/myWaterBill/MyWaterBill";
import ChangePassword from "./pages/myWaterBill/ChangePassword";
import WaterBillLayout from "./pages/WaterBillLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          {/* News & Advisories */}
          <Route path='bcwdnews' element={<BcwdNews />} />
          <Route path='serviceadvisories' element={<ServiceAdvisories />} />
          <Route path='waterqualityresult' element={<WaterQualityResult />} />
          <Route path='donorupdates' element={<DonorUpdates />} />

          {/* Bills & Payments */}
          <Route path='billspaymentpartners' element={<BillsPaymentPartners />} />
          <Route path='billcalculator' element={<BillCalculator />} />

          {/* Company */}
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='bidding' element={<Bidding />} />
          <Route path='transparency' element={<Transparency />} />

          {/* Contact Us */}
          <Route path='contactus' element={<ContactUs />} />
          <Route path='faqs' element={<Faqs />} />

          {/* Authentication Page */}
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot_password' element={<ForgotPassword />} />
          <Route path='verification_code' element={<VerificationCode />} />
          <Route path='new_password' element={<NewPassword />} />
          <Route path='successfully_reset_password' element={<SuccessfullyResetPassword />} />

          {/* My Water Bill */}
          <Route path='profile' element={<MyProfile />} />
          <Route path='water_bill' element={<MyWaterBill />} />
          <Route path='change_password' element={<ChangePassword />} />

          {/* error handler */}
          <Route path='*' element={<NoPage />} />
        </Route>

        {/* My Water Bill */}
        <Route path='/bill' element={<WaterBillLayout />}>
          {/* <Route index element={<MyWaterBill />} /> */}

          {/* News & Advisories */}
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='mywaterbill' element={<MyWaterBill />} />
          <Route path='changepassword' element={<ChangePassword />} />


        </Route>
      </Routes>
    </>
  );
}
export default App;
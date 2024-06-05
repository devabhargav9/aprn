import React from 'react';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import './App.css'
import KCOverSeas from './components/kcOverseas';
import BalanceApp from './components/BalanceApp';
import CaseStudiesHome from './containers/CaseStudies';
import AppDevelopment from './components/AppDevelopment';
import CloudService from './components/CloudService';
import DevopsService from './components/Devops';
import AIML from './components/AiMlService';
import DigitalAnalytics from './components/DigitalAnalytics';
import IOT from './components/IOT';
import Ecom from './components/Ecom';
import DevTeams from './components/ItTeams';
import ContactPage from './containers/ContactPage';
import AboutUs from './components/AboutUs';



const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service-devops" element={<DevopsService />} />
      <Route path="/service-cloud" element={<CloudService />} />
      <Route path="/service-appDevelopment" element={<AppDevelopment />} />
      <Route path="/service-aiml" element={<AIML />} />
      <Route path="/service-digitalAnalytics" element={<DigitalAnalytics />} />
      <Route path="/service-iot" element={<IOT />} />
      <Route path="/service-ecom" element={<Ecom />} />
      <Route path="/service-devTeams" element={<DevTeams />} />
      <Route path="/caseStudies" element={<CaseStudiesHome />} />
      <Route path="/caseStudies/balance-app" element={<BalanceApp />} />  
      <Route path="/caseStudies/kc-overseas" element={<KCOverSeas />} />   
      <Route path="/contactUs" element={<ContactPage />} />  
      <Route path='/aboutUs' element={<AboutUs />} /> 
    </Routes>
  </Router>
  );
};

export default App;
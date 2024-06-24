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
import MalayAirlines from './components/MalayAirlines';
import MayBank from './components/MayBank';
import CarPool from './components/CarPool';
import DevopsCase1 from './components/devopsCase1';
import DevopsCase2 from './components/devopsCase2';
import DevopsCase3 from './components/devopsCase3';



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
      <Route path='/caseStudies/malaysia-airlines' element={<MalayAirlines/>} /> 
      <Route path='/caseStudies/maybank' element={<MayBank/>} />
      <Route path="/caseStudies/carpool" element={<CarPool />} />
      <Route path="/caseStudies/devops-appModernization" element={<DevopsCase1 />} />
      <Route path="/caseStudies/cloud-cs" element={<DevopsCase2 />} />
      <Route path="/caseStudies/appModern-cs" element={<DevopsCase3 />} />
      <Route path="/contactUs" element={<ContactPage />} />  
      <Route path='/aboutUs' element={<AboutUs />} /> 
    </Routes>
  </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import Header2 from './Components/Header2';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import InvestorCharter from './Components/InvestorCharter';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import UserLandingPage from './Components/UserLandingPage';
import FAQs from './Components/FAQ';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const ContentContainer = styled.div`
    flex: 1;
    overflow-y: auto;
    padding-top: 60px;
`;

const App = () => {
    return (
        <AppContainer>
            <ConditionalHeader />
            <ContentContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/investor-charter" element={<InvestorCharter />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/userlanding/*" element={<UserLandingPage />} />
                    <Route path="/faqs" element={<FAQs />} />
                </Routes>
            </ContentContainer>
            <Footer />
        </AppContainer>
    );
};

const ConditionalHeader = () => {
    const location = useLocation();
    return location.pathname.startsWith('/userlanding') ? <Header2 /> : <Header />;
};

const MainApp = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default MainApp;

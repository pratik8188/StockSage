import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header2 from './Header2';
import styled from 'styled-components';
import Recommendations from './Recommendations';

const StyledUserLandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const StyledUserLandingCard = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #D4A3F3, #C9D1EB, #9EEADE, #97DBE8, #9DCFF6);
`;

const StyledCard = styled.div`
    width: 60%;
    margin: auto;
    padding: 40px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;

const UserLandingPage = () => {
    return (
        <StyledUserLandingContainer>
            <Header2 />
            <StyledUserLandingCard>
                <StyledCard>
                    <Routes>
                        <Route path="/recommendations" element={<Recommendations />} />
                        <Route path="/" element={<DefaultLanding />} />
                    </Routes>
                </StyledCard>
            </StyledUserLandingCard>
        </StyledUserLandingContainer>
    );
};

const DefaultLanding = () => (
    <StyledCard>
        <h2 className="text-center mb-4">User Landing Page</h2>
        <p>Welcome to the User Landing Page!</p>
    </StyledCard>
);

export default UserLandingPage;

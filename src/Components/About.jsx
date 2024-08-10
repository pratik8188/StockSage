import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutContainer>
            <h2>About Us</h2>
            <AboutText>
                <p>This is the about page.</p>
            </AboutText>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
    padding: 2rem;
    text-align: center;
`;

const AboutText = styled.div`
    margin-top: 1rem;
`;

export default About;

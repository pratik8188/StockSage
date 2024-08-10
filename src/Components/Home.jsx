import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <StyledContainer>
            <StyledContent>
                <h1>Home Page</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt repudiandae
                    nam molestias quae earum temporibus, architecto beatae in soluta placeat omnis vel eum,
                    dolor pariatur asperiores unde optio animi.
                </p>
            </StyledContent>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 150px); /* Adjust for header and footer height */
    background: linear-gradient(to right, #D4A3F3, #C9D1EB, #9EEADE, #97DBE8, #9DCFF6);
`;

const StyledContent = styled.div`
    background-color: #ffffff; /* White background for content */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 800px;
    width: 100%; /* Adjust width to be responsive */
    text-align: center; /* Center align content */
`;

export default Home;

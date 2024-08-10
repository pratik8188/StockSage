import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #D4A3F3, #C9D1EB, #9EEADE, #97DBE8, #9DCFF6);
`;

const StyledLoginCard = styled.div`
    width: 300px;
    padding: 40px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledFormGroup = styled.div`
    margin-bottom: 1rem;
`;

const StyledFormLabel = styled.label`
    font-weight: bold;
`;

const StyledFormInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 3px;
`;

const StyledLoginButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #9EEADE;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        background-color: #97DBE8;
    }
`;

const StyledErrorText = styled.p`
    color: #dc3545;
    font-size: 0.875rem;
    text-align: center;
`;

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUserData = localStorage.getItem(username);
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            if (userData.password === password) {
                navigate('/userlanding');
            } else {
                setError('Invalid username or password');
            }
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <StyledLoginContainer>
                <StyledLoginCard>
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <StyledErrorText>{error}</StyledErrorText>}
                    <StyledLoginForm onSubmit={handleLogin}>
                        <StyledFormGroup>
                            <StyledFormLabel htmlFor="username">Username</StyledFormLabel>
                            <StyledFormInput
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </StyledFormGroup>
                        <StyledFormGroup>
                            <StyledFormLabel htmlFor="password">Password</StyledFormLabel>
                            <StyledFormInput
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </StyledFormGroup>
                        <StyledLoginButton type="submit">Login</StyledLoginButton>
                    </StyledLoginForm>
                </StyledLoginCard>
            </StyledLoginContainer>
        </>
    );
};

export default LoginPage;

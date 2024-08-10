import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (firstName && lastName && mobileNumber && email && username && password && confirmPassword && isChecked) {
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }

            // Store user data in localStorage
            const userData = { firstName, lastName, mobileNumber, email, username, password };
            localStorage.setItem(username, JSON.stringify(userData));

            // Display success message and redirect to home page after 2 seconds
            setSuccessMessage('Registration successful');
            setTimeout(() => {
                setSuccessMessage('');
                navigate('/'); // Navigate to home page after registration
            }, 2000);
        } else {
            setError('Please fill in all fields and confirm the details');
        }
    };

    return (
        <>
            <StyledRegisterContainer>
                <StyledRegisterCard>
                    <h2 className="text-center mb-4">Register</h2>
                    {error && <StyledErrorText>{error}</StyledErrorText>}
                    {successMessage && <StyledSuccessText>{successMessage}</StyledSuccessText>}
                    <StyledRegisterForm onSubmit={handleRegister}>
                        <Row>
                            <Column>
                                <StyledFormGroup>
                                    <StyledFormLabel htmlFor="firstName">First Name</StyledFormLabel>
                                    <StyledFormInput
                                        type="text"
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </StyledFormGroup>
                            </Column>
                            <Column>
                                <StyledFormGroup>
                                    <StyledFormLabel htmlFor="lastName">Last Name</StyledFormLabel>
                                    <StyledFormInput
                                        type="text"
                                        id="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </StyledFormGroup>
                            </Column>
                        </Row>
                        <StyledFormGroup>
                            <StyledFormLabel htmlFor="mobileNumber">Mobile Number</StyledFormLabel>
                            <StyledFormInput
                                type="text"
                                id="mobileNumber"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                required
                            />
                        </StyledFormGroup>
                        <StyledFormGroup>
                            <StyledFormLabel htmlFor="email">Email Address</StyledFormLabel>
                            <StyledFormInput
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </StyledFormGroup>
                        <StyledFormGroup>
                            <StyledFormLabel htmlFor="username">User ID</StyledFormLabel>
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
                        <StyledFormGroup>
                            <StyledFormLabel htmlFor="confirmPassword">Confirm Password</StyledFormLabel>
                            <StyledFormInput
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </StyledFormGroup>
                        <StyledFormGroup>
                            <StyledFormCheckbox>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => setIsChecked(!isChecked)}
                                    required
                                />{' '}
                                I confirm the details
                            </StyledFormCheckbox>
                        </StyledFormGroup>
                        <StyledRegisterButton type="submit">Register</StyledRegisterButton>
                    </StyledRegisterForm>
                </StyledRegisterCard>
            </StyledRegisterContainer>
        </>
    );
};

const StyledRegisterContainer = styled.div`
    padding-top: 80px; /* Adjust according to the height of your header */
    padding-bottom: 60px; /* Adjust according to the height of your footer */
`;

const StyledRegisterCard = styled.div`
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;

const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledFormGroup = styled.div`
    margin-bottom: 1rem;
`;

const Row = styled.div`
    display: flex;
    gap: 10px;
`;

const Column = styled.div`
    flex: 1;

    &:first-child {
        margin-right: 10px;
    }
`;

const StyledFormLabel = styled.label`
    font-weight: bold;
`;

const StyledFormInput = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 3px;
`;

const StyledFormCheckbox = styled.label`
    display: flex;
    align-items: center;
`;

const StyledRegisterButton = styled.button`
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

const StyledSuccessText = styled.p`
    color: #28a745;
    font-size: 0.875rem;
    text-align: center;
`;

export default Register;

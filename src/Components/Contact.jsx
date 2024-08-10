import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer>
            <h2>Contact Us</h2>
            <p>If you have any questions or need further information, please contact us at:</p>
            <ContactDetails>
                <p>Email: support@stocksage.com <br />
                   Phone: +1 234 567 890 <br />
                   Address: 123 Finance Street, Money City, Wealth Country</p>
            </ContactDetails>
        </ContactContainer>
    );
};

const ContactContainer = styled.div`
    padding: 2rem;
    text-align: center;
`;

const ContactDetails = styled.div`
    margin-top: 1rem;
`;

export default Contact;

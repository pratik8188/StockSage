import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinks>
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/faqs">FAQs</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/investor-charter">Investor Charter</FooterLink>
            </FooterLinks>
            <FooterText>© 2024 StockSage. All rights reserved.</FooterText>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background: linear-gradient(to right, #D4A3F3, #C9D1EB, #9EEADE, #97DBE8, #9DCFF6);
    color: #fff;
    padding: 1rem 0;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const FooterLinks = styled.div`
    margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const FooterText = styled.p`
    margin: 0;
`;

export default Footer;

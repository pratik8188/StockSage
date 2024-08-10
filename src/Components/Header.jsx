import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo to="/">StockSage</Logo>
            <Nav>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background: linear-gradient(to right, #D4A3F3, #C9D1EB, #9EEADE, #97DBE8, #9DCFF6);
    color: #fff;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
`;

const Logo = styled(Link)`
    margin-left: 1rem;
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Nav = styled.nav`
    margin-right: 1rem;
`;

const NavLink = styled(Link)`
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export default Header;

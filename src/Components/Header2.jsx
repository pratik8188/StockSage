import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBell, FaUser } from 'react-icons/fa';

const Header2 = () => {
    return (
        <HeaderContainer>
            <TopBar>
                <LogoContainer>
                    <Logo to="/">StockSage</Logo>
                </LogoContainer>
                <SearchBarContainer>
                    <SearchBar type="text" placeholder="Search..." />
                </SearchBarContainer>
                <NavContainer>
                    <NavLink to="/notifications">
                        <FaBell size={24} />
                    </NavLink>
                    <NavLink to="/profile">
                        <FaUser size={24} />
                    </NavLink>
                </NavContainer>
            </TopBar>
            <LinksContainer>
                <StyledNavLink to="/userlanding/recommendations">Recommendations</StyledNavLink>
                <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
                <StyledNavLink to="/market-trend">Market Trend</StyledNavLink>
                <StyledNavLink to="/past-performance">Past Performance</StyledNavLink>
                <StyledNavLink to="/content">Content</StyledNavLink>
                <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
            </LinksContainer>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background: linear-gradient(to right, #D4A3F3, #C9D1EB, #9EEADE, #97DBE8, #9DCFF6);
    color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
`;

const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled(Link)`
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const SearchBarContainer = styled.div`
    flex: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchBar = styled.input`
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
`;

const NavContainer = styled.nav`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    display: flex;
    align-items: center;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
    width: 100%;
    padding: 0 1rem;
`;

const StyledNavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        text-decoration: underline;
    }
`;

export default Header2;

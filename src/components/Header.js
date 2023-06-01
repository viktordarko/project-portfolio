import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <HeaderContainer>
      <StyledHamburger src="/assets/hamburger.png" onClick={handleMenuClick} />
      <Menu isVisible={isVisible}>
        <MenuNavbarLink to="/" onClick={handleMenuClick}>Home</MenuNavbarLink>
        <MenuNavbarLink to="/experience" onClick={handleMenuClick}>Experience</MenuNavbarLink>
        <MenuNavbarLink to="/projects" onClick={handleMenuClick}>Projects</MenuNavbarLink>
        <MenuNavbarLink to="/contact" onClick={handleMenuClick}>Contact</MenuNavbarLink>
      </Menu>
      <StyledNav>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/experience">Experience</NavbarLink>
        <NavbarLink to="/projects">Projects</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </StyledNav>
      <StyledHeader>@ViktorDarko</StyledHeader>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("/assets/styleImages/Header_bg.jpg");
  height: 5em;

  @media only screen and (max-width: 700px) {
    height: 3em;
}

`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: fit-content;
  width: 30% ;
  opacity: .95;
  top: 3em;
  color: black;
  background-color: lightgray;
  z-index: 3;
  border-radius:0 10% 10%;

  ${({ isVisible }) =>
    !isVisible
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};

  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

const StyledHamburger = styled.img`
  position: relative;
  left: 0.5em;
  display: none;
  opacity: 0.8;

  &:hover {
    box-shadow: 0 0 10px 5px blue;
    background-color: blue;
  }

  @media only screen and (max-width: 700px) {
    display: block;
  }
`;

const StyledHeader = styled.h1`
  margin-left: 1em;
  font-style: italic;
`;

const NavbarLink = styled(NavLink)`
  margin: 1em;
  color: #fff;
  font-size: larger;
  &.active {
    border-bottom: 2px solid bisque;
    padding-bottom: 5px;
    color: beige;
    font-size: x-large;
    font-weight: 600;
  }
`;

const MenuNavbarLink = styled(NavbarLink)`
color: var(--secondary-color);
&.active {
color:darkslategray;

}
`

const StyledNav = styled.nav`
  display: block;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export default Header;

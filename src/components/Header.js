import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/experience">Experience</NavbarLink>
        <NavbarLink to="/projects">Projects</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </nav>
            <StyledHeader>@ViktorDarko</StyledHeader>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("/assets/styleimages/Header_bg.jpg");
  height: 5em;
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
    border-bottom: 2px solid purple;
    padding-bottom: 5px;
    color: beige;
    font-size: x-large;
    font-weight: 600;
  }
`;

export default Header;

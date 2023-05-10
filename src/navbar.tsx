import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { StyledH1 } from "./common_components";
import { useRouteChange } from "./helpers/hooks";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const handletoggleNavbar = () => {
    setNavbarOpen((prevState) => !prevState);
  };
  return (
    <NavbarWrapper>
      <Navbardropdown
        active={navbarOpen}
        handletoggleNavbar={handletoggleNavbar}
      />

      <NavbarLogoWrapper>
        <h1>D</h1>
      </NavbarLogoWrapper>
      <NavbarMenuWrapper onClick={handletoggleNavbar}>
        <GiHamburgerMenu size={55} color="white" />
      </NavbarMenuWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;

type navbardropdownType = {
  active: boolean;
  handletoggleNavbar?: any;
};

const Navbardropdown = ({ active, handletoggleNavbar }: navbardropdownType) => {
  const changeRoute = useRouteChange();

  const siteLinks = [
    {
      page: "Home",
      url: "/",
    },
    {
      page: "About Me",
      url: "/about",
    },
    {
      page: "Projects",
      url: "/projects",
    },
    {
      page: "My Music",
      url: "/music",
    },
    {
      page: "Resume",
      url: "",
    },
  ];
  return (
    <NavbarDropdownWrapper onClick={handletoggleNavbar} active={active}>
      <NavbarDropdownCloseWrapper>
        <AiOutlineClose size={30} color="white" />
      </NavbarDropdownCloseWrapper>
      <StyledH1>NAVIGATION</StyledH1>
      <NavbarDropdownMenu>
        {siteLinks.map((link) => {
          return (
            <>
              <MenuDivider />
              <MenuText onClick={() => changeRoute(link.url)}>
                {link.page}
              </MenuText>
            </>
          );
        })}
        <MenuDivider />
      </NavbarDropdownMenu>
    </NavbarDropdownWrapper>
  );
};

const NavbarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`;

const NavbarDropdownWrapper = styled.div<navbardropdownType>`
  position: fixed;
  display: flex;

  align-items: center;
  flex-direction: column;
  background-color: #1e1e1e;

  width: 100%;
  top: 0;
  left: 0;
  transform: translateY(${({ active }) => (active ? "0" : "-110%")});
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 3px 9px 7px #1e1e1e5b;
`;

const MenuDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #5f5f5f;
`;

const MenuText = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.045em;

  color: #ffffff;
`;

const NavbarDropdownCloseWrapper = styled.div`
  width: 90%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 1.5rem;
`;

const NavbarDropdownMenu = styled.div`
  width: 100%;
`;

const NavbarLogoWrapper = styled.div`
  font-family: "Sheeping Dogs";
  color: white;
  font-size: 25px;
  padding: 0;

  h1 {
    margin: 0;
    padding-left: 1.5rem;

    border-radius: 4px;

    /* identical to box height */
    border-left: 5px solid white;
  }
`;

const NavbarMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;

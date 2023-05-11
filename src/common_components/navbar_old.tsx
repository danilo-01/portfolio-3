// Packages
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

// Custom

import { disablePageScroll } from "../helpers/functions";
import { CSS_noSelect } from "../helpers/css_snippets";
import { useRouteChange, useDetectRouteChange } from "../helpers/hooks";
import StyledButton from "./styled-button";

function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);
  const [hiddenNavbar, setHiddenNavbar] = useState<boolean>(false);
  const changeRoute = useRouteChange();

  const currentPath = window.location.pathname;

  const handleRouteChange = (path: string) => {
    changeRoute(path);
    setNavbarActive(false);
  };

  const handleNavbarReset = useCallback(() => {
    setHiddenNavbar(false);
  }, []);

  useDetectRouteChange(handleNavbarReset);

  const handleNavmenuActive = (active: boolean) => {
    // Disable background scroll
    disablePageScroll(active);

    setNavbarActive(active);
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollpos >= currentScrollPos) {
        setHiddenNavbar(false);
      } else {
        setHiddenNavbar(true);
      }

      prevScrollpos = currentScrollPos;
    };

    disablePageScroll(navbarActive);
  });

  return (
    <NavbarWrapper hidden={hiddenNavbar} active={navbarActive}>
      <NavbarBackgroundOverlay
        onClick={() => handleNavmenuActive(false)}
        active={navbarActive}
      ></NavbarBackgroundOverlay>
      <NavBarTitle onClick={() => handleRouteChange("/")}>
        Noemi's Cheesecakes
      </NavBarTitle>
      {/*Top bar */}
      <NavHamburger onClick={() => handleNavmenuActive(true)} size={40} />

      {/* Top bar links */}
      <NavbarLinks>
        {[].map((page: any, idx: number) => {
          return (
            <NavbarLink
              key={uuidv4()}
              active={currentPath === page.link}
              onClick={() => handleRouteChange(page.link)}
            >
              <p>{page.name}</p>
            </NavbarLink>
          );
        })}
      </NavbarLinks>

      {/*Side menu */}
      <NavbarSideMenu active={navbarActive}>
        <NavbarSideMenuClose
          onClick={() => handleNavmenuActive(false)}
          size={50}
        />
        <NavbarSideMenuContent>
          {[].map((page: any) => {
            return (
              <NavbarSideMenuLink
                key={uuidv4()}
                onClick={() => handleRouteChange(page.link)}
              >
                {/* {page.icon} */}
                <p>{page.name}</p>
              </NavbarSideMenuLink>
            );
          })}
        </NavbarSideMenuContent>
        <NavbarSideMenuChip action={() => handleRouteChange("/contact")}>
          Contact us
        </NavbarSideMenuChip>
      </NavbarSideMenu>
    </NavbarWrapper>
  );
}

export default Navbar;

type navbarWrapperProps = {
  active: boolean;
  hidden: boolean;
};

const NavbarWrapper = styled.div<navbarWrapperProps>`
  width: 100%;
  height: 5rem;
  background-color: blue;
  display: flex;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  position: fixed;
  top: 0px;
  top: ${(props) => (props.hidden ? "-100px" : "0px")};

  ${CSS_noSelect}

  transition: all 0.2s ease-in-out;
`;
const NavBarTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  margin-left: 1rem;
  display: flex;

  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #39081a;
`;

type navbarBackgroundOverlayProps = {
  active: boolean;
};

const NavbarBackgroundOverlay = styled.div<navbarBackgroundOverlayProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  background-color: black;
  opacity: ${(props) => (props.active ? "25%" : "0%")};
  display: ${(props) => !props.active && "none"};
  transition: all 0.2s ease-in-out;
`;

const NavHamburger = styled(RxHamburgerMenu)`
  position: absolute;
  right: 1rem;
`;

const NavbarLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;
type navbarLinProps = {
  active?: boolean;
};
const NavbarLink = styled.div<navbarLinProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;

  ${(props) => props.active && "background: #FF5F9B; "}
  ${(props) => props.active && " border-radius: 32px;"}
  ${(props) => props.active && " color: #ffffff;"}
`;

/**Navbar side menu */
type navbarSideMenuProps = {
  active: boolean;
};
const NavbarSideMenu = styled.div<navbarSideMenuProps>`
  position: fixed;
  top: 0;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: blue;
  left: ${(props) => (props.active ? "20%" : "100%")};
  transition: all 0.2s ease-in-out;
`;

const NavbarSideMenuClose = styled(IoIosClose)`
  position: relative;
  left: 1rem;
  top: 1rem;
`;

const NavbarSideMenuContent = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 0;
  top: 2rem;
`;

const NavbarSideMenuLink = styled.div`
  width: auto;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1.5rem;

  margin-top: 2rem;

  p {
    margin-left: 1rem;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

const NavbarSideMenuChip = styled(StyledButton)`
  margin: auto auto 1rem auto;
  width: 80%;
`;

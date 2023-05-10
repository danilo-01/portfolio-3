import React, { useCallback } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { GiHamburgerMenu } from "react-icons/gi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

// Layout Section Start
type layoutProps = { children?: React.ReactNode };

const Layout = ({ children }: layoutProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <LayoutWrapper>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },

          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#10c5d5",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar />
      {children}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div``;
// Layout Section End

// Navbar Start

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarLogoWrapper>
        <h1>D</h1>
      </NavbarLogoWrapper>

      <NavbarMenuWrapper>
        <GiHamburgerMenu size={55} color="white" />
      </NavbarMenuWrapper>
    </NavbarWrapper>
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

// Navbar End

// Common

export default App;

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import Navbar from "./navbar";

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
              // onClick: {
              //   enable: true,
              //   mode: "push",
              // },
              // onHover: {
              //   enable: true,
              //   mode: "repulse",
              // },
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
              value: 150,
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
export default Layout;

const LayoutWrapper = styled.div``;

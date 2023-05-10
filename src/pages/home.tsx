import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import styled from "styled-components";
import { primaryColor } from "../styles";
import { StyledH1 } from "../common_components";

const Home = () => {
  const iconSize = 40;
  const bottomLinkIcons = [
    {
      icon: <AiFillGithub color="white" size={iconSize} />,
      url: "https://github.com/danilo-01",
    },
    {
      icon: <BsSpotify color="white" size={iconSize} />,
      url: "https://open.spotify.com/artist/7Er2vexJITtR4plcfRGcdt",
    },
    {
      icon: <AiFillLinkedin color="white" size={iconSize} />,
      url: "https://www.linkedin.com/in/danilo-costilla-19554b16a/",
    },
    {
      icon: <IoMdMail color="white" size={iconSize} />,
      url: "",
    },
  ];

  return (
    <HomepageWrapper>
      <HomepageHeaders>
        <HomeHeader>DANILO COSTILLA</HomeHeader>
        <HomeSubHeader>Software Engineer</HomeSubHeader>
      </HomepageHeaders>
      <HomepageNavigation>
        <HomepageNavigationText>About Me</HomepageNavigationText>
        <HomepageNavigationText>Projects</HomepageNavigationText>
        <HomepageNavigationText>My Music</HomepageNavigationText>
        <HomepageNavigationText>Resume</HomepageNavigationText>
      </HomepageNavigation>
      <HomepageBottomLinks>
        {bottomLinkIcons.map((icon) => {
          return (
            <HomepageBottomLinkWrapper>{icon.icon}</HomepageBottomLinkWrapper>
          );
        })}
      </HomepageBottomLinks>
    </HomepageWrapper>
  );
};

export default Home;

const HomepageWrapper = styled.div`
  background-color: ${primaryColor};
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
`;

const HomepageHeaders = styled.div`
  margin: 6rem auto 1rem auto;
`;

const HomeHeader = styled(StyledH1)`
  width: 346px;
  height: 115px;
`;

const HomeSubHeader = styled.h2`
  /* Software Engineer */

  width: 346px;
  height: 32px;

  font-family: "Roboto";
  font-style: italic;
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.045em;

  color: #fcddec;
`;

const HomepageNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const HomepageNavigationText = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  margin: 1rem 0;
  box-shadow: 1px 1px 8px 1px black;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  background-color: "#1e1e1e97";

  /* identical to box height */

  letter-spacing: 0.045em;

  color: #ffffff;
`;

const HomepageBottomLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomepageBottomLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;

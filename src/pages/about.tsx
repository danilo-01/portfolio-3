import React from "react";
import styled from "styled-components";
import { ColumnPageWrapper, StyledH1 } from "../common_components";
import { IoMdMail } from "react-icons/io";
import { fadeInTransition } from "../styles";

const About = () => {
  return (
    <AboutWrapper>
      <AboutHeader>About</AboutHeader>
      <AboutText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
        mollitia nesciunt numquam voluptas laudantium iure iusto
      </AboutText>
      <AboutText>
        assumenda odit officia laborum nostrum aliquam similique soluta
        molestiae veritatis deleniti nam modi ipsam!
      </AboutText>

      <AboutCTAHeader>LET'S WORK TOGETHER</AboutCTAHeader>

      <IoMdMail color="white" size={40} />
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled(ColumnPageWrapper)`
  align-items: center;
`;

const AboutHeader = styled(StyledH1)`
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  padding: 0 0 1rem 1rem;
  margin-top: 7rem;
  width: 50%;
  margin-right: auto;
  margin-left: 1rem;

  ${fadeInTransition}
`;

const AboutText = styled.p`
  width: 90%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.045em;

  color: #ffffff;
`;

const AboutCTAHeader = styled(StyledH1)`
  margin-top: 7rem;

  font-size: 36px;
  width: 90%;
  text-align: center;
  line-height: 36px;
`;

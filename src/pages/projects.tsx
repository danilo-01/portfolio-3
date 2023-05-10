import React from "react";
import { ColumnPageWrapper, StyledH1 } from "../common_components";
import styled from "styled-components";
import { fadeInTransition } from "../styles";
import { myProjects } from "../projects";
import { IoMdMail } from "react-icons/io";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectsHeader>Projects</ProjectsHeader>
      <ProjectsSectionWrapper>
        {myProjects.map((projectData) => {
          return <Project projectData={projectData} />;
        })}
      </ProjectsSectionWrapper>
      <ProjectsCTAHeader>LET'S WORK TOGETHER</ProjectsCTAHeader>

      <IoMdMail color="white" size={40} />
    </ProjectsWrapper>
  );
};

export default Projects;

const ProjectsWrapper = styled(ColumnPageWrapper)`
  align-items: center;
`;

const ProjectsHeader = styled(StyledH1)`
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  padding: 0 0 1rem 1rem;
  margin-top: 7rem;
  width: 80%;
  margin-right: auto;
  margin-left: 1rem;

  ${fadeInTransition}
`;

const ProjectsSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
/******************************************** */
type ptojectProps = {
  projectData: {
    url: string;
    name: string;
    length: string;
  };
};
const Project = ({ projectData }: ptojectProps) => {
  return (
    <ProjectWrapper>
      <ProjectIcon url={projectData.url}></ProjectIcon>
      <ProjectInformation>
        <ProjectName>{projectData.name}</ProjectName>
        <ProjectLength>{projectData.length}</ProjectLength>
      </ProjectInformation>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`;

type projectIcontype = {
  url: string;
};
const ProjectIcon = styled.div<projectIcontype>`
  width: 4rem;
  height: 4rem;
  background-color: #ffffff;
  margin-right: 1rem;
`;

const ProjectInformation = styled.div`
  display: flex;

  flex-direction: column;
`;

const ProjectName = styled.h3`
  font-family: "The Bold Font";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;

  color: #ffffff;
  margin-bottom: 0;
`;

const ProjectLength = styled.h4`
  font-family: "Roboto";
  font-style: italic;
  font-weight: 100;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #ffffff;
`;

const ProjectsCTAHeader = styled(StyledH1)`
  margin-top: 7rem;

  font-size: 36px;
  width: 90%;
  text-align: center;
  line-height: 36px;
`;

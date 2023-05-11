import React from "react";
import { ColumnPageWrapper, StyledH1 } from "../common_components";
import styled from "styled-components";
import { fadeInTransition } from "../styles";
import { showcasedTracks } from "../showcased-tracks";
import { IoMdMail } from "react-icons/io";
import { BsSpotify } from "react-icons/bs";
import { navigateExternal } from "../helpers/functions";

const MusicShowcase = () => {
  return (
    <MusicShowcaseWrapper>
      <MusicShowcaseHeader>My Music</MusicShowcaseHeader>
      <MusicShowcaseDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been{" "}
      </MusicShowcaseDescription>
      <MusicShowcaseSectionWrapper>
        {showcasedTracks.map((track) => {
          return <Track track={track} />;
        })}
      </MusicShowcaseSectionWrapper>
      <MusicShowcaseCTAHeader>FOLLOW ME</MusicShowcaseCTAHeader>
      <BsSpotify
        onClick={() =>
          navigateExternal(
            "https://open.spotify.com/artist/7Er2vexJITtR4plcfRGcdt"
          )
        }
        color="#1db954"
        size={40}
      />
    </MusicShowcaseWrapper>
  );
};

export default MusicShowcase;

const MusicShowcaseWrapper = styled(ColumnPageWrapper)`
  align-items: center;
  justify-content: center;
`;

const MusicShowcaseHeader = styled(StyledH1)`
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  padding: 0 0 1rem 1rem;
  margin-top: 7rem;
  width: 80%;
  margin-right: auto;
  margin-left: 1rem;

  ${fadeInTransition}
`;

const MusicShowcaseDescription = styled.p`
  width: 90%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.045em;

  color: #ffffff;
  margin-bottom: 4rem;
`;

const MusicShowcaseSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
`;
/******************************************** */
type trackProps = {
  track: {
    name: string;
    tags: string[];
    url: string;
  };
};
const Track = ({ track }: trackProps) => {
  return (
    <TrackWrapper>
      <TrackIcon url={track.url}></TrackIcon>
      <TrackInformation>
        <TrackName>{track.name}</TrackName>
        <TrackLength>{track.tags.join(" ")}</TrackLength>
      </TrackInformation>
    </TrackWrapper>
  );
};

const TrackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 4rem;
  margin-bottom: 1rem;
`;

type TrackIcontype = {
  url: string;
};
const TrackIcon = styled.div<TrackIcontype>`
  width: 4rem;
  height: 4rem;
  background-color: #ffffff;
  margin-right: 1rem;
`;

const TrackInformation = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
`;

const TrackName = styled.h3`
  font-family: "The Bold Font";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;

  color: #ffffff;
  margin-bottom: 0;
`;

const TrackLength = styled.h4`
  font-family: "Roboto";
  font-style: italic;
  font-weight: 100;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #ffffff;
`;

const MusicShowcaseCTAHeader = styled(StyledH1)`
  font-size: 36px;
  width: 90%;
  text-align: center;
  line-height: 36px;
`;

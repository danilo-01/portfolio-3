import styled from "styled-components";
import { primaryColor } from "../styles";

export { default as PageWrapper } from "./page-wrapper";
export { default as Card } from "./card";
export { default as StyledButton } from "./styled-button";
export { default as Navbar } from "./navbar_old";

export const StyledH1 = styled.h1`
  font-family: "The Bold Font", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  color: #ffffff;
`;

export const ColumnPageWrapper = styled.div`
  height: 100%h;
  width: 100%;

  background-color: ${primaryColor};
  display: flex;
  flex-direction: column;
`;

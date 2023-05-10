// Packages
import React from "react";
import styled from "styled-components";

interface styledButtonProps {
  action: any;
  children?: React.ReactNode;
  className?: string;
  hollow?: boolean;
}

function StyledButton({
  action,
  children,
  className,

  hollow = false,
}: styledButtonProps) {
  return (
    <StyledButtonWrapper
      hollow={hollow}
      className={className}
      onClick={() => action()}
    >
      <p>{children}</p>
    </StyledButtonWrapper>
  );
}

export default StyledButton;

type StyledButtonWrapperType = {
  hollow: boolean;
};
const StyledButtonWrapper = styled.div<StyledButtonWrapperType>`
  background-color: blue;
  border-radius: 32px;

  color: white;
  padding: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  box-sizing: border-box;
`;

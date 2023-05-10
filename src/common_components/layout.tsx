import styled from "styled-components";
import Navbar from "./navbar";

type layouttype = {
  children?: React.ReactNode;
};

function Layout({ children }: layouttype) {
  return (
    <LayoutWrapper>
      <Navbar />
      <main>{children}</main>
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  padding-top: 5rem;
`;

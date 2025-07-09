import styled, { css } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Container = css`
  max-width: 1000px;
  width:100%;
  margin: 0 auto;
  padding: 12px 24px;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  ${Container}
`;

function MainLayout({ children }: { children: React.ReactNode }) {
  return (<LayoutWrapper>
      
      <Header />

      <ContentWrapper> {children} </ContentWrapper>
      
      <Footer />

  </LayoutWrapper>);
}

export default MainLayout
import styled from "styled-components";
import React from "react";
import { TitleLogo, SearchBar, MenuTab } from "./Headers";

interface HeaderProps {
  h1Title: string;
}

export const Header: React.FC<HeaderProps> = ({ h1Title }) => {
  return (
    <Container>
      <h1 className="a11y-hidden">{h1Title}</h1>
      <InnerContainer>
        <div>
          <TitleLogo imagePath="/assets/Logo-hodu.png" />
          <SearchBar />
        </div>
        <nav>
          <MenuTab />
        </nav>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.header`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 22px 0;
  & > div {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  ul {
    display: flex;
    gap: 26px;
  }
`;

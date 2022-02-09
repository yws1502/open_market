import styled from "styled-components";
import Link from "next/link";
import React from "react";

interface TitleLogoProps {
  imagePath: string;
}

export const TitleLogo: React.FC<TitleLogoProps> = ({ imagePath }) => {
  return (
    <h1>
      <Link href="/">
        <a>
          <ImageStyle src={imagePath} alt="호두 마켓" />
        </a>
      </Link>
    </h1>
  );
};

const ImageStyle = styled.img`
  width: 124px;
`;

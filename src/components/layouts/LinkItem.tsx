import styled from "styled-components";
import Link from "next/link";
import React from "react";

interface LinkItemProps {
  urlPath: string;
  name: string;
  imagePath: string;
}

export const LinkItem: React.FC<LinkItemProps> = ({
  urlPath,
  name,
  imagePath,
}) => {
  return (
    <LinkItemStyle>
      <Link href={urlPath}>
        <a>
          <img src={imagePath} alt="" />
          {name}
        </a>
      </Link>
    </LinkItemStyle>
  );
};

const LinkItemStyle = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  a {
    color: ${({ theme }) => theme.color.deepGray};
    text-decoration: none;
    img {
      display: block;
      width: 30px;
      height: 30px;
      margin: 0 auto 8px;
    }
  }
`;

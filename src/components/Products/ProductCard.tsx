import Link from "next/link";
import styled from "styled-components";
import React from "react";

interface ProductCardProps {
  imagePath: string;
  corpName: string;
  productName: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imagePath,
  corpName,
  productName,
  price,
}) => {
  return (
    <ProductCardStyle>
      <img src={imagePath} alt="상품" />
      <Link href="/">
        <a>
          <em>{corpName}</em>
          <strong>{productName}</strong>
        </a>
      </Link>
      <strong>
        {price}
        <em>원</em>
      </strong>
    </ProductCardStyle>
  );
};

const ProductCardStyle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    em {
      display: block;
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.color.deepGray};
      margin-bottom: 10px;
    }
  }
  strong {
    font-size: 1.8rem;
  }
  & > strong {
    font-weight: 550;
    em {
      font-size: 1.4rem;
      font-weight: 300;
    }
  }
`;

import styled from "styled-components";
import React from "react";
import { ProductCard } from ".";
import { MEDIA } from "../../styles";

interface ProductContainerProps {}

export const ProductContainer: React.FC<ProductContainerProps> = ({}) => {
  return (
    <ProductContainerStyle>
      <ProductCard
        imagePath="/assets/product1.png"
        corpName="우당탕탕 라이켓의 실험실"
        productName="Hack Your Life 개발자 노트북 파우치"
        price={29000}
      />
      <ProductCard
        imagePath="/assets/product1.png"
        corpName="우당탕탕 라이켓의 실험실"
        productName="Hack Your Life 개발자 노트북 파우치"
        price={29000}
      />
      <ProductCard
        imagePath="/assets/product1.png"
        corpName="우당탕탕 라이켓의 실험실"
        productName="Hack Your Life 개발자 노트북 파우치"
        price={29000}
      />
      <ProductCard
        imagePath="/assets/product1.png"
        corpName="우당탕탕 라이켓의 실험실"
        productName="Hack Your Life 개발자 노트북 파우치"
        price={29000}
      />
    </ProductContainerStyle>
  );
};

const ProductContainerStyle = styled.section`
  display: grid;
  grid-gap: 50px;
  width: 80%;
  grid-template-columns: repeat(3, 30%);
  margin: 80px auto 180px;
  ${MEDIA.tablet} {
    grid-template-columns: repeat(2, 50%);
  }
`;

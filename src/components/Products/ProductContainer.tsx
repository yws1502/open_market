import styled from "styled-components";
import React from "react";
import { ProductCard } from ".";

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
  grid-template-columns: repeat(3, 30%);
  gap: 50px;
  width: 80%;
  margin: 80px auto 180px;
`;

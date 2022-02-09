import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { LinkItem } from ".";
import { MEDIA } from "../../../styles";

export const MenuTab = ({}) => {
  return (
    <Container>
      <MenuContainer>
        <LinkItem
          urlPath="/order/card"
          name="장바구니"
          imagePath="/assets/icon-shopping-cart.svg"
        />
        <LinkItem
          urlPath="/login"
          name="로그인"
          imagePath="/assets/icon-user.svg"
        />
      </MenuContainer>
      <CollapseBtn type="button">
        <span className="a11y-hidden">메뉴 더보기</span>
      </CollapseBtn>
      <CollapseNav>
        <li>
          <Link href="/order/card">
            <a>장바구니</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </li>
      </CollapseNav>
    </Container>
  );
};
const Container = styled.nav`
  margin-left: auto;
`;

const MenuContainer = styled.ul`
  display: flex;
  gap: 26px;
  ${MEDIA.tablet} {
    display: none;
  }
`;

const CollapseNav = styled.ul`
  display: none;
`;

const CollapseBtn = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  background-image: url("/assets/icon-menu-tab.svg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
  ${MEDIA.tablet} {
    display: block;
  }
`;

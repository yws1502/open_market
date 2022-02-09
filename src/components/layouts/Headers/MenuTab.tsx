import React from "react";
import { LinkItem } from ".";

export const MenuTab = ({}) => {
  return (
    <ul>
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
    </ul>
  );
};

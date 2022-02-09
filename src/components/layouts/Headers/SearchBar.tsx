import styled from "styled-components";
import React from "react";
import { MEDIA } from "../../../styles";

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <form>
      <SearchBarContainer>
        <label htmlFor="productSearch" className="a11y-hidden">
          상품 검색란
        </label>
        <input
          id="productSearch"
          type="text"
          placeholder="상품을 검색해보세요!"
        />
        <button>
          <span className="a11y-hidden">검색버튼</span>
        </button>
      </SearchBarContainer>
    </form>
  );
};

export const SearchBarContainer = styled.fieldset`
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.color.base};
  border-radius: 50px;
  width: 400px;
  overflow: hidden;
  input {
    border: none;
    font-size: 1.6rem;
    padding: 13px 0 13px 22px;
    flex: 8;
    outline: none;
  }
  button {
    flex: 1;
    background-color: transparent;
    border: none;
    background-image: url(/assets/icon-search.svg);
    background-repeat: no-repeat;
    cursor: pointer;
    width: 28px;
    height: 28px;
    &:focus {
      outline-color: ${(props) => props.theme.color.base};
    }
  }
  ${MEDIA.tablet} {
    width: 300px;
    input {
      padding: 10px 0 10px 22px;
    }
  }
`;

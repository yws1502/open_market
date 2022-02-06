import styled from "styled-components";
import Link from "next/link";
import React from "react";


export const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>호두샵 소개</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>이용약관</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Strong>개인정보 처리 방침</Strong>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>전자금융거래약관</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>청소년보호정책</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>제휴문의</a>
              </Link>
            </li>
          </ul>
        </nav>
        <dl>
          <div>
            <dt className="a11y-hidden">회사명</dt>
            <dd>
              <Strong>(주)HODU SHOP</Strong>
            </dd>
          </div>
          <div>
            <dt className="a11y-hidden">주소</dt>
            <dd>경기도 의정부시 부용로 000 000번지</dd>
          </div>
          <div>
            <dt>사업자 번호 :&nbsp;</dt>
            <dd>000-0000-0000 | 통신판매업</dd>
          </div>
          <div>
            <dt>대표 :&nbsp;</dt>
            <dd>윤우상</dd>
          </div>
        </dl>
        <ul>
          <li>
            <Link href="https://www.instagram.com/">
              <a>
                <img src="/assets/icon-insta.svg" alt="instagram" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/">
              <a>
                <img src="/assets/icon-fb.svg" alt="facebook" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/">
              <a>
                <img src="/assets/icon-yt.svg" alt="youtube" />
              </a>
            </Link>
          </li>
        </ul>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.footer`
  background-color: ${({ theme }) => theme.color.lightGray};
  padding: 60px 0;
`;

const InnerContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  font-size: 1.4rem;
  dt,
  dd {
    display: inline-block;
  }
  nav ul {
    display: flex;
    margin-bottom: 30px;
    li a {
    }
    li + li::before {
      content: "";
      display: inline-block;
      background-color: #666;
      vertical-align: -3px;
      width: 1px;
      height: 16px;
      margin: 0 14px;
    }
  }
  dl {
    color: ${({ theme }) => theme.color.deepGray};
    &::before {
      content: "";
      display: block;
      background-color: ${({ theme }) => theme.color.gray};
      height: 1px;
      margin: 30px 0;
    }
    div {
      line-height: 22px;
    }
  }
  & > ul {
    position: absolute;
    top: -10px;
    right: 0;
    display: flex;
    gap: 19px;
  }
`;

const Strong = styled.strong`
  font-weight: 700;
`;

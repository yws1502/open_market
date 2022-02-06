import styled from "styled-components";

export const ImageSlide = () => {
  return (
    <Container>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <SlideControl>
        <button>
          <img src="/assets/icon-swiper-1.svg" alt="이전 이미지" />
        </button>
        <button>
          <img src="/assets/icon-swiper-2.svg" alt="다음 이미지" />
        </button>
      </SlideControl>
      <CarouelWrapper>
        <button className="active"></button>
        <button></button>
      </CarouelWrapper>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.lightGray};
`;

const SlideControl = styled.div`
  display: flex;
  justify-content: space-between;
  height: 500px;
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

const CarouelWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  button {
    display: block;
    background-color: #fff;
    height: 12px;
    border: none;
    border-radius: 50%;
    box-shadow: rgba(99, 99, 99, 0.2) 0 0 4px 0px;
    margin-bottom: 20px;
  }
  .active {
    background-color: #000;
  }
`;

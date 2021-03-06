import type { NextPage } from "next";
import { Meta, ImageSlide, ProductContainer } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Meta
        title="open market | product list"
        description="구매자와 판매자가 선택한 오픈 마켓"
      />
      <div>
        <ImageSlide />
        <ProductContainer />
      </div>
    </div>
  );
};

export default Home;

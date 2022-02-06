import Link from "next/link";
import Image from "next/image";
import React from "react";

interface TitleLogoProps {
  imagePath: string;
  width: string;
  height: string;
}

export const TitleLogo: React.FC<TitleLogoProps> = ({
  imagePath,
  width,
  height,
}) => {
  return (
    <h1>
      <Link href="/">
        <a>
          <Image
            src={imagePath}
            alt="쇼핑몰 로고"
            width={width}
            height={height}
          />
        </a>
      </Link>
    </h1>
  );
};

const customMediaQuery = (maxWidth: number) => {
  return `@media (max-width: ${maxWidth}px)`;
};

export const MEDIA = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1920),
  tablet: customMediaQuery(1000),
  mobile: customMediaQuery(640),
};

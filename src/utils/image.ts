export const renderImage = (
  referenceId: string,
  size: "sm" | "md" | "lg" = "sm"
) => {
  const sizeProp = {
    sm: 200,
    md: 400,
    lg: 843,
  };

  return `https://www.artic.edu/iiif/2/${referenceId}/full/${sizeProp[size]},/0/default.jpg`;
};

import React from "react";
import { CompanyName } from "./../Header/Header.styles";

const Footer: React.FC = () => {
  return (
    <CompanyName
      variant="h5"
      color="black"
      textAlign={"center"}
      padding={"3.5rem"}
    >
      Some Company 2024
    </CompanyName>
  );
};

export default Footer;

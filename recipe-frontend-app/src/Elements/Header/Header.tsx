import React from "react";
import s from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <a href="/">
      <s.Header>
        <s.Title>MyRecipe</s.Title>
      </s.Header>
    </a>
  );
};
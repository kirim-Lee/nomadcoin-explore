import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppPresenter from "./AppPresenter";
import typography from "../../typography";

const BaseStyles = createGlobalStyle`
${reset}
${typography}
`;

const AppContainer = () => {
  return (
    <>
      <BaseStyles />
      <AppPresenter />
    </>
  );
};

export default AppContainer;

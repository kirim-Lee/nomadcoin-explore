import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppPresenter from "./AppPresenter";

const BaseStyles = createGlobalStyle`${reset}`;

const AppContainer = () => {
  return (
    <>
      <BaseStyles />
      <AppPresenter />
    </>
  );
};

export default AppContainer;

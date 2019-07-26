import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

const AppContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;

const AppPresenter = () => {
  return (
    <AppContainer>
      <BrowserRouter>{/*this isn`t working yet */}</BrowserRouter>
    </AppContainer>
  );
};

export default AppPresenter;

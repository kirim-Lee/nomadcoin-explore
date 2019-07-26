import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Blocks from "../Blocks";
import Transactions from "../Transactions";

const Container = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  max-width: 1000px;
  width: 100%;
  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

const AppPresenter = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Main>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/blocks"} component={Blocks} />
            <Route exact path={"/transactions"} component={Transactions} />
          </Switch>
        </Main>
      </Container>
    </BrowserRouter>
  );
};

export default AppPresenter;

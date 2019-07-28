import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header";

const Home = React.lazy(() => import("../Home"));
const Blocks = React.lazy(() => import("../Blocks"));
const Transactions = React.lazy(() => import("../Transactions"));

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

interface IProps {
  loading: boolean;
  transactions: any[];
  blocks: any[];
}

const AppPresenter = ({ loading, transactions, blocks }: IProps) => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        {(!loading && (
          <Suspense fallback={"...loading"}>
            <Main>
              <Switch>
                <Route
                  exact
                  path={"/"}
                  render={() => (
                    <Home
                      blocks={blocks.slice(0, 5)}
                      transactions={transactions.slice(0, 5)}
                    />
                  )}
                />
                <Route
                  exact
                  path={"/blocks"}
                  render={() => <Blocks blocks={blocks} />}
                />
                <Route
                  exact
                  path={"/transactions"}
                  render={() => <Transactions transactions={transactions} />}
                />
              </Switch>
            </Main>
          </Suspense>
        )) ||
          null}
      </Container>
    </BrowserRouter>
  );
};


export default AppPresenter;

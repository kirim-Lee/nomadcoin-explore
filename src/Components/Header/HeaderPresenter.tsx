import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const TitleLink = styled(Link)`
  color: inherit;
`;

const Title = styled.h1`
  margin: 0;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
  padding: 50px 20px;
`;

const Header = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Nav = styled.nav`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-bottom: 0;
  margin-right: 50px;
`;

interface ISLink {
  isActive: boolean;
}
const SLink = styled(Link)<ISLink>`
  text-decoration: none;
  font-weight: 600;
  color: ${props => (props.isActive ? "black" : "#777")};
`;

const HeaderPresenter = ({ location }) => {
  return (
    <HeaderWrapper>
      <Header>
        <Title>
          <TitleLink to="/">Nomad Coin</TitleLink>
        </Title>
        <Nav>
          <List>
            <ListItem>
              <SLink isActive={location.pathname === "/"} to="/">
                Home
              </SLink>
            </ListItem>
            <ListItem>
              <SLink isActive={location.pathname === "/blocks"} to="/blocks">
                Blocks
              </SLink>
            </ListItem>
            <ListItem>
              <SLink
                isActive={location.pathname === "/transactions"}
                to="/transactions">
                Transactions
              </SLink>
            </ListItem>
          </List>
        </Nav>
      </Header>
    </HeaderWrapper>
  );
};

export default withRouter(HeaderPresenter);

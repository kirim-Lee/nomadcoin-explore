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
  isactive: boolean | string;
}
const SLink = styled.span<ISLink>`
  text-decoration: none;
  font-weight: 600;
  color: ${props => (props.isactive ? "black" : "#777")};
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
              <Link to="/">
                <SLink isactive={location.pathname === "/"}>Home</SLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/blocks">
                <SLink isactive={location.pathname === "/blocks"}>Blocks</SLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/transactions">
                <SLink isactive={location.pathname === "/transactions"}>
                  Transactions
                </SLink>
              </Link>
            </ListItem>
          </List>
        </Nav>
      </Header>
    </HeaderWrapper>
  );
};

export default withRouter(HeaderPresenter);

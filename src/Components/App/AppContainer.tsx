import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppPresenter from "./AppPresenter";
import typography from "../../typography";
import axios from "axios";
import { API_URL } from "../../constant";
import { blockParams } from "handlebars";

const BaseStyles = createGlobalStyle`
  ${reset}
  ${typography}
  a {
    text-decoration: none
  }
`;

const AppContainer = () => {
  const [data, setData] = useState({ loading: true, blocks: [] });

  getData(setData);

  return (
    <>
      <BaseStyles />
      <AppPresenter loading={data.loading} />
    </>
  );
};

const getData = async callback => {
  const res = await axios.get(`${API_URL}/blocks`);
  const blocks = (res.status === 200 && res.data) || [];
  return callback({ loading: false, blocks });
};

export default AppContainer;

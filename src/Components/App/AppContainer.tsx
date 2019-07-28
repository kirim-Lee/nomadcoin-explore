import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppPresenter from "./AppPresenter";
import typography from "../../typography";
import axios from "axios";
import { API_URL, WS_URL } from "../../constant";
import { parseMessage } from "../../utils";
import flatten from "lodash.flatten";

const BaseStyles = createGlobalStyle`
  ${reset}
  ${typography}
  a {
    text-decoration: none
  }
`;
interface IState {
  loading: boolean;
  blocks: IResBlock[];
  transactions: IResTransaction[];
}
const AppContainer = () => {
  const [data, setData] = useState<IState>({
    loading: true,
    blocks: [],
    transactions: []
  });

  useEffect(() => {
    getData(setData);
  }, []);

  useEffect(() => {
    connectToWs(addBlock);
  });

  const addBlock = (block: IResBlock[]) =>
    setData({
      ...data,
      blocks: block.concat(data.blocks),
      transactions: (block[0].data || []).concat(data.transactions)
    });

  return (
    <>
      <BaseStyles />
      <AppPresenter {...data} />
    </>
  );
};

const getData = async callback => {
  const res = await axios.get(`${API_URL}/blocks`);
  const blocks = (res.status === 200 && res.data) || [];
  const transactions = flatten(blocks.reverse().map(block => block.data));

  return callback({ loading: false, blocks, transactions });
};

const connectToWs = callback => {
  const ws = new WebSocket(WS_URL);
  ws.addEventListener("message", message => {
    const parsed = parseMessage(message);
    if (parsed) {
      console.log(parsed);
      callback(parsed);
    }
  });
};

export default AppContainer;

import React from "react";
import TransactionsPresenter from "./TransactionsPresenter";

interface IProps {
  transactions: IResTransaction[];
}

const TransactionsContainer = (props: IProps) => (
  <TransactionsPresenter transactions={props.transactions} />
);

export default TransactionsContainer;

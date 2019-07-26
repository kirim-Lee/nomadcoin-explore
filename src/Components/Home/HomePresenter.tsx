import React from "react";

interface IProps {
  blocks: any[];
  transactions: any[];
}

const HomePresenter = (props: IProps) => <>{JSON.stringify(props)}Home</>;

export default HomePresenter;

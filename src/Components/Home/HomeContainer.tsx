import React from "react";
import HomePresenter from "./HomePresenter";

interface IProps {
  blocks: any[];
  transactions: any[];
}

const HomeContainer = (props: IProps) => <HomePresenter {...props} />;

export default HomeContainer;

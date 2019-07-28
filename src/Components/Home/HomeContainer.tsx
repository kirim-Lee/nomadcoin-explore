import React from "react";
import HomePresenter from "./HomePresenter";

interface IProps {
  blocks: IResBlock[];
  transactions: IResTransaction[];
}

const HomeContainer = (props: IProps) => <HomePresenter {...props} />;

export default HomeContainer;

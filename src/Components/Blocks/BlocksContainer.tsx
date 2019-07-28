import React from "react";
import BlocksPresenter from "./BlocksPresenter";

interface IProps {
  blocks: IResBlock[];
}

const BlocksContainer = (props: IProps) => (
  <BlocksPresenter blocks={props.blocks} />
);

export default BlocksContainer;

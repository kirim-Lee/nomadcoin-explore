import React from "react";
import styled from "styled-components";
import { Card, BlocksHeader, BlocksRow, TxHeader, TxRow } from "../Shared";
import { makeDate } from "../../utils";
import sum from "lodash.sum";

const TableContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;

interface IProps {
  blocks: IResBlock[];
  transactions: IResTransaction[];
}

const HomePresenter = ({ blocks, transactions }: IProps) => (
  <>
    <TableContainer>
      <h2>Lasted Blocks</h2>
      <Card>
        <BlocksHeader />
        {blocks.map(block => (
          <BlocksRow
            key={block.index}
            index={block.index}
            hash={block.hash}
            timestamp={makeDate(block.timestamp)}
            difficulty={block.difficulty}
          />
        ))}
      </Card>
    </TableContainer>
    <TableContainer>
      <h2>Lasted Transactions</h2>
      <Card>
        <TxHeader />
        {transactions.map(tx => (
          <TxRow
            key={tx.id}
            id={tx.id}
            insOuts={`${tx.txIns.length} / ${tx.txOuts.length}`}
            amount={sum(tx.txOuts.map(txOut => txOut.amount))}
          />
        ))}
      </Card>
    </TableContainer>
  </>
);

export default HomePresenter;

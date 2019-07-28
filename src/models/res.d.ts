interface IResBlock {
  index: number;
  hash: string;
  previousHash: string;
  timestamp: number;
  data: IResTransaction[];
  difficulty: number;
  nonce: number;
}

interface IResTransaction {
  id: string;
  txIns: TxIn[];
  txOuts: TxOut[];
}

interface TxIn {
  txOutId: string;
  txOutIndex: number;
  signature: string;
}

interface TxOut {
  address: string;
  amount: number;
}

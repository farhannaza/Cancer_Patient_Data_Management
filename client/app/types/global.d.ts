interface EthereumProvider {
  isMetaMask?: boolean;
  request(args: { method: string; params?: any[] }): Promise<any>;
  enable(): Promise<void>;
  chainId: string;
  sendAsync(payload: any, callback: (error: any, result?: any) => void): void;
}

interface Window {
  ethereum?: EthereumProvider;
}

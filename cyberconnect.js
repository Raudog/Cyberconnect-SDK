import CyberConnect {Env, Blockchain} from '@cyberlab/cyberconnect';
import HDWalletProvider from '@truffle/hdwallet-provider'
const rinkebyProvider = process.env['rinkeby'];
const priKey = process.env.pk;
let providerTest = new HDWalletProvider{
  privateKeys: priKey,
  providerOrUrl: rinkebyProvider,
}
Const cyberConnect = new CyberConnect{
  namespace: 'TogethDAO',
  env: Env.Production,
  chain: Blockchain.ETH,
  provider: providerTest,
  signingMessageEntity: 'CyberConnect' || 'TogethDAO',
}
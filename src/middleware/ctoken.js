import CTokenAbi from '@/abis/CErc20Immutable.json';
import Market from '@/middleware/market';

export default class CToken extends Market {
  constructor(address = '') {
    super(address, CTokenAbi);
  }
}

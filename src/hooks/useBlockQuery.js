import { useAsyncValue } from './useAsyncValue';
import {useAlchemy} from './useAlchemy'

export const useBlockQuery = (count) => {
  const alchemy = useAlchemy()
  const [blockNumber] = useAsyncValue(
    async () => await alchemy.core.getBlockNumber(),
    []
  );
  const [blocks = [], blockQueryError] = useAsyncValue(async () => {
    if (blockNumber == null) return [];

    const blocks = [];
    const promises = [];
    for (let i = 0; i < count && blockNumber - i >= 0; ++i) {
      promises.push(alchemy.core.getBlockWithTransactions(blockNumber - i));
    }


    const responses = await Promise.all(promises);

    console.log(responses)

    for (const response of responses) {
      blocks.push(response);
    }

    return blocks;
  }, [blockNumber]);

  return [blocks, blockQueryError];
};

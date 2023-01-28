import { useAsyncValue } from './useAsyncValue';

export const useBlockQuery = (alchemy) => {
  const [blockNumber] = useAsyncValue(
    async () => await alchemy.core.getBlockNumber(),
    []
  );
  const [blocks = [], blockQueryError] = useAsyncValue(async () => {
    if (blockNumber == null) return [];

    const blocks = [];
    const promises = [];
    for (let i = 0; i < 32 && blockNumber - i >= 0; ++i) {
      promises.push(alchemy.core.getBlock(blockNumber - i));
    }

    const responses = await Promise.all(promises);
    for (const response of responses) {
      blocks.push(response);
    }

    return blocks;
  }, [blockNumber]);

  return [blocks, blockQueryError];
};

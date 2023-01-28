import { useAsyncValue } from './useAsyncValue';

export const useBlockItems = (alchemy) => {
  const [blockNumber] = useAsyncValue(
    async () => await alchemy.core.getBlockNumber(),
    []
  );
  const [blockItems = [], blockItemsError] = useAsyncValue(async () => {
    if (blockNumber == null) return [];

    const blockItems = [];
    const promises = [];
    for (let i = 0; i < 32 && blockNumber - i >= 0; ++i) {
      promises.push(alchemy.core.getBlock(blockNumber - i));
    }

    const responses = await Promise.all(promises);

    for (const response of responses) {
      const { hash } = response;
      blockItems.push({
        blockNumber,
        hash
      });
    }

    return blockItems;
  }, [blockNumber]);

  return [blockItems, blockItemsError];
};

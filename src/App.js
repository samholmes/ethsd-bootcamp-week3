import { Alchemy, Network } from 'alchemy-sdk';

import './App.css';
import { HomeScreen } from './components/HomeScreen';
import { BlockScreen } from './components/BlockScreen';
import { useBlockQuery } from './hooks/useBlockQuery';
import { useMemo, useState } from 'react';
import { useUriHash } from './hooks/useUriHash';
import { TxScreen } from './components/TxScreen';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

const alchemy = new Alchemy(settings);

function App() {
  const uriHash = useUriHash();
  const query = uriHash.slice(1);

  const [blocks, blockQueryError] = useBlockQuery(alchemy);
  if (blockQueryError) console.error(blockQueryError);

  const selectedBlock = useMemo(() => {
    if (!query.includes('/block/')) return;
    const queryBlockHeight = query.replace('/block/', '');
    return blocks.find((block) => block.number.toString() === queryBlockHeight);
  }, [query, blocks]);
  const selectedTx = useMemo(() => {
    if (!query.includes('/tx/')) return;
    return query.replace('/tx/', '');
  }, [query, blocks]);

  const handleClickExit = () => {
    window.location.hash = '';
  };
  const handleClickNext = () => {
    const height = parseInt(query) + 1;
    window.location.hash = '#' + height;
  };
  const handleClickPrev = () => {
    const height = parseInt(query) - 1;
    window.location.hash = '#' + height;
  };

  if (selectedBlock != null)
    return (
      <BlockScreen
        block={selectedBlock}
        onClickExit={handleClickExit}
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
      />
    );
  if (selectedTx != null)
    return (
      <TxScreen
        alchemy={alchemy}
        txHash={selectedTx}
        onClickExit={handleClickExit}
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
      />
    );

  return <HomeScreen blocks={blocks} />;
}

export default App;

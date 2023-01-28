import './App.css';
import { HomeScreen } from './components/HomeScreen';
import { BlockScreen } from './components/BlockScreen';
import { useBlockQuery } from './hooks/useBlockQuery';
import { useMemo } from 'react';
import { useUriHash } from './hooks/useUriHash';
import { TxScreen } from './components/TxScreen';

function App() {
  const uriHash = useUriHash();
  const query = uriHash.slice(1);

  const [blocks, blockQueryError] = useBlockQuery(38);
  if (blockQueryError) console.error(blockQueryError);

  const selectedBlock = useMemo(() => {
    if (!query.includes('/block/')) return;
    const queryForBlock = query.replace('/block/', '');
    return blocks.find(
      (block) =>
        block.number.toString() === queryForBlock ||
        block.hash === queryForBlock
    );
  }, [query, blocks]);
  const selectedTx = useMemo(() => {
    if (!query.includes('/tx/')) return;
    return query.replace('/tx/', '');
  }, [query]);

  const handleClickExit = () => {
    window.location.hash = '';
  };
  const handleClickNext = () => {
    if (selectedBlock == null) return;
    const height = selectedBlock.number + 1;
    window.location.hash = `#/block/${height}`;
  };
  const handleClickPrev = () => {
    if (selectedBlock == null) return;
    const height = selectedBlock.number - 1;
    window.location.hash = `#/block/${height}`;
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
    return <TxScreen txHash={selectedTx} onClickExit={handleClickExit} />;

  return <HomeScreen blocks={blocks} />;
}

export default App;

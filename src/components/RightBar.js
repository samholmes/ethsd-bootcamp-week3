import { Link } from './Link';

import { LangLinks } from './mannequin';

const items = [
  'ethereum',
  'polygon',
  'arbitrum',
  'bsc',
  'xdai',
  'matic',
  'hethereum',
  'deversifi',
  'akash',
  'algorand',
  'algoz',
  'althea',
  'amoveo',
  'bifrost',
  'callisto',
  'celo',
  'chainlink',
  'coda',
  'cosmos',
  'dai',
  'dfinity',
  'dmm',
  'eos'
];

export function RightBar() {
  return (
    <div id="rightbar">
      <LangLinks />

      <ul className="menu collapsible geoLinks">
        <li className="expand s">
          <h5 className="ban hot active">other cl</h5>
          <ul className="acitem">
            {items.map((item) => {
              return (
                <li className="s" key={item}>
                  <Link>
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
      <br />
    </div>
  );
}

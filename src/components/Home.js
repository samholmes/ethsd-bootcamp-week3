import { Link } from './Link';
import { LeftBar } from './LeftBar';
import { RightBar } from './RightBar';
import { TopBan } from './Topban';

export function Home(props) {
  const { blockItems } = props;

  return (
    <div className="wrapper">
      <section className="page-container">
        <TopBan />
        <LeftBar />
        <div id="center">
          <div id="searchDropdownGoesHereMobile"></div>
          <div id="ccc" className="col">
            <h3 className="ban">
              <Link>
                <span className="txt">
                  blocks<sup className="c"></sup>
                </span>
              </Link>
            </h3>
            <div className="cats">
              <ul id="ccc0">
                {blockItems.map((item) => {
                  return (
                    <li>
                      <Link>
                        <span className="txt">
                          {item.blockNumber}
                          <sup className="c"></sup>
                        </span>
                        <span className="txt">
                          {item.hash}
                          <sup className="c"></sup>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <RightBar />
      </section>
    </div>
  );
}

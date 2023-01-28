import { formatDistanceToNow } from 'date-fns';
import { useAlchemy } from '../hooks/useAlchemy';
import { useAsyncValue } from '../hooks/useAsyncValue';
import { Link } from './Link';

export function TxScreen(props) {
  const { txHash, onClickExit } = props;
  const alchemy = useAlchemy();

  const [tx, txError] = useAsyncValue(async () => {
    const response = await alchemy.core.getTransactionReceipt(txHash);
    return response;
  }, []);

  if (txError) console.error(txError);

  if (tx == null) return null;

  const time = new Date(0);
  const timeAgo = formatDistanceToNow(time);

  return (
    <div className="posting bd-can-hover desktop w1024 cl-not-small-device cl-landscape">
      <section className="page-container">
        <div className="bglogo"></div>
        <header className="global-header wide">
          <Link className="header-logo" name="logoLink" onClick={onClickExit}>
            CL
          </Link>

          <nav className="breadcrumbs-container">
            <ul className="breadcrumbs">
              <li className="crumb area">
                <p>
                  <Link onClick={onClickExit}>ethereum ETH</Link>
                  <span className="breadcrumb-arrow">&gt;</span>
                </p>
              </li>
              <li className="crumb area">
                <p>
                  <Link>TX {tx.transactionHash}</Link>
                  <span className="breadcrumb-arrow">&gt;</span>
                </p>
              </li>
            </ul>
          </nav>

          <div className="userlinks">
            <ul className="user-actions">
              <li className="user post">
                <Link>post</Link>
              </li>
              <li className="user account">
                <Link>account</Link>
              </li>
            </ul>
            <ul className="user-favs-discards">
              <li className="user">
                <div className="favorites">
                  <Link className="favlink">
                    <span
                      className="icon icon-star fav"
                      aria-hidden="true"
                    ></span>
                    <span className="fav-number">13</span>
                    <span className="fav-label"> favorites</span>
                  </Link>
                </div>
              </li>
              <li className="user discards">
                <div className="to-banish-page">
                  <Link className="to-banish-page-link">
                    <span
                      className="icon icon-trash red"
                      aria-hidden="true"
                    ></span>
                    <span className="banished_count"></span>
                    <span className="discards-label"> hidden</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </header>

        <section className="body">
          <header className="dateReplyBar">
            <div className="reply-button-row">
              <div className="actions-combo">
                <button role="button" className="reply-button js-only">
                  finalized
                </button>

                <div className="fave-unfave action">
                  <div className="fave" role="button" title="add to favorites">
                    <div className="icon icon-star" aria-hidden="true"></div>
                    <div className="action-label">favorite</div>
                  </div>
                  <div
                    className="unfave"
                    role="button"
                    title="remove from favorites"
                  >
                    <div
                      className="icon icon-star fav"
                      aria-hidden="true"
                    ></div>
                    <div className="action-label">favorite</div>
                  </div>
                </div>
                <div className="banish-unbanish action">
                  <div
                    className="banish"
                    role="button"
                    title="hide this posting"
                  >
                    <div className="icon icon-trash" aria-hidden="true"></div>
                    <div className="action-label">hide</div>
                  </div>
                  <div
                    className="unbanish"
                    role="button"
                    title="restore this posting"
                  >
                    <div
                      className="icon icon-trash red"
                      aria-hidden="true"
                    ></div>
                    <div className="action-label">unhide</div>
                  </div>
                </div>
                <div className="flag-action action">
                  <div
                    className="flag"
                    role="button"
                    title="flag as prohibited / spam / miscategorized"
                  >
                    <div className="flagIcon" aria-hidden="true">
                      <span className="white-flag">⚐</span>
                      <span className="black-flag">⚑</span>
                    </div>
                    <div className="action-label">flag</div>
                  </div>
                  <div className="unflag">
                    <div className="flagIcon" aria-hidden="true">
                      ⚑
                    </div>
                    <Link className="action-label" title="thanks for flagging!">
                      flagged
                    </Link>
                  </div>
                </div>
                <div className="action share-action">
                  <div className="share" id="sharebutton-container">
                    <div className="cl-share-button">
                      <div className="container">
                        <Link>
                          <div className="icom- share-icon"></div>
                          <span className="action-label">share</span>
                        </Link>
                        <div className="menu-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p id="display-date" className="postinginfo">
                Mined{' '}
                <time
                  className="date timeago"
                  datetime={time.toISOString()}
                  title={time.toISOString()}
                >
                  about {timeAgo}
                </time>
              </p>

              <p className="print-information print-contact">
                Contact Information: <span className="print-email"></span>{' '}
                <span className="print-phone"></span>
              </p>
              <Link id="printme">print</Link>
            </div>
          </header>

          <h1 className="postingtitle">
            <span className="postingtitletext">
              <span id="titletextonly">TX #{tx.transactionHash}</span>
              <span> (block {tx.blockNumber})</span>{' '}
            </span>
          </h1>
          <section className="userbody">
            <section id="postingbody">
              <div className="print-information print-qrcode-container">
                {/* <p className="print-qrcode-label">QR Code Link to This Post</p> */}
                <div className="print-qrcode">
                  <canvas width="200" height="200"></canvas>
                </div>
              </div>
              <h2>Details</h2>
              <div>
                <h3>to:</h3>
                <p>{tx.to.toString()}</p>
              </div>
              <div>
                <h3>from:</h3>
                <p>{tx.from.toString()}</p>
              </div>
              <div>
                <h3>contract address:</h3>
                <p>{tx.contractAddress}</p>
              </div>
              <div>
                <h3>transaction index:</h3>
                <p>{tx.transactionIndex.toString()}</p>
              </div>
              <div>
                <h3>gas used:</h3>
                <p>{tx.gasUsed.toString()}</p>
              </div>
              <div>
                <h3>logs bloom:</h3>
                <p>{tx.logsBloom.toString()}</p>
              </div>
              <div>
                <h3>block hash:</h3>
                <p>{tx.blockHash.toString()}</p>
              </div>
              <div>
                <h3>transaction hash:</h3>
                <p>{tx.transactionHash.toString()}</p>
              </div>
              <div>
                <h3>block number:</h3>
                <p>{tx.blockNumber.toString()}</p>
              </div>
              <div>
                <h3>confirmations :</h3>
                <p>{tx.confirmations.toString()}</p>
              </div>
              <div>
                <h3>cumulative gas used:</h3>
                <p>{tx.cumulativeGasUsed.toString()}</p>
              </div>
              <div>
                <h3>effective gas price:</h3>
                <p>{tx.effectiveGasPrice.toString()}</p>
              </div>
              <div>
                <h3>status :</h3>
                <p>{tx.status.toString()}</p>
              </div>
              <div>
                <h3>type :</h3>
                <p>{tx.type.toString()}</p>
              </div>
              <div>
                <h3>byzantium :</h3>
                <p>{tx.byzantium.toString()}</p>
              </div>
            </section>

            <ul className="notices">
              <li>do NOT contact me with unsolicited services or offers</li>
            </ul>

            <div className="postinginfos">
              <p className="postinginfo">block height: {tx.number}</p>
              <p className="postinginfo">
                mined:{' '}
                <time
                  className="date timeago"
                  dateTime={time.toISOString()}
                  title={time.toISOString()}
                >
                  about {timeAgo}
                </time>
              </p>

              <p className="postinginfo">
                <Link className="bestof-link" title="nominate for best-of-CL">
                  <span className="bestof-icon">♥ </span>
                  <span className="bestof-text">best of</span>
                </Link>{' '}
                <sup>
                  [<Link>?</Link>]
                </sup>
              </p>
            </div>

            <div className="print-information print-pics"></div>
          </section>

          <div className="psa-box"></div>
        </section>
      </section>
    </div>
  );
}

import { Utils, Wallet } from 'alchemy-sdk';
import { BigNumber } from '@ethersproject/bignumber';
import { useMemo } from 'react';
import { useAlchemy } from '../hooks/useAlchemy';
import { useInputValue } from '../hooks/useInputValue';
import { Link } from './Link';

const CHAIN_ID = 137;
const { REACT_APP_PRIVATE_KEY } = process.env;

export function CreateScreen(props) {
  const { onClickExit } = props;
  const alchemy = useAlchemy();
  const wallet = useMemo(() => {
    const wallet = new Wallet(REACT_APP_PRIVATE_KEY, alchemy);
    console.log(wallet);
    return wallet;
  }, [alchemy]);

  const toAddressInput = useInputValue(
    ''
  );
  const nonceInput = useInputValue();
  const valueInput = useInputValue('');
  const dataInput = useInputValue();
  const gasLimitInput = useInputValue('21000');
  const gasPriceInput = useInputValue('1');
  // const maxFeePerGasInput = useInputValue('17');
  // const maxPriorityFeePerGasInput = useInputValue('2');

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const to = toAddressInput.value;
      const value = Utils.parseEther(valueInput.value ? valueInput.value : '0');
      const nonce = nonceInput.value
        ? nonceInput.value
        : await alchemy.core.getTransactionCount(wallet.address, 'latest');
      const gasLimit = BigNumber.from(
        gasLimitInput.value ? gasLimitInput.value : '21000'
      );
      const gasPrice = Utils.parseUnits(
        gasPriceInput.value ? gasPriceInput.value : '1'
        , 'gwei'
      );
      // const maxPriorityFeePerGas = Utils.parseUnits(
      //   maxPriorityFeePerGasInput.value ? maxPriorityFeePerGasInput.value : '0',
      //   'gwei'
      // );
      // const maxFeePerGas = Utils.parseUnits(
      //   maxFeePerGasInput.value ? maxFeePerGasInput.value : '0',
      //   'gwei'
      // );

      const transaction = {
        to,
        value, // 0.001 worth of ETH being sent
        gasLimit,
        // TODO: EIP1559 support:
        // maxPriorityFeePerGas,
        // maxFeePerGas,
        gasPrice,
        nonce,
        chainId: CHAIN_ID // göerli transaction
      };
      console.log(transaction);

      const answer = window.confirm(`Are you sure?`);
      if (answer) {
        let tx = await wallet.sendTransaction(transaction);
        console.log(tx);

        window.location.hash = `#/tx/${tx.hash}`;
      }
    } catch (error) {
      alert(String(error));
      console.error(error);
    }
  };

  return (
    <div className="post new-form desktop w1024">
      <article className="page-container">
        <header className="global-header wide">
          <Link className="header-logo" name="logoLink" onClick={onClickExit}>
            CL
          </Link>

          <nav className="breadcrumbs-container">
            <ul className="breadcrumbs">
              <li className="crumb area">
                <p>
                  <Link>polygon MATIC</Link>
                  <span className="breadcrumb-arrow">&gt;</span>
                </p>
              </li>
              <li className="crumb area">
                <p>
                  <span>create transaction</span>
                  <span className="breadcrumb-arrow">&gt;</span>
                </p>
              </li>
            </ul>
          </nav>

          <aside id="loginWidget" className="highlight">
            <p>
              [&nbsp;logged in as&nbsp;
              <strong>
                <Link>{wallet.address}</Link>
              </strong>
              &nbsp;]
            </p>
            <p>
              [&nbsp;<Link>log out</Link>&nbsp;]
            </p>
          </aside>
        </header>
        <header className="global-header narrow">
          <Link className="header-logo">CL</Link>
          <nav className="breadcrumbs-container">
            <div className="breadcrumbs">orange co &gt; lost &amp; found</div>
          </nav>
          <span className="linklike show-wide-header">...</span>
        </header>

        <section className="body">
          <form id="postingForm" onSubmit={handleSubmit}>
            <div className="new-form" id="new-edit">
              <link
                type="text/css"
                rel="stylesheet"
                media="all"
                href="//www.craigslist.org/styles/JSONForm.css?v=73d36127a22f4c44c8ddbeb974b83460"
              />
              <link
                type="text/css"
                rel="stylesheet"
                media="all"
                href="//www.craigslist.org/styles/posting-process-edit.css?v=932f708dd7f72971099c4fef37a08f6c"
              />
              <div className="json-form">
                <div className="json-form-group json-form-group-container posting-title-subform title row fields">
                  <label className="json-form-item text PostingTitle req posting-title variant-text">
                    <div className="label-wrapper">
                      <span className="label">to address</span>
                    </div>

                    <label className="input PostingTitle">
                      <input
                        className="json-form-input"
                        name="PostingTitle"
                        tabindex="1"
                        type="text"
                        autofocus="autofocus"
                        id="PostingTitle"
                        maxlength="70"
                        {...toAddressInput}
                      />
                    </label>
                  </label>
                  <label className="json-form-item text geographic_area neighborhood std variant-text">
                    <div className="label-wrapper">
                      <span className="label">nonce</span>
                    </div>

                    <label className="input geographic_area">
                      <input
                        className="json-form-input"
                        name="geographic_area"
                        value=""
                        tabindex="1"
                        type="text"
                        id="geographic_area"
                        maxlength="60"
                        {...nonceInput}
                      />
                    </label>
                  </label>
                  <label className="json-form-item text postal req variant-text">
                    <div className="label-wrapper">
                      <span className="label">value</span>
                    </div>

                    <label className="input postal">
                      <input
                        className="json-form-input"
                        name="postal"
                        value=""
                        tabindex="1"
                        type="text"
                        id="postal_code"
                        maxlength="15"
                        {...valueInput}
                      />
                    </label>
                  </label>
                </div>
                <label className="json-form-item textarea PostingBody req">
                  <div className="label-wrapper">
                    <span className="label">data</span>
                  </div>

                  <textarea
                    className="json-form-input PostingBody"
                    name="PostingBody"
                    placeholder=""
                    tabindex="1"
                    id="PostingBody"
                    rows="10"
                    {...dataInput}
                  ></textarea>
                </label>
                <fieldset className="json-form-group json-form-group-container location-info">
                  <legend>location info</legend>
                  <div className="json-form-group location-info">
                    <div className="json-form-group json-form-group-container location-address-fields">
                      <label
                        className="json-form-item text xstreet0 std variant-text "
                        data-depends-on="show_address_ok"
                      >
                        <div className="label-wrapper">
                          <span className="label">gas limit</span>
                        </div>

                        <label className="input xstreet0">
                          <input
                            className="json-form-input"
                            name="xstreet0"
                            value="21000"
                            tabindex="1"
                            type="text"
                            maxlength="80"
                            {...gasLimitInput}
                          />
                        </label>
                      </label>
                      <label
                        className="json-form-item text xstreet1 street1 variant-text "
                        data-depends-on="show_address_ok"
                      >
                        <div className="label-wrapper">
                          <span className="label">gas price</span>
                        </div>

                        <label className="input xstreet1">
                          <input
                            className="json-form-input"
                            name="xstreet1"
                            value=""
                            tabindex="1"
                            type="text"
                            maxlength="80"
                            {...gasPriceInput}
                          />
                        </label>
                      </label>
                      {/* <label
                        className="json-form-item text xstreet1 street1 variant-text "
                        data-depends-on="show_address_ok"
                      >
                        <div className="label-wrapper">
                          <span className="label">max fee per gas</span>
                        </div>

                        <label className="input xstreet1">
                          <input
                            className="json-form-input"
                            name="xstreet1"
                            value=""
                            tabindex="1"
                            type="text"
                            maxlength="80"
                            {...maxFeePerGasInput}
                          />
                        </label>
                      </label>
                      <label
                        className="json-form-item text city std variant-text"
                        data-depends-on="show_address_ok"
                      >
                        <div className="label-wrapper">
                          <span className="label">
                            max priority fee per gas
                          </span>
                        </div>

                        <label className="input city">
                          <input
                            className="json-form-input"
                            name="city"
                            value=""
                            tabindex="1"
                            type="text"
                            maxlength="80"
                            disabled
                            {...maxPriorityFeePerGasInput}
                          />
                        </label>
                      </label> */}
                    </div>
                  </div>
                </fieldset>
                <div className="json-form-group json-form-group-container submit-buttons">
                  <div className="submit_button">
                    <button
                      type="submit"
                      name="go"
                      value="continue"
                      className="go big-button submit-button"
                      tabindex="1"
                    >
                      send transaction
                    </button>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="cryptedStepCheck"
                  value="U2FsdGVkX19Sfxg6K3kaPG1RDIm6QzCr9GRC536mu_p5FYcU89ZOKBlbYmgladfz"
                  className="cryptedStepCheck"
                />
              </div>
            </div>
          </form>
        </section>
      </article>
    </div>
  );
}

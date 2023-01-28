import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import { Link } from './components/Link';
import { RightBar } from './components/RightBar';

import './App.css';
import { LeftBar } from './components/LeftBar';

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
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  return (
    <div className="wrapper">
      <section className="page-container">
        <div className="bglogo"></div>
        <header className="global-header wide">
          <Link className="header-logo" name="logoLink">
            CL
          </Link>

          <nav className="breadcrumbs-container">
            <ul className="breadcrumbs">
              <li className="crumb area">
                <p>
                  <Link href="/">orange co</Link>
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
                  <Link
                    href="/favorites?fl=aXRlbXM6NzUyMDI1NDA0Myw3NjUxNDksMjExNTE5MywyMTQ1NTg1LDQwNTQ1OTIsNTgyMjk5OCw5MDQyMjMwLDEwMTE3ODAzLDMyNjcyOTUxLDQyMTgxOTIzLDQ4OTI1ODEwLDQ5MDM4MzU3LDQ5MzczNTc4"
                    className="favlink"
                  >
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
        <header className="global-header narrow">
          <Link className="header-logo">CL</Link>
          <nav className="breadcrumbs-container">
            <div className="breadcrumbs">orange co</div>
          </nav>
          <span className="linklike show-wide-header">...</span>
        </header>

        <nav id="topban" className="regular">
          <div className="regular-area">
            <h2 className="area">
              <div className="cl-location-picker-homepage-link">
                <Link className="cl-location-picker-link">ethereum ETH</Link>
              </div>
            </h2>
          </div>
        </nav>
        <LeftBar />
        <div id="center">
          <div id="searchDropdownGoesHereMobile"></div>
          <div className="community">
            <div id="ccc" className="col">
              <h3 className="ban">
                <Link
                  href="/search/ccc"
                  className="ccc"
                  data-alltitle="all community"
                  data-cat="ccc"
                >
                  <span className="txt">
                    community<sup className="c"></sup>
                  </span>
                </Link>
              </h3>
              <div className="cats">
                <ul id="ccc0" className="left">
                  <li>
                    <Link href="/search/act" className="act" data-cat="act">
                      <span className="txt">
                        activities<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/ats" className="ats" data-cat="ats">
                      <span className="txt">
                        artists<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/kid" className="kid" data-cat="kid">
                      <span className="txt">
                        childcare<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/cls" className="cls" data-cat="cls">
                      <span className="txt">
                        classes<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/eve" className="eve" data-cat="eve">
                      <span className="txt">
                        events<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/com" className="com" data-cat="com">
                      <span className="txt">
                        general<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/grp" className="grp" data-cat="grp">
                      <span className="txt">
                        groups<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/vnn" className="vnn" data-cat="vnn">
                      <span className="txt">
                        local&nbsp;news<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul id="ccc1" className="mc">
                  <li>
                    <Link href="/search/laf" className="laf" data-cat="laf">
                      <span className="txt">
                        lost+found<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/mis" className="mis" data-cat="mis">
                      <span className="txt">
                        missed connections<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/muc" className="muc" data-cat="muc">
                      <span className="txt">
                        musicians<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/pet" className="pet" data-cat="pet">
                      <span className="txt">
                        pets<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/pol" className="pol" data-cat="pol">
                      <span className="txt">
                        politics<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/rnr" className="rnr" data-cat="rnr">
                      <span className="txt">
                        rants &amp; raves<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/rid" className="rid" data-cat="rid">
                      <span className="txt">
                        rideshare<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/vol" className="vol" data-cat="vol">
                      <span className="txt">
                        volunteers<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div id="bbb" className="col">
              <h3 className="ban">
                <Link
                  href="/search/bbb"
                  className="bbb"
                  data-alltitle="all services"
                  data-cat="bbb"
                >
                  <span className="txt">
                    services<sup className="c"></sup>
                  </span>
                </Link>
              </h3>
              <div className="cats">
                <ul id="bbb0" className="left">
                  <li>
                    <Link href="/search/aos" className="aos" data-cat="aos">
                      <span className="txt">
                        automotive<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/bts" className="bts" data-cat="bts">
                      <span className="txt">
                        beauty<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/cms" className="cms" data-cat="cms">
                      <span className="txt">
                        cell/mobile<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/cps" className="cps" data-cat="cps">
                      <span className="txt">
                        computer<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/crs" className="crs" data-cat="crs">
                      <span className="txt">
                        creative<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/cys" className="cys" data-cat="cys">
                      <span className="txt">
                        cycle<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/evs" className="evs" data-cat="evs">
                      <span className="txt">
                        event<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/fgs" className="fgs" data-cat="fgs">
                      <span className="txt">
                        farm+garden<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/fns" className="fns" data-cat="fns">
                      <span className="txt">
                        financial<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/hws" className="hws" data-cat="hws">
                      <span className="txt">
                        health/well<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/hss" className="hss" data-cat="hss">
                      <span className="txt">
                        household<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul id="bbb1" className="mc">
                  <li>
                    <Link href="/search/lbs" className="lbs" data-cat="lbs">
                      <span className="txt">
                        labor/move<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/lgs" className="lgs" data-cat="lgs">
                      <span className="txt">
                        legal<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/lss" className="lss" data-cat="lss">
                      <span className="txt">
                        lessons<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/mas" className="mas" data-cat="mas">
                      <span className="txt">
                        marine<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/pas" className="pas" data-cat="pas">
                      <span className="txt">
                        pet<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/rts" className="rts" data-cat="rts">
                      <span className="txt">
                        real estate<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sks" className="sks" data-cat="sks">
                      <span className="txt">
                        skilled trade<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/biz" className="biz" data-cat="biz">
                      <span className="txt">
                        sm biz ads<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/trv" className="trv" data-cat="trv">
                      <span className="txt">
                        travel/vac<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/wet" className="wet" data-cat="wet">
                      <span className="txt">
                        write/ed/tran<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div id="forums" className="col">
              <h3 className="ban">
                <Link className="forums" data-cat="forums">
                  <span className="txt">
                    discussion forums<sup className="c"></sup>
                  </span>
                </Link>
              </h3>
              <div className="cats">
                <ul id="forums0" className="left">
                  <li>
                    <Link>
                      <span className="txt">
                        apple<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        arts<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        atheist<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        autos<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        beauty<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        bikes<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        celebs<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        comp<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        cosmos<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        diet<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        divorce<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        dying<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        eco<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        feedbk<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        film<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        fixit<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        food<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul id="forums1" className="mc">
                  <li>
                    <Link>
                      <span className="txt">
                        frugal<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        gaming<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        garden<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        haiku<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        help<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        history<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        housing<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        jobs<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        jokes<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        legal<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        manners<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        marriage<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        money<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        music<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        open<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        parent<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        pets<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul id="forums2" className="mc">
                  <li>
                    <Link>
                      <span className="txt">
                        philos<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        photo<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        politics<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        psych<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        recover<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        religion<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        rofo<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        science<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        spirit<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        sports<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        super<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        tax<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        travel<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        tv<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        vegan<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        words<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className="txt">
                        writing<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="housing">
            <div id="hhh" className="col">
              <h3 className="ban">
                <Link
                  href="/search/hhh"
                  className="hhh"
                  data-alltitle="all housing"
                  data-cat="hhh"
                >
                  <span className="txt">
                    housing<sup className="c"></sup>
                  </span>
                </Link>
              </h3>
              <div className="cats">
                <ul id="hhh0">
                  <li>
                    <Link href="/search/apa" className="apa" data-cat="apa">
                      <span className="txt">
                        apts / housing<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/swp" className="swp" data-cat="swp">
                      <span className="txt">
                        housing swap<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/hsw" className="hsw" data-cat="hsw">
                      <span className="txt">
                        housing wanted<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/off" className="off" data-cat="off">
                      <span className="txt">
                        office / commercial<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/prk" className="prk" data-cat="prk">
                      <span className="txt">
                        parking / storage<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/rea" className="rea" data-cat="rea">
                      <span className="txt">
                        real estate for sale<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/roo" className="roo" data-cat="roo">
                      <span className="txt">
                        rooms / shared<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sha" className="sha" data-cat="sha">
                      <span className="txt">
                        rooms wanted<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sub" className="sub" data-cat="sub">
                      <span className="txt">
                        sublets / temporary<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/vac" className="vac" data-cat="vac">
                      <span className="txt">
                        vacation rentals<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div id="sss" className="col">
              <h3 className="ban">
                <Link
                  href="/search/sss"
                  className="sss"
                  data-alltitle="all for sale"
                  data-cat="sss"
                >
                  <span className="txt">
                    for sale<sup className="c"></sup>
                  </span>
                </Link>
              </h3>
              <div className="cats">
                <ul id="sss0" className="left">
                  <li>
                    <Link href="/search/ata" className="ata" data-cat="ata">
                      <span className="txt">
                        antiques<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/ppa" className="ppa" data-cat="ppa">
                      <span className="txt">
                        appliances<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/ara" className="ara" data-cat="ara">
                      <span className="txt">
                        arts+crafts<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sna" className="sna" data-cat="sna">
                      <span className="txt">
                        atv/utv/sno<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/pta" className="pta" data-cat="pta">
                      <span className="txt">
                        auto parts<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/ava" className="ava" data-cat="ava">
                      <span className="txt">
                        aviation<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/baa" className="baa" data-cat="baa">
                      <span className="txt">
                        baby+kid<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/bar" className="bar" data-cat="bar">
                      <span className="txt">
                        barter<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/haa" className="haa" data-cat="haa">
                      <span className="txt">
                        beauty+hlth<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/bip" className="bip" data-cat="bip">
                      <span className="txt">
                        bike parts<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/bia" className="bia" data-cat="bia">
                      <span className="txt">
                        bikes<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/bpa" className="bpa" data-cat="bpa">
                      <span className="txt">
                        boat parts<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/boo" className="boo" data-cat="boo">
                      <span className="txt">
                        boats<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/bka" className="bka" data-cat="bka">
                      <span className="txt">
                        books<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/bfa" className="bfa" data-cat="bfa">
                      <span className="txt">
                        business<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/cta" className="cta" data-cat="cta">
                      <span className="txt">
                        cars+trucks<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/ema" className="ema" data-cat="ema">
                      <span className="txt">
                        cds/dvd/vhs<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/moa" className="moa" data-cat="moa">
                      <span className="txt">
                        cell phones<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/cla" className="cla" data-cat="cla">
                      <span className="txt">
                        clothes+acc<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/cba" className="cba" data-cat="cba">
                      <span className="txt">
                        collectibles<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/syp" className="syp" data-cat="syp">
                      <span className="txt">
                        computer parts<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sya" className="sya" data-cat="sya">
                      <span className="txt">
                        computers<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/ela" className="ela" data-cat="ela">
                      <span className="txt">
                        electronics<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul id="sss1" className="mc">
                  <li>
                    <Link href="/search/gra" className="gra" data-cat="gra">
                      <span className="txt">
                        farm+garden<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/zip" className="zip" data-cat="zip">
                      <span className="txt">
                        free<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/fua" className="fua" data-cat="fua">
                      <span className="txt">
                        furniture<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/gms" className="gms" data-cat="gms">
                      <span className="txt">
                        garage sale<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/foa" className="foa" data-cat="foa">
                      <span className="txt">
                        general<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/hva" className="hva" data-cat="hva">
                      <span className="txt">
                        heavy equip<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/hsa" className="hsa" data-cat="hsa">
                      <span className="txt">
                        household<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/jwa" className="jwa" data-cat="jwa">
                      <span className="txt">
                        jewelry<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/maa" className="maa" data-cat="maa">
                      <span className="txt">
                        materials<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/mpa" className="mpa" data-cat="mpa">
                      <span className="txt">
                        motorcycle parts<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/mca" className="mca" data-cat="mca">
                      <span className="txt">
                        motorcycles<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/msa" className="msa" data-cat="msa">
                      <span className="txt">
                        music instr<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/pha" className="pha" data-cat="pha">
                      <span className="txt">
                        photo+video<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/rva" className="rva" data-cat="rva">
                      <span className="txt">
                        rvs+camp<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sga" className="sga" data-cat="sga">
                      <span className="txt">
                        sporting<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/tia" className="tia" data-cat="tia">
                      <span className="txt">
                        tickets<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/tla" className="tla" data-cat="tla">
                      <span className="txt">
                        tools<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/taa" className="taa" data-cat="taa">
                      <span className="txt">
                        toys+games<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/tra" className="tra" data-cat="tra">
                      <span className="txt">
                        trailers<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/vga" className="vga" data-cat="vga">
                      <span className="txt">
                        video gaming<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/waa" className="waa" data-cat="waa">
                      <span className="txt">
                        wanted<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/wta" className="wta" data-cat="wta">
                      <span className="txt">
                        wheels+tires<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="jobs">
            <div id="jjj" className="col">
              <h3 className="ban">
                <Link
                  href="/search/jjj"
                  className="jjj"
                  data-alltitle="all jobs"
                  data-cat="jjj"
                >
                  <span className="txt">
                    jobs<sup className="c"></sup>
                  </span>
                </Link>
              </h3>
              <div className="cats">
                <ul id="jjj0">
                  <li>
                    <Link href="/search/acc" className="acc" data-cat="acc">
                      <span className="txt">
                        accounting+finance<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/ofc" className="ofc" data-cat="ofc">
                      <span className="txt">
                        admin / office<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/egr" className="egr" data-cat="egr">
                      <span className="txt">
                        arch / engineering<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/med" className="med" data-cat="med">
                      <span className="txt">
                        art / media / design<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sci" className="sci" data-cat="sci">
                      <span className="txt">
                        biotech / science<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/bus" className="bus" data-cat="bus">
                      <span className="txt">
                        business / mgmt<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/csr" className="csr" data-cat="csr">
                      <span className="txt">
                        customer service<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/edu" className="edu" data-cat="edu">
                      <span className="txt">
                        education<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/etc" className="etc" data-cat="etc">
                      <span className="txt">
                        etc / misc<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/fbh" className="fbh" data-cat="fbh">
                      <span className="txt">
                        food / bev / hosp<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/lab" className="lab" data-cat="lab">
                      <span className="txt">
                        general labor<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/gov" className="gov" data-cat="gov">
                      <span className="txt">
                        government<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/hum" className="hum" data-cat="hum">
                      <span className="txt">
                        human resources<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/lgl" className="lgl" data-cat="lgl">
                      <span className="txt">
                        legal / paralegal<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/mnu" className="mnu" data-cat="mnu">
                      <span className="txt">
                        manufacturing<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/mar" className="mar" data-cat="mar">
                      <span className="txt">
                        marketing / pr / ad<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/hea" className="hea" data-cat="hea">
                      <span className="txt">
                        medical / health<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/npo" className="npo" data-cat="npo">
                      <span className="txt">
                        nonprofit sector<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/rej" className="rej" data-cat="rej">
                      <span className="txt">
                        real estate<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/ret" className="ret" data-cat="ret">
                      <span className="txt">
                        retail / wholesale<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sls" className="sls" data-cat="sls">
                      <span className="txt">
                        sales / biz dev<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/spa" className="spa" data-cat="spa">
                      <span className="txt">
                        salon / spa / fitness<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sec" className="sec" data-cat="sec">
                      <span className="txt">
                        security<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/trd" className="trd" data-cat="trd">
                      <span className="txt">
                        skilled trade / craft<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sof" className="sof" data-cat="sof">
                      <span className="txt">
                        software / qa / dba<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/sad" className="sad" data-cat="sad">
                      <span className="txt">
                        systems / network<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/tch" className="tch" data-cat="tch">
                      <span className="txt">
                        technical support<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/trp" className="trp" data-cat="trp">
                      <span className="txt">
                        transport<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/tfr" className="tfr" data-cat="tfr">
                      <span className="txt">
                        tv / film / video<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/web" className="web" data-cat="web">
                      <span className="txt">
                        web / info design<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/wri" className="wri" data-cat="wri">
                      <span className="txt">
                        writing / editing<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div id="ggg" className="col">
              <h3 className="ban">
                <Link
                  href="/search/ggg"
                  className="ggg"
                  data-alltitle="all gigs"
                  data-cat="ggg"
                >
                  <span className="txt">
                    gigs<sup className="c"></sup>
                  </span>
                </Link>
              </h3>
              <div className="cats">
                <ul id="ggg0" className="left">
                  <li>
                    <Link href="/search/cpg" className="cpg" data-cat="cpg">
                      <span className="txt">
                        computer<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/crg" className="crg" data-cat="crg">
                      <span className="txt">
                        creative<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/cwg" className="cwg" data-cat="cwg">
                      <span className="txt">
                        crew<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/dmg" className="dmg" data-cat="dmg">
                      <span className="txt">
                        domestic<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul id="ggg1" className="mc">
                  <li>
                    <Link href="/search/evg" className="evg" data-cat="evg">
                      <span className="txt">
                        event<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/lbg" className="lbg" data-cat="lbg">
                      <span className="txt">
                        labor<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/tlg" className="tlg" data-cat="tlg">
                      <span className="txt">
                        talent<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search/wrg" className="wrg" data-cat="wrg">
                      <span className="txt">
                        writing<sup className="c"></sup>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div id="rrr" className="col">
              <h3 className="ban">
                <Link
                  href="/search/rrr"
                  className="rrr"
                  data-alltitle="all resumes"
                  data-cat="rrr"
                >
                  <span className="txt">
                    resumes<sup className="c"></sup>
                  </span>
                </Link>
              </h3>
              <div className="cats"></div>
            </div>
          </div>
        </div>

        <RightBar />
      </section>
    </div>
  );
}

export default App;

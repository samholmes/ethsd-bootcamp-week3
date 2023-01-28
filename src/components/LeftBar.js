import * as React from 'react';
import { Link } from './Link';

export function LeftBar() {
  return (
    <div id="leftbar" className="leftbar">
      <h1 id="logo">
        <Link>chainslist</Link>
      </h1>

      <ul id="postlks">
        <li>
          <Link id="post">create a transaction</Link>
        </li>
        <li>
          <Link>my account</Link>
        </li>
      </ul>

      <div className="cl-home-search-query wide">
        <div className="cl-search-dropdown">
          <input
            type="text"
            placeholder="search chainslist"
            autoComplete="off"
            autoCapitalize="none"
          />
          <div className="icom- magnifier"></div>
          <div className="results"></div>
        </div>
      </div>

      <div>
        <h4 id="calban">
          <Link href="/search/eee">log event calendar</Link>
        </h4>
        <table className="cal">
          <tbody>
            <tr className="days">
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
              <th>S</th>
            </tr>
            <tr>
              <td className="">23</td>
              <td className="">24</td>
              <td className="">25</td>
              <td className="">26</td>
              <td className="today ">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-01-27">
                  27
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-01-28">
                  28
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-01-29">
                  29
                </Link>
              </td>
            </tr>
            <tr>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-01-30">
                  30
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-01-31">
                  31
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-01">
                  1
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-02">
                  2
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-03">
                  3
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-04">
                  4
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-05">
                  5
                </Link>
              </td>
            </tr>
            <tr>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-06">
                  6
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-07">
                  7
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-08">
                  8
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-09">
                  9
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-10">
                  10
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-11">
                  11
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-12">
                  12
                </Link>
              </td>
            </tr>
            <tr>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-13">
                  13
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-14">
                  14
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-15">
                  15
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-16">
                  16
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-17">
                  17
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-18">
                  18
                </Link>
              </td>
              <td className="">
                <Link href="//orangecounty.chainslist.org/search/eee?sale_date=2023-02-19">
                  19
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="leftlinks" id="user_resources">
        <li>
          <Link>chainslist app</Link>
        </li>
        <li>
          <Link>help, faq, abuse, legal</Link>
        </li>
        <li>
          <Link>avoid scams &amp; fraud</Link>
        </li>
        <li>
          <Link>personal safety tips</Link>
        </li>
        <li>
          <Link>terms of use</Link>
        </li>
        <li>
          <Link>privacy policy</Link>
        </li>
        <li>
          <Link>system status</Link>
        </li>
      </ul>

      <ul className="leftlinks" id="about_chainslist">
        <li>
          <Link>about chainslist</Link>
        </li>
        <li>
          <Link>chainslist is hiring</Link>
        </li>
        <li>
          <Link>chainslist open source</Link>
        </li>
        <li>
          <Link>chainslist blog</Link>
        </li>
        <li>
          <Link>best-of-chainslist</Link>
        </li>

        <li>
          <Link>"chainslist joe"</Link>
        </li>
        <li>
          <Link>
            craig newmark
            <br />
            philanthropies
          </Link>
        </li>
      </ul>
    </div>
  );
}

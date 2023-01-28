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
          <Link>eth sd event calendar</Link>
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
                <Link>27</Link>
              </td>
              <td className="">
                <Link>28</Link>
              </td>
              <td className="">
                <Link>29</Link>
              </td>
            </tr>
            <tr>
              <td className="">
                <Link>30</Link>
              </td>
              <td className="">
                <Link>31</Link>
              </td>
              <td className="">
                <Link>1</Link>
              </td>
              <td className="">
                <Link>2</Link>
              </td>
              <td className="">
                <Link>3</Link>
              </td>
              <td className="">
                <Link>4</Link>
              </td>
              <td className="">
                <Link>5</Link>
              </td>
            </tr>
            <tr>
              <td className="">
                <Link>6</Link>
              </td>
              <td className="">
                <Link>7</Link>
              </td>
              <td className="">
                <Link>8</Link>
              </td>
              <td className="">
                <Link>9</Link>
              </td>
              <td className="">
                <Link>10</Link>
              </td>
              <td className="">
                <Link>11</Link>
              </td>
              <td className="">
                <Link>12</Link>
              </td>
            </tr>
            <tr>
              <td className="">
                <Link>13</Link>
              </td>
              <td className="">
                <Link>14</Link>
              </td>
              <td className="">
                <Link>15</Link>
              </td>
              <td className="">
                <Link>16</Link>
              </td>
              <td className="">
                <Link>17</Link>
              </td>
              <td className="">
                <Link>18</Link>
              </td>
              <td className="">
                <Link>19</Link>
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
            vitalik buterin
            <br />
            philanthropies
          </Link>
        </li>
      </ul>
    </div>
  );
}

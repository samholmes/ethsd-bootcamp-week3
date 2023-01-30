import { Link } from "./Link";

export function UserLinks() {
  return (
    <div className="userlinks">
      <ul className="user-actions">
        <li className="user post">
          <Link href="/create">send</Link>
        </li>
        <li className="user account">
          <Link>account</Link>
        </li>
      </ul>
      <ul className="user-favs-discards">
        <li className="user">
          <div className="favorites">
            <Link className="favlink">
              <span className="icon icon-star fav" aria-hidden="true"></span>
              <span className="fav-number">13</span>
              <span className="fav-label"> favorites</span>
            </Link>
          </div>
        </li>
        <li className="user discards">
          <div className="to-banish-page">
            <Link className="to-banish-page-link">
              <span className="icon icon-trash red" aria-hidden="true"></span>
              <span className="banished_count"></span>
              <span className="discards-label"> hidden</span>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

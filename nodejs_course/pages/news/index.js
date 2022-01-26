import { Fragment } from "react";
import { Link } from "next/link";
function NewsPage() {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/OPT1">OPT1</Link>
        </li>
        <li>OPT2</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;

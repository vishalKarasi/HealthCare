import { BackIcon } from "@assets/icons/icons";
import "./pageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="pageNotFound">
      <article>
        <h2>Error</h2>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to="/" className="btn btnPrimary">
          <BackIcon />
          Go Back Home
        </Link>
      </article>
    </main>
  );
}

export default PageNotFound;

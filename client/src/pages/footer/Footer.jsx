import { Link, NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <img src="/logo.svg" alt="logo" loading="lazy" />
      <div className="footerContent">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
        </nav>
        <article>
          <Link>Terms | Conditions</Link>
          <i>© 2024 Your Company Name. All rights reserved</i>
        </article>
      </div>
      <form>
        <h2>Please get in touch</h2>
        <input type="text" placeholder="Enter name" />
        <textarea rows={2} placeholder="Enter message" />
        <button className="btn btnSecondary">Submit</button>
      </form>
    </footer>
  );
}

export default Footer;

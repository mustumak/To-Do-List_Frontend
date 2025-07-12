import { FaGithub } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footerDiv">
      <p>ToDoEase — Your daily productivity companion.</p>
      <p>© 2025 Mustafa Kanorwala. All rights reserved.</p>
      <a
        href="https://github.com/mustumak"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub size={30} />
      </a>
    </footer>
  );
};

export default Footer;

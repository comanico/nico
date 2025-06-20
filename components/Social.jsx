import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/comanico" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/alexandru-nicolae-comaniciu-604692101/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@nicolaecomaniciu6489" },
  { icon: <FaTwitter />, path: "https://x.com/axnici" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>{socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}</div>
  );
};

export default Social;

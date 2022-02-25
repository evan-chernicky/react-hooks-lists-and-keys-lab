import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkLinks = links.map(link => <a key={link} href={'#' + link}>{link}</a>)

  

  return <nav>{linkLinks}</nav>;
}

export default NavBar;

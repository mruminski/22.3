import React from "react";
import { Link } from "react-router";
import { FormattedMessage } from "react-intl";

const linksArr = [
  {
    url: "/home",
    name: <FormattedMessage id="home" />
  },
  {
    url: "/",
    name: <FormattedMessage id="posts" />
  },
  {
    url: "/about",
    name: <FormattedMessage id="about" />
  }
];

const Navigation = () => (
  <div>
    <nav>
      <ul>
        {linksArr.map(item => (
          <li key={item.name}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navigation;

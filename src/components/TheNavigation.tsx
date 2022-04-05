import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./TheNavigation.module.scss";

interface Props {}

const TheNavigation = (props: Props) => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default TheNavigation;

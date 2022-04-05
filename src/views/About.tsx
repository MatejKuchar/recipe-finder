import React from "react";
import styles from "./About.module.scss";

interface Props {}

const About = (props: Props) => {
  return (
    <div>
      <h1>About</h1>
      <p className={styles.about}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
        turpis varius, accumsan mi id, blandit ligula. Integer cursus eu leo ut
        interdum. Aenean posuere convallis purus. Sed vulputate pharetra
        scelerisque. Vestibulum magna urna, ullamcorper at arcu non, dictum
        mattis dui. Donec vitae urna facilisis tellus luctus luctus. Suspendisse
        potenti. Etiam eget odio eu ex porta ullamcorper eu et enim. Quisque eu
        mi eu nulla vestibulum hendrerit eu nec felis. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Nam ullamcorper purus est, et dapibus dui vehicula vel. Praesent
        bibendum fringilla justo et fermentum. Etiam sed est vel lectus
        tincidunt malesuada. Fusce ut ornare ante. Vivamus tempor interdum
        egestas. Sed pulvinar arcu eu lacinia ultrices. Quisque sollicitudin sit
        amet lectus quis hendrerit.
      </p>
    </div>
  );
};

export default About;

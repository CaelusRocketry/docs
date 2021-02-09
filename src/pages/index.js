import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useThemeContext from "@theme/hooks/useThemeContext";
import styles from "./index.module.css";

const Logo = () => {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  return (
    <img
      src={isDarkTheme ? "/img/banner-dark.svg" : "/img/banner-transparent.svg"}
      alt="Logo"
    />
  );
};

const IndexPage = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title="Welcome to the docs!"
      description="Project Caelus' official documentation site."
    >
      <main className={styles}>
        <section className={styles.top}>
          <Logo />
          <p>Welcome to Project Caelus' documentation site!</p>
        </section>
        <section className={styles.links}>
          <p>
            To view our documentation, click on the{" "}
            <a href="/docs/index">Docs page</a>.
          </p>
          <p>
            To view our general website, click{" "}
            <a href="https://www.projectcaelus.org">here</a>.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

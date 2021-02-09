import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

const IndexPage = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Project Caelus' official documentation site."
    >
      <main className={styles}>
        <section className={styles.top}>
          <img src="/img/logo.svg"></img>
          <p>Welcome to Project Caelus' documentation site!</p>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

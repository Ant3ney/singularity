"use client";

import Nav from "components/Nav";
import Layout from "../components/Layout";
import BuildComponents from "../page-builder/body/BuildComponents";

export default function DynamicPage({ body }) {
  let JSX;

  if (body && !body.hasFailed) {
    JSX = BuildComponents(body);
  }

  if (!body) {
    return (
      <Layout>
        <div>Loading page...</div>
      </Layout>
    );
  }

  if (body.hasFailed) {
    return (
      <Layout>
        <div>Failed to load body</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Nav />
      <>{JSX}</>
    </Layout>
  );
}

import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About({ data }) {
  return (
    <div style={{ color: `teal` }}>
      <h1>{data.site.siteMetadata.title}</h1>
      <Header headerText="About" />
      <Link to="/">Home</Link>
      <p>Such wow. Very React.</p>
    </div>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
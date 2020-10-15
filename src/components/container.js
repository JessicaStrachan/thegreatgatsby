import React from "react"
import containerStyles from "./container.module.css"
import { useStaticQuery, Link, graphQl } from "gatsby"

export default function Container({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return(
    <div className={containerStyles.container}>
      {data.site.siteMetadata.title}
      {children}
    </div>
  )
}
import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
      <div style={{ color: `purple`}}>
        <Link to="/contact/">Contact</Link>
        <Link to="/about/">About</Link>
        <a href="https://twitter.com/JessMadeline" target="_blank">Twitter</a>
        <Header headerText="Home" />
        <p>What a world</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Container>
    );
}
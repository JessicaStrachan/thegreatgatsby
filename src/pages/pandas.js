import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Pandas() {
    return(
        <Container>
            <div style={{ color: `purple` }}>
                <Link to="/contact/">Contact</Link>
                <Link to="/about/">About</Link>
                <a href="https://twitter.com/JessMadeline" target="_blank">Twitter</a>
                <Header headerText="Pandas" />
                <p>Learning how to use data in Gatsby</p>
                <div>
                    <img
                    src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
                    alt="Group of pandas eating bamboo"
                    />
                </div>
            </div>
        </Container>
    )
}
import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
    return (
        <div style={{ color: `pink` }}>
            <Header headerText="Contact" />
            <Link to="/">Home</Link>
        </div>
    );
}
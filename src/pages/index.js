import React from "react"
import { Link } from "gatsby"
import { calculateVisitor } from "../utils/helper"
import background from "../images/cooldog.jpeg"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Matt, a web engineer at Credera UK.</h2>
      <p>You are the {calculateVisitor()} visitor!</p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
    </div>
  )
}

export default IndexPage

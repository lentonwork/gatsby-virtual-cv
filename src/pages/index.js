import React from "react"
import { Link } from "gatsby"
import { calculateVisitor } from "../utils/helper"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>
        I'm Andrew, a full-stack developer living in beautiful Philadelphia.
      </h2>
      <p>You are the {calculateVisitor()} visitor!</p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

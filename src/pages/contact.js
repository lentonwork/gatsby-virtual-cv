import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a
          href="https://www.linkedin.com/in/matthew-lau-4196b563/"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage

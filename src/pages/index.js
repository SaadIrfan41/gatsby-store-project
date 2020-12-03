import React from "react"
// import { Link } from "gatsby"
import { FaCcStripe } from "react-icons/fa"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <FaCcStripe />
  </Layout>
)

export default IndexPage

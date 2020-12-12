import { graphql, useStaticQuery } from "gatsby"
import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import Info from "../components/Info"
import Menu from "../components/Menu"
// import Hero_Image from "../components/Global/Hero_Image"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        img: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  const imageData = data.img.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage fluid={imageData} className="hero_background">
        <h1 className="text-white">HERO-IMAGE</h1>
      </BackgroundImage>
      <Info />
      <Menu />
    </Layout>
  )
}

export default IndexPage

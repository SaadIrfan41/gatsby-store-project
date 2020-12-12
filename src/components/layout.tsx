/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navbar from "./Global/Navbar"
import Footer from "./Footer"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      <Footer />
    </>
  )
}

export default Layout

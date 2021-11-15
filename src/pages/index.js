import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
       <p>I'm making this by following the Gatsby Tutorial.</p>
       <StaticImage
       alt="Gatsby tutorial page for adding plugins to your application"
       src="../images/screenshot.png"
       />
    </Layout>
  )
}
export default IndexPage
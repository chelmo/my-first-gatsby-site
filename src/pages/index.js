import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
       <p>I'm making this by following the Gatsby Tutorial.</p>
       <p>Say hello to Mr.B!</p>
       <StaticImage
       alt="My cat Mr.B, he's a domestic shorthair with a black and white coat and yellow eyes"
       src="../images/PXL_20210317_060017888.jpg"
       />
    </Layout>
  )
}
export default IndexPage
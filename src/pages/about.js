import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Us</h1>
      <p>
        Developers are finding new tools that help them optimize for
        performance without compromising on user experience. And digital
        agencies, more than anyone, are on the forefront of this website
        revolution.
      </p>
      <Link to="/">Go Back To Home</Link>
    </Layout>
  )
}

export default AboutPage;

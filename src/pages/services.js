import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <h1>Our Services</h1>
      <p>
        Gatsby just celebrated our fifth birthday. During that time, we’ve seen
        massive growth with 2000+ open source plugins, 3300 contributors, 200K
        public sites, the launch of Gatsby Cloud, and strong adoption among
        developers and agencies. One thing has become completely clear in our
        half decade thus far: the web is changing in a fundamental way. We’re in
        the midst of a true paradigm shift as the long-standing monolithic CMS —
        the way the web has been built for the past twenty years — is getting
        disrupted. Developers are finding new tools that help them optimize for
        performance without compromising on user experience. And digital
        agencies, more than anyone, are on the forefront of this website
        revolution.
      </p>
      <Link to="/">Go Back To Home</Link>
    </Layout>
  )
}

export default ServicesPage;

import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"

import Email from "../components/Email"
import Process from "../components/Process"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Process />
    <Email />
  </Layout>
)

export default IndexPage

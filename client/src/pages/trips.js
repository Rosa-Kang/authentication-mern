import * as React from "react"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import Seo from "../components/seo"



const TripsPage = () => (
  <Layout>
    <Seo title="TripsPage" />
    <Trips heading="Our Favorite Destinations" />
  </Layout>
)

export default TripsPage

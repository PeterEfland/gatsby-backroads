import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from '../components/Simple-Hero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default () => (
  <Layout>
    <SimpleHero>
      <Banner title="continue exploring" info="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas!">
        <Link to="/tours" className="btn-white">Explore Tours</Link>
      </Banner>
    </SimpleHero>
    <About></About>
    <Services></Services>
  </Layout>
)

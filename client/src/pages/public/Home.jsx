import React from 'react'
import Hero from '../../components/home/Hero'
import TrustSection from '../../components/home/TrustSections'
import Benefits from '../../components/home/Benifits'
import PlansPreview from '../../components/home/PlansPreview'
import WhyNiveshan from '../../components/home/WhyNiveshan'
import CTA from '../../components/home/CTA'

const Home = () => {
  return (
    <>
      <Hero/>
      <TrustSection/>
      <Benefits/>
      <PlansPreview/>
      <WhyNiveshan/>
      <CTA/>
    </>
  )
}

export default Home
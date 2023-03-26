import React from 'react'
import FeatureProducts from '../componentss/FeatureProducts';
import HeroSection from '../componentss/HeroSection'
import Services from '../componentss/Services';
import Trusted from '../componentss/Trusted';

const Home = () => {

  const data ={
    name: "People Store",
  }

  return (
    <>
      <HeroSection myData = {data}/> 
      <FeatureProducts/>
      <Services />
      <Trusted />
  </>
  )
  
}



export default Home
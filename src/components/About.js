import React from 'react'
import HeroSection from '../componentss/HeroSection'
import { useProductContext } from '../context/productContext'

const About = () => {
  

  const {myName}=useProductContext()

  const data = {
    name: "People Ecommerce",
  }
  return <>
  {myName}
  <HeroSection myData = {data}/>
  </>
}

export default About
import React from 'react'
import Hero from '../Components/Hero/Hero'
import Features from '../Components/Features/Features'
import { heroOne,heroTwo,heroThree } from '../data/HeroData'
import Content from '../Components/Content/Content'


function Home() {
  return (
    <>
    <Hero/>
    <Features/>
    <Content {...heroOne} />
	<Content {...heroTwo} />
	<Content {...heroThree} />
    
    </>
  )
}

export default Home
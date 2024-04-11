//import React from 'react'
import Community from './Community'
import Creation from './Creation'
import Product from './Product'
import Service from './service'
import Footer from '../components/Footer'


const Out = () => {
  return (
    <div className="mx-auto">
      <Creation />
      <Product />
      <Service />
      <Community />
      <Footer />
      
    </div>
  )
}

export default Out

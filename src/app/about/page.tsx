export const metadata = {
  title: "Car-Zone/About"
}

import React from 'react'
// import about from "../Components/about"
import AboutUs from '../Components/about'
import Navbar from '../Components/navbar';

const page = () => {
  return (
    <div>
        <Navbar />
        <AboutUs/>
      
    </div>
  )
}

export default page

import Navbar from '@/Components/Navbar/navbar'
import React from 'react'
import PropertySectionOne from '../Components/PropetySectionOne/page'
import Propertytwo from '../Components/Propertytwo/page'
import PropertyThree from '../Components/Propertythree/page'
import Footer from '@/Components/Footer/footer'
import Numb from '../Components/Numb/page'


const propertypage = () => {
  return (
    <div>
     <Navbar />
     <PropertySectionOne />
     <Propertytwo />
     <PropertyThree />
     <Numb />
   <Footer />
      </div>
  )
}

export default propertypage
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/navbar'
import Loading from '../Components/loading'; 
import Header from '../Components/Header/pages'
import SectionOne from '../Components/SectionOne/page'
import Footer from '@/Components/Footer/footer'
import Socials from '../Components/Socials/page'
import Contact from '../Components/Contact/page'
import SectionTwo from '../Components/SectionTwo/page'
import SectionThree from '../Components/SectionThree/page'
import Testimonies from '../Components/Testimonies/page'
import AboutUs from '../Components/AboutUs/page'
import Services from '../Components/Services/page'
import Career from '../Components/Career/page'
import Carosel from '../Components/Carosel/page'
import Blog from '../Components/Blog/page'
import Message from '../Components/MessageComp/page'
import LayoutContainer from "../Components/util/layout"
import Subsection from '../Components/subsection/page'




const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data fetching
    const fetchData = async () => {
      // Your actual data fetching logic goes here
      // For demonstration purposes, let's use a timeout
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <main className=' overflow-hidden'>
      {loading ? (
        <Loading />
      ) : (
        <>
        <Header />
          {/* <Navbar /> */}
          <SectionOne />
          <SectionTwo />
          <Services />
          <Subsection />
          {/* <SectionThree /> */}
          <AboutUs />
          <Career />
          <Testimonies />
          <Blog />
          {/* <Message /> */}
          <Contact />
          <Footer />
        </>
        // <LayoutContainer>
          
        // </LayoutContainer>
      )}
    </main>
  );
};

export default Home;


// Home.Container = LayoutContainer
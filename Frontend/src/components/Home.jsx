import React, { useEffect } from 'react'
import Navbar from './Shared/Navbar'
import HeroSection from './Herosection'
import CatergoryCarousel from './CategoryCarousel'
import Footer from './Shared/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(user?.role === 'recruiter') {
      navigate("/admin/");
    }
  }, []);
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CatergoryCarousel/>
      <Footer/>
    </div>
  )
}

export default Home
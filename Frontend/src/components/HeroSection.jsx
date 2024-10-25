import React from 'react'

const HeroSection = () => {
  return (
    <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#F83002]'>Dream Jobs</span></h1>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Empower Your Career with Expert Job Consultation</span>
                <p>
                Unlock your true potential with personalized job consultations designed 
                to guide you toward your dream career. <br/>Whether you're a fresh graduate or 
                an experienced professional, our expert advisors provide tailored advice, 
                resume reviews, interview coaching,<br /> and career strategies to help you stand out in today’s 
                competitive job market.<br/> Start your journey toward 
                success with confidence because your career deserves the best guidance.</p>
            </div>
    </div>
    )
}
export default HeroSection
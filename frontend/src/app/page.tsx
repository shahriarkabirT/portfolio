"use client"
import React from 'react'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <>
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 opacity-90'>
    <HeroSection/>
    <ProjectsSection limit={6} />
    <Skills/>
    <WorkExperience/>
    <Contact/>
    <Footer/>
    </div>

    </>
  )
}

export default page
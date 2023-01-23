import { useState } from 'react'
import { Header, SectionHeading, SectionCard, SectionContent, SectionContent2, Features, Testimonial } from './container'
import './index.css'

function App() {

  return (
    <div className="App w-full overflow-x-hidden bg-[#FAFBFF]">
      <Header />
      <SectionHeading />
      <SectionCard />
      <SectionContent />
      <SectionContent2 />
      <Features />
      <Testimonial />
    </div>
  )
}

export default App

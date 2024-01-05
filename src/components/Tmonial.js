import Tmonialdata from "./Tmonialdata";
import "./testimonialstyle.css"
import React, { useState } from 'react'

const Tmonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handelPrev = () =>{
    setActiveTestimonial((prev) => (prev === 0 ? Tmonialdata.length - 1: prev-1)
    );
  }

  const handelNext = () =>{
    setActiveTestimonial ((prev) => (prev === Tmonialdata.length-1 ? 0:prev+1));
  }
  return (
    <div className="testimonial-container">
      <div className="testimonial">
        <div className="testimonial-image">
          <img src={Tmonialdata[activeTestimonial].imgsrc} alt={Tmonialdata[activeTestimonial].namesign}/>
        </div>
        <div className="testimonial-content">
          <p>{Tmonialdata[activeTestimonial].text}</p>
          <p className="testimonial-author">{Tmonialdata[activeTestimonial].namesign}</p>
        </div>
        <div className="testimonial-buttons">
          <button onClick={handelPrev}>Previous</button>
          <button onClick={handelNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Tmonial
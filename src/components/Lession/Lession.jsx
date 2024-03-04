import React from 'react'

function Lession() {
  return (
    <div>
      <div className='lesson_first'>
        <h1 className='our'>Our lessons</h1>
        <p style={{opacity:".9",marginBottom:"30px"}}>Our lessons are carefully structured and interactive, designed to promote rapid <br /> language acquisition through practical tasks and real-world scenarios</p>
      </div>
      <div className='lcard_area'>
        <div className='discribe'>
          <h5>Practice</h5>
          <h3>40$ / month</h3>
          <p className='paragraph_card' >This plan offers an opportunity for learners to engage in collaborative br language exercises and group activities, boosting their conversational skills and confidence in using English.</p>
          <button className='bott' style={{background:"#4DC274",padding:"10px",borderRadius:"10px",border:"0",color:"#ffffff",marginTop:"20px"}}>Leave an application</button>
        </div>
        <div className='discribe' style={{background:"#4DC274"}}>
          <h5>Standard</h5>
          <h3>70$ / month</h3>
          <p className='paragraph_card'>Our standard package provides a balanced learning approach that covers all key areas of English language - reading, writing, listening, and speaking.  It is a set of basic knowledge and skills.</p>
          <button className='bott' style={{background:"#4DC274",padding:"10px",borderRadius:"10px",border:"1px solid #FFFFFF",color:"#ffffff",marginTop:"20px"}}>Leave an application</button>
        </div>
        <div className='discribe'>
          <h5>Individual</h5>
          <h3>99$ / month</h3>
          <p className='paragraph_card'>We offer a tailored learning experience with individualized instruction that focuses on a learner's specific language goals and challenges, offering personal feedback.</p>
          <button className='bott' style={{background:"#4DC274",padding:"10px",borderRadius:"10px",border:"0",color:"#ffffff", marginTop:"20px"}}>Leave an application</button>
        </div>
        
      </div>
    </div>
  )
}

export default Lession
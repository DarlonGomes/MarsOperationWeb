import React from "react";
import StarryBackground from "./style";

const ParallaxBackground = () => {
  return(
    <StarryBackground>
      <div style={{
        backgroundColor: "white",
        width: '400px',
        height: '200px',
        zIndex: 10000,
      }} />
      <div className='stars'/>
      <div className='stars2'/>
      <div className='stars3'/>
    </StarryBackground>

  )
}

export default ParallaxBackground
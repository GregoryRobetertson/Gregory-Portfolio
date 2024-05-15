import React from 'react'
import Projects from './components/Projects'

export default function Cards() {
    const styles = {
        borderTop: "1px solid #6f42c1",
        boxShadow:
          "0 0 2px rgba(111,66,193,.9),0 0 4px rgba(111,66,193,.4),0 0 1rem rgba(111,66,193,.3),0 0 4rem rgba(111,66,193,.1)",
        opacity: "1",
      };  
  return (
  <>
  <h1>Projects</h1>
  <hr style={styles} />
  <Projects 
  title='Forecast Pro'
  text='App that let people check the weather.'
  src='/weather.png'
  link='https://forecastpro.netlify.app/'
  />

 <Projects 
  title='GlobalSphere Connect'
  text='A Social platform that focus on the news, weather, and let people post blogs and connect with each other.'
  src="/globalsphereconnect.png"
  link="https://globalsphereconnect.netlify.app/"
  />  
  </>
 
  )
}

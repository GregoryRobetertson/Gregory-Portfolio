import React from 'react'

export default function Skills() {
    const styles = {borderTop: '1px solid #6f42c1',
    boxShadow: '0 0 2px rgba(111,66,193,.9),0 0 4px rgba(111,66,193,.4),0 0 1rem rgba(111,66,193,.3),0 0 4rem rgba(111,66,193,.1)',
    opacity: '1'}
  return (
    <>
    
    <div className='row mt-5 text-white ' id='skills'>
        <div className='col-lg-12'>
          <h3>Technical Skills</h3>
         <hr className='my-4' style={styles} />
         <ul className="list-none text-lg">
        <li className="flex items-center">
          <span className="mr-2 text-white text-2xl">&#8226;</span>
          <strong className='mr-1'>Languages:</strong> JavaScript, HTML, CSS, Sass
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-white text-2xl">&#8226;</span>
          <strong className='mr-1'>Frameworks and libraries:</strong> 
          React, Nodejs, Nextjs, lodash, Axios 
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-white text-2xl">&#8226;</span>
          <strong className='mr-1'>Cloud computing services:</strong> 
           Firebase, Codespace
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-white text-2xl">&#8226;</span>
          <strong className='mr-1'>Front-end tools:</strong> 
          Bootstrap, Sass, Figma, Lighthouse, Jest
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-white text-2xl">&#8226;</span>
          <strong className='mr-1'>Other tools:</strong> 
       OAuth, GitHub, VS Code, Netlify
        </li>
      </ul>
    </div>
        </div>
        
    </>
  )
}

'use client';
import React from 'react'
import Nav from 'react-bootstrap/Nav';
export default function Header() {
  return (
    <div className="mt-0 p-2 bg-violet-900">
    <nav className="container mx-auto flex justify-end">
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#about" className="text-white px-4 py-2 hover:bg-violet-800">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="#skills" className="text-white px-4 py-2 hover:bg-violet-800">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href="#projects" className="text-white px-4 py-2 hover:bg-violet-800">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" href="#contact" className="text-white px-4 py-2 hover:bg-violet-800">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" href="" className="text-white px-4 py-2 hover:bg-violet-800">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  </div>
  
    


   
  )
}

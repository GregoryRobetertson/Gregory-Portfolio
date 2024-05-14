'use client';
import React from 'react'
import Nav from 'react-bootstrap/Nav';
export default function Header() {
  return (
    <div className='mt-0 bg-violet-900'>
      <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">About Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Skills</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">Contact</Nav.Link>
    </Nav.Item>
  </Nav>  
    </div>
    


   
  )
}

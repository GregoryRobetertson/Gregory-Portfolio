'use client';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <div className="mt-0 p-2 bg-violet-900">
      <Navbar expand="lg" className="container mx-auto">
        <Navbar.Brand className="text-white text-2xl font-bold">
          Gregory Robertson
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about" className="text-white px-4 py-2 hover:bg-violet-800">About Me</Nav.Link>
            <Nav.Link href="#skills" className="text-white px-4 py-2 hover:bg-violet-800">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-white px-4 py-2 hover:bg-violet-800">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-white px-4 py-2 hover:bg-violet-800">Contact</Nav.Link>
            <Nav.Link href="" className="text-white px-4 py-2 hover:bg-violet-800">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

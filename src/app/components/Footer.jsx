"use client";

import { Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="mt-0 p-2 bg-violet-900">
    <nav className="container mx-auto flex justify-center">
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
    <p className="text-center mt-4">Designed and Built by Gregory Robertson</p>
  </div>
  
  );
}

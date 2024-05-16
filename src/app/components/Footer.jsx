"use client";

export default function Footer() {
  return (
    <div className="bg-violet-900 mt-5 pt-3">
    <div className="container mx-auto">
      <ul className="flex justify-center space-x-10">
        <li>
          <a href="#about" className="text-white hover:text-violet-300">About Me</a>
        </li>
        <li>
          <a href="#skills" className="text-white hover:text-violet-300">Skills</a>
        </li>
        <li>
          <a href="#projects" className="text-white hover:text-violet-300">Projects</a>
        </li>
        <li>
          <a href="#contacts" className="text-white hover:text-violet-300">Contacts</a>
        </li>
        <li>
          <a href="#resume" className="text-white hover:text-violet-300">Resume</a>
        </li>
      </ul>
      <div className="text-center mt-3">
        <p className="text-white">Designed and Built by Gregory Robertson</p>
      </div>
    </div>
  </div>
  
  );
}

"use client";
import React from "react";
import { Image } from "react-bootstrap";

export default function Projects({title, text, src, link}) {
  const styles = {
    borderTop: "1px solid #6f42c1",
    boxShadow:
      "0 0 2px rgba(111,66,193,.9),0 0 4px rgba(111,66,193,.4),0 0 1rem rgba(111,66,193,.3),0 0 4rem rgba(111,66,193,.1)",
    opacity: "1",
  };
  return (
    <>
      {console.log(title,text,src,link)}
      
      <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg m-4 text-white ">
      <Image src={src} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p>{text}</p>
      </div>
      <div className="px-6 py-4">
        <a href={link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded no-underline">Visit</a>
      </div>
    </div>
    </>
  );
}

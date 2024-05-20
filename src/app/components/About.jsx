import Image from "next/image";
import React from "react";

export default function About() {
  const styles = {
    borderTop: "1px solid #6f42c1",
    boxShadow:
      "0 0 2px rgba(111,66,193,.9), 0 0 4px rgba(111,66,193,.4), 0 0 1rem rgba(111,66,193,.3), 0 0 4rem rgba(111,66,193,.1)",
    opacity: "1",
  };

  return (
    <>
      <div className="row mt-4 text-white" id="about">
        <div className="col-lg-12">
          <h2>About Me</h2>
        </div>

        <hr style={styles} />
        <div className="flex flex-col md:flex-row gap-5">
          <p className="text-base">
            I'm deeply committed to creating websites and web applications,
            visually appealing, and tailored to meet specific client needs. I'm
            skilled in both building dynamic websites and developing complex web
            applications, and I love taking on challenging problems and finding
            creative solutions. With the skills I've gained from Codex Academy,,
            I have a strong foundation in full stack development. I make sure to
            stay up-to-date with the latest trends in web development, always
            seeking out new knowledge and techniques to keep my skills relevant
            in this fast-changing industry. This helps me stay competitive and
            capable of delivering the latest solutions to my clients.
          </p>
          <Image
            src="/profile.JPG"
            alt="profile picture"
            height={200}
            width={325}
            className="w-full md:w-auto pb-5"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}

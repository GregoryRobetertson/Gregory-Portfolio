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
          I’m a passionate Full Stack Developer with experience in crafting engaging and efficient web applications. My expertise spans a diverse array of technologies, including JavaScript, React, Node.js, and SQL, allowing me to build robust solutions from the ground up.

          I love the challenge of turning complex problems into user-friendly designs and seamless functionalities. With a strong focus on both front-end aesthetics and back-end performance, I aim to create applications that not only look great but also deliver exceptional user experiences.
          
          Collaboration is key to my approach; I enjoy working with cross-functional teams to bring ideas to life and ensure that projects align with business goals. I’m always eager to learn and explore new technologies, keeping my skills sharp and my projects innovative.
          
          Take a look at my work, and feel free to reach out if you’d like to connect or discuss potential collaborations!
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

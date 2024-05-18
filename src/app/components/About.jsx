import Image from 'next/image'
import React from 'react'

export default function About() {

    const styles = {
        borderTop: '1px solid #6f42c1',
        boxShadow: '0 0 2px rgba(111,66,193,.9), 0 0 4px rgba(111,66,193,.4), 0 0 1rem rgba(111,66,193,.3), 0 0 4rem rgba(111,66,193,.1)',
        opacity: '1'
    };

    return (
        <>
            <div className='row mt-4 text-white' id='about'>
                <div className='col-lg-12'>
                    <h2>About Me</h2>
                </div>

                <hr style={styles} />
                <div className='flex flex-col md:flex-row gap-5'>
                    <p className='text-base'>
                        I am deeply committed to crafting responsive, user-friendly, and visually captivating web applications tailored to address real-world challenges and align precisely with client specifications. Proficient in both dynamic website construction and the development of intricate web applications, I relish the opportunity to tackle complex problems head-on, leveraging innovative solutions. With a certification from Codex Academy, I possess a robust foundation of expertise and skills essential for full stack development. I stay updated with the latest developments, innovations, and trends in the field of web development. This implies that I continuously seek out new knowledge, techniques, and technologies to ensure that my skills and expertise are current and relevant in the rapidly evolving landscape of the industry. By doing so, I position myself as a competitive and knowledgeable professional who can deliver cutting-edge solutions to clients.
                    </p>
                    <Image
                        src='/profile.JPG'
                        alt='profile picture'
                        height={200}
                        width={325}
                        className='w-full md:w-auto pb-5'
                        objectFit='cover'
                    />
                </div>
            </div>
        </>
    )
}

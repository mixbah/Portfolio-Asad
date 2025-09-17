import React, { useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);

        
    useGSAP(()=>{
        const projects=[project1Ref.current,project2Ref.current,project3Ref.current];

        gsap.fromTo(sectionRef.current , {opacity:0} , {opacity:1,duration:1.5});

        projects.forEach((card,index)=>{
            gsap.fromTo(
                card,
                {y:50,opacity:0,}
                ,
                {y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3 * (index+1),
                    ScrollTrigger:{
                        trigger:card,
                        start:'top bottom-=100',
                    },
            });
        });
        },[]);
  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT SIDE */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <a href="https://shoes-ecommerce-gold.vercel.app/" target='_blank'>
                        <img src="/images/project1.png" alt="solemate" /></a>
                        
                    </div>
                    <div className='text-content'>
                        <h2>Buy Your Favourite Soles From Anywhere Anytime</h2>
                        <p className='text-white-50 md:text-xl'>
                        Our e-commerce solution is crafted for those who want more than just an online store. It’s about creating a platform that’s easy to manage, efficient to use, and built to deliver results.</p>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#F9F9F7]'>
                            <a href="https://pdfi-summarizer.vercel.app" target='_blank'>
                            <img src="/images/project2.png" alt="pdf parser"/></a>
                        </div>
                        <h2>Drag and Drop for Quick Summary</h2>
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffff]'>
                            <a href=""><img src="/images/project3.png" alt="AI Interview Platform" />
                            </a>
                        </div>
                        <h2>AI Interview Platform</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowCaseSection
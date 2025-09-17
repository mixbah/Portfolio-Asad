import React from 'react'
import { socialImgs } from '../constants'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center md:items-start items-center'>
                <a href="misbah6634@gmail.com">Visit Me</a>
            </div>
            <div className='socials'>
                {socialImgs.map((img)=>(
                    <a className='icon' target='_blank' href={img.url} key={img.url}>
                        <img src={img.imgPath} alt={img.name} height={1} width={30}/>
                    </a>
                ))}
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                © {new Date().getFullYear()} Misbah Asad . All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
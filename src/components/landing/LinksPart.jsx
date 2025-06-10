import React from 'react'
import { Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LinksPart = () => {

    const { t } = useTranslation();

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/thomas-bartier-185752138/")
    }

    const openGithub = () => {
        window.open("https://github.com/tomab23")
    }
  return (
    <div className='flex flex-col gap-2'>
        <h3>{t('LANDING.LINK')}</h3>
        <div className='flex justify-center gap-8'>
            <Github className='cursor-pointer hover:scale-125' onClick={openGithub} />
            <Linkedin className='cursor-pointer hover:scale-125' onClick={openLinkedin}/>
        </div>
    </div>
  )
}

export default LinksPart
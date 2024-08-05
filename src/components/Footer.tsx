import React, { useContext, useMemo } from 'react'
import { FlexBox, FooterWrapper, Logo } from './styles'
import { ThemeContext } from '../App'
import * as faIcons from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io5"


const Footer = () => {
    const { scrollHandler, redirect = () => { } } = useContext(ThemeContext)

    const links = useMemo(() => [
        <faIcons.FaGithub onClick={() => redirect("https://github.com/richardsbenjimen")} style={{ width: 25, height: 25, cursor: 'pointer' }} />,
        <IoLogoLinkedin onClick={() => redirect("https://www.linkedin.com/in/alfredrichardsgaini/")} style={{ width: 25, height: 25, cursor: 'pointer' }} />,
        <faIcons.FaInstagram onClick={() => redirect("https://www.instagram.com/mr.benjimen/")} style={{ width: 25, height: 25, cursor: 'pointer' }} />,
    ], [])
    
    return (
        <FooterWrapper id="footer">
            <FlexBox className='item'>
                <Logo onClick={() => scrollHandler("home")}>Alfred Richards <strong>.</strong></Logo>
            </FlexBox>
            <FlexBox gap={40} style={{  }} justifyContent='center' alignItems='center' className='item'>
                {links.map(item => item)}
            </FlexBox>
        </FooterWrapper>
    )
}

export default Footer
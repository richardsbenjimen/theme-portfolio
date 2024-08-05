import { useContext } from 'react'
import { FlexBox, HeaderWrapper, Logo, NavItems, ResumeButton } from './styles'

import { useLocation } from 'react-router-dom'
import { ThemeContext } from '../App'
import { MdOutlineDarkMode } from "react-icons/md";

import "./component.scss"
import { Switch } from './utils';

const Header = ({ scrollPercent }: { scrollPercent: number }) => {
    const { setTheme, scrollHandler } = useContext(ThemeContext)
    const { pathname } = useLocation()

    const navItems = ["Experience", "Skills", "Projects", "Contact"]

    return (
        <HeaderWrapper position='sticky' scrolled={scrollPercent > 0}>
            <FlexBox justifyContent='space-between' alignItems='center' height={80} width={"100%"} style={{ backgroundColor: "var(--background-color)", padding: "0 72px" }}>
                <Logo onClick={() => scrollHandler("home")}>Alfred Richards <strong>.</strong></Logo>
                <NavItems>
                    {navItems.map(item => (<p onClick={() => scrollHandler(item)} className={pathname === `/${item.toLowerCase()}` ? "selected":""} >
                        {item}
                    </p>))}
                    <p>
                        <ResumeButton onClick={() => window.open("https://richards-portfolio-assets.s3.us-east-2.amazonaws.com/Richards+resume.pdf")}>Get Resume</ResumeButton>
                    </p>
                    <p style={{ cursor: 'default' }}>
                        <Switch />
                    </p>
                </NavItems>
            </FlexBox>
            <FlexBox style={{ height: 2, backgroundColor: "var(--selected-color)", width: `${scrollPercent}%`, position: 'absolute', bottom: 0 }} />
        </HeaderWrapper>
    )
}

export default Header
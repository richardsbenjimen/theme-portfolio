import { useContext, useState } from 'react'
import { FlexBox, HeaderWrapper, Logo, NavItems, ResumeButton } from './styles'

import { useLocation } from 'react-router-dom'
import { ThemeContext } from '../App'
import { CiMenuFries } from "react-icons/ci";


import "./component.scss"
import { Switch } from './utils';
import SideModal from './SideModal';

const Header = ({ scrollPercent }: { scrollPercent: number }) => {
    const { scrollHandler } = useContext(ThemeContext)
    const { pathname } = useLocation()
    const [showModal, setShowModal] = useState(false)

    const navItems = ["Experience", "Skills", "Projects", "Contact"]



    return (
        <HeaderWrapper position='sticky' scrolled={scrollPercent > 0}>
            <FlexBox className='main-header' justifyContent='space-between' alignItems='center' height={80} width={"100%"} style={{ backgroundColor: "var(--background-color)" }}>
                <Logo onClick={() => scrollHandler("home")}>Alfred Richards <strong>.</strong></Logo>
                <NavItems >
                    {navItems.map(item => (<p onClick={() => scrollHandler(item)} className={pathname === `/${item.toLowerCase()}` ? "selected" : ""} >
                        {item}
                    </p>))}
                    <p>
                        <ResumeButton onClick={() => window.open("https://richards-portfolio-assets.s3.us-east-2.amazonaws.com/Richards-full-stack-resume.pdf")}>Get Resume</ResumeButton>
                    </p>
                    <p style={{ cursor: 'default' }}>
                        <Switch />
                    </p>
                    <button className='mobile-icon' onClick={() => setShowModal(s => !s)}>
                        <CiMenuFries style={{ width: 30, height: 30 }} />
                        {showModal && <SideModal navItems={navItems} setShowModal={setShowModal} />}
                    </button>

                </NavItems>
            </FlexBox>
            <FlexBox style={{ height: 2, backgroundColor: "var(--selected-color)", width: `${scrollPercent}%`, position: 'absolute', bottom: 0 }} />
        </HeaderWrapper>
    )
}

export default Header
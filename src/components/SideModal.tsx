import styled from "@emotion/styled";
import { IoMdCloseCircle } from "react-icons/io";
import { FlexBox, ResumeButton } from "./styles";
import { useLocation } from "react-router-dom";
import { Dispatch, SetStateAction, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../App";

const ModelWrapper = styled.div({
    display: 'flex',
    width: 200,
    backgroundColor: 'var(--menu-bg)',
    position: 'absolute',
    right:30,
    borderRadius: 10,
    flexDirection:'column',
    margin:0,
    padding:"10px 0",
    color: "var(--text-color)",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    zIndex: 1,
    gap: 5,
    button:{
        height: 20,
        textAlign:'start',
        padding:20,
        fontSize: 14,
        margin:0,
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: "unset",
        border: "none",
        color: "var(--text-color)",
        "&:hover":{
            backgroundColor:"var(--selected-color)"
        }
    }
})

const SideModal = ({ navItems, setShowModal }: { navItems: string[], setShowModal: Dispatch<SetStateAction<boolean>> }) => {
    const { pathname } = useLocation()
    const ref = useRef<HTMLDivElement>(null)
    const { scrollHandler, setTheme } = useContext(ThemeContext)

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowModal(p => !p);
        }
    }; 

    useEffect(()=>{
        document.addEventListener("mousedown",handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[])
    
    return (
        <ModelWrapper ref={ref}>
            {navItems.map(item => (<button style={{ backgroundColor: pathname.includes(item.toLowerCase()) ? "var(--selected-color)" : "" }} onClick={() => scrollHandler(item)}>
                {item}
            </button>))}
            <ResumeButton onClick={() => window.open("https://richards-portfolio-assets.s3.us-east-2.amazonaws.com/Richards-full-stack-resume.pdf")} style={{ width: 150, margin: "0px 0 15px 19px", color: "white", backgroundColor: "var(--selected-color)" }}>Get Resume</ResumeButton>
            <button onClick={setTheme}>Change theme </button>
        </ModelWrapper>
    )
}

export default SideModal
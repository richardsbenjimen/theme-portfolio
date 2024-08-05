import { useContext } from "react"
import { IoSunnyOutline } from "react-icons/io5";
import { GiNightSky } from "react-icons/gi";
import { ThemeContext } from "../App"
import { FlexBox } from "./styles"

import "./component.scss"

export const camelCase = (strings: string[]) => strings.map(item => item.slice(0, 1).toUpperCase() + item.slice(1, item.length)).join("")

export const Switch = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return <FlexBox width={"100%"} height={"100%"} justifyContent="center" alignItems="center" cursor="pointer" title="click to change theme" onClick={(e => {
        e.preventDefault()
        setTheme()
    })}>
        {theme === "light" && <IoSunnyOutline style={{
            width: 25, height: 25
        }} />}
        {theme === "dark" && <GiNightSky style={{
            width: 25, height: 25
        }} />}
    </FlexBox>

}
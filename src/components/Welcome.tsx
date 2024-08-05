import React from 'react'
import { FlexBox, GridBox, ImageContainer, Maintitle } from './styles'
import { Typewriter } from 'react-simple-typewriter'

const Welcome = () => {
    const TypeWriterText = () => {
        return <span style={{ color: "var(--selected-color)", margin: 0, fontStyle: "italic" }}>
            <Typewriter words={["Full stack developer", "Reactjs Developer", "Java Developer", "NodeJs developer"]} loop cursor cursorStyle="|" delaySpeed={500} />
        </span>
    }
    return (
        <GridBox height={"100vh"} alignItems='center' gridTemplateColumns={"1fr 1fr"} id="home" className='component '>
            <FlexBox flexDirection='column' data-aos="fade-right" data-aos-delay="400">
                <Maintitle fontSize={50} textAlign="center" margin={"0 0 32px 0"}  >
                    I,m Alfred Richards<br />
                    <TypeWriterText /> <br />
                    <strong>Based in Hyderabad</strong><br/>
                </Maintitle>
            </FlexBox>
            <ImageContainer src={`${process.env.PUBLIC_URL}/main.png`} minWidth={500} height={500} data-aos="fade-left" data-aos-delay="400" className='main-img'/>
        </GridBox>
    )
}

export default Welcome
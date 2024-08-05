import { CSSProperties, useState } from 'react'
import * as faIcons from "react-icons/fa"
import * as grIcons from "react-icons/gr"
import * as siIcons from "react-icons/si"
import * as tbIcons from "react-icons/tb"
import * as giIcons from "react-icons/gi";
import { ComponentDescription, ComponentTitle, FlexBox, GridBox, SkillButton, SkillCard } from './styles'

const skillsConfig = [
    {
        buttonText: "Front-End",
        description: "Crafting exceptional user experiences with modern front-end technologies.",
        skills: [{
            text: "Reactjs",
            icon: ({ width, height }: CSSProperties) => <faIcons.FaReact style={{ width, height }} />
        }, {
            text: "TypeScript", icon: ({ width, height }: CSSProperties) => <tbIcons.TbBrandTypescript style={{ width, height }} />
        }, { text: "NextJs", icon: ({ width, height }: CSSProperties) => <tbIcons.TbBrandNextjs style={{ width, height }} /> },
        {
            text: "KaiOs", icon: ({ width, height }: CSSProperties) => <siIcons.SiKaios style={{ width, height }} />
        }],
    },
    {
        buttonText: "Back-End",
        description: "Developing robust and scalable back-end solutions to power applications.",
        skills: [
            { text: "SpringBoot", icon: ({ width, height }: CSSProperties) => <siIcons.SiSpringboot style={{ width, height }} /> },
            { text: "NodeJs", icon: ({ width, height }: CSSProperties) => <faIcons.FaNodeJs style={{ width, height }} /> },
            { text: "Django", icon: ({ width, height }: CSSProperties) => <siIcons.SiDjango style={{ width, height }} /> }
        ],
    },
    {
        buttonText: "Databases",
        description: "Managing data with efficient and reliable database solutions.",
        skills: [
            { text: "MongoDb", icon: ({ width, height }: CSSProperties) => <tbIcons.TbBrandMongodb style={{ width, height }} /> },
            { text: "MySql", icon: ({ width, height }: CSSProperties) => <grIcons.GrMysql style={{ width, height }} /> }
        ],
    },
    {
        buttonText: "Unit testing, DevOps, Automation and others",
        description: "Utilizing a variety of tools and technologies to enhance development and deployment.",
        skills: [
            { text: "Jest", icon: ({ width, height }: CSSProperties) => <siIcons.SiTestinglibrary style={{ width, height }} /> },
            { text: "Robot automation", icon: ({ width, height }: CSSProperties) => <faIcons.FaRobot style={{ width, height }} /> },
            { text: "Jenkins", icon: ({ width, height }: CSSProperties) => <faIcons.FaJenkins style={{ width, height }} /> },
            { text: "Jira", icon: ({ width, height }: CSSProperties) => <siIcons.SiJira style={{ width, height }} /> },
            { text: "Kafka", icon: ({ width, height }: CSSProperties) => <siIcons.SiApachekafka style={{ width, height }} /> },
            { text: "Amplitude", icon: ({ width, height }: CSSProperties) => <giIcons.GiAmplitude style={{ width, height }} /> },
        ],
    }
]



const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(skillsConfig[0])

    return (
        <FlexBox id="skills" className='component' flexDirection='column' alignContent='flex-start' lineHeight={20}>
            <ComponentTitle>Skills</ComponentTitle>
            <ComponentTitle fontSize={40} fontWeight={"var(--font-weight-700)"}>Crafting Excellence in Every Line of Code</ComponentTitle>
            <ComponentDescription margin={"0 0 50px 0"}>
                Welcome to my skills page, where innovation meets precision. Here, I showcase the diverse array of technical proficiencies that enable me to transform complex challenges into seamless solutions. With a meticulous approach to full-stack development, I ensure every project I undertake is built on a foundation of robust, scalable, and efficient code.</ComponentDescription>
            <GridBox rowGap={20} gridTemplateColumns={"1fr 2fr"} columnGap={50}>
                <FlexBox flexDirection='column' gap={20}>
                    {skillsConfig.map((item) => (
                        <SkillButton selected={selectedSkill.buttonText === item.buttonText} onClick={() => setSelectedSkill(item)}>{item.buttonText}</SkillButton>
                    ))}
                </FlexBox>
                <FlexBox flexDirection='column' alignContent='start' >
                    <ComponentDescription margin={"0 0 30px 0"}>{selectedSkill.description}</ComponentDescription>
                    <FlexBox gap={20} flexWrap='wrap' data-aos="zoom-in-up">
                        {
                            selectedSkill.skills.map(({ icon: Icon, text }) => (<SkillCard>
                                <Icon width={50} height={50} />
                                {text}
                            </SkillCard>))
                        }
                    </FlexBox>
                </FlexBox>
            </GridBox>
        </FlexBox>
    )
}

export default Skills
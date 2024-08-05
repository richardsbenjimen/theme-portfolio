import { ComponentTitle, FlexBox, GridBox, ProjectCard } from './styles'

const projectConfigs = [
    {
        description: "Automation engine generates application flows or user-defined functionalities. It was a challenging project where I worked with great mentors, learning effective design principles and implementing performance improvements in both frontend and backend components.",
        tools: ["Typescript", "Springboot", "Kafka", "Grafana", "MongoDb", "Json validation"],
        company: "Phenom people"
    },
    {
        description: "The Certificate Manager project is a tool for clients to manage their DNS certificates. Users can track certificate expiry, monitor days until expiry, and validate uploaded certificates. This project ensures efficient certificate management and compliance, providing a user-friendly interface for seamless administration.",
        tools: ["Reactjs", "Springboot", "Jest unit testing", "Kafka", "Grafana", "Tekton"],
        company: "Phenom people"
    },
    {
        description: "Apply Config is a project that utilizes JSON schema to provide a user-friendly interface, allowing clients to update their schemas easily. This tool simplifies the process of schema management, ensuring clients can make updates efficiently and accurately, enhancing overall user experience and productivity.",
        tools: ["Reactjs", "Json Schema", "Jest unit testing"],
        company: "Phenom people"
    },
    {
        description: "MyKinderpass is a project offering parenting services where I had the opportunity to focus on SEO optimization and analyze user traffic. This role allowed me to enhance the website's visibility and performance, ensuring a better user experience by understanding and leveraging user engagement patterns.",
        tools: ["Reactjs", "Django", "Amplitude", "Nodejs", "MySql"],
        company: "MyKinderpass"
    },
    {
        description: "The MyKinderpass mobile application, developed on KaiOS by Jio, has surpassed 1 million downloads. I had the opportunity to collaborate with Jio developers, contributing to app development from version upgrades to user traffic analysis, enhancing both functionality and performance.",
        tools: ["Reactjs", "KaiOs", "Amplitude", "Nodejs", "Django", "MySql"],
        company: "MyKinderpass"
    },
    {
        description: "Attainu is a tech education startup where I monitored students' progress with their tech stack and contributed to development. My role involved overseeing their learning journey and participating in various aspects of project development to enhance educational outcomes.",
        tools: ["Reactjs", "NodeJs", "MongoDb"],
        company: "Attainu"
    },

]


const Projects = () => {
    const joinStrings = (strings: string[]) => {
        let length = strings.length
        if (length <= 2) {
            return strings.join(" & ")
        }
        return strings.slice(0, length - 1).join(", ") + " & " + strings[length - 1]
    }
    return (
        <GridBox id="projects" className='component' gridTemplateColumns={"1fr 1fr"} flexDirection='column' margin={"100px 0"} columnGap={20}>
            <FlexBox height={200} position='sticky' top={100} flexDirection='column'>
                <ComponentTitle>Projects</ComponentTitle>
                <ComponentTitle fontSize={30} fontWeight={"var(--font-weight-700)"}>Delivering Innovation and Precision in Every Project</ComponentTitle>
            </FlexBox>
            <FlexBox flexDirection='column' gap={30}>
                {
                    projectConfigs.map(item => (<ProjectCard data-aos="zoom-in-up">
                        <h1>{`‘’${item.description}’’`}</h1>
                        <FlexBox gap={4} flexDirection='column'>
                            <h2>{joinStrings(item.tools)}</h2>
                            <h2>{item.company}</h2>
                        </FlexBox>
                    </ProjectCard>))
                }
            </FlexBox>
        </GridBox>
    )
}

export default Projects
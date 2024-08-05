import { GridBox, WorkCard } from './styles'

const workConfig = [
  {
    company: "Phenom people",
    role: "Full stack developer",
    description: "At Phenom People, I working as a Full stack developer. During my tenure, I developed web applications for different user requirement projects and learned the in-depth capabilities of various tech stacks.",
    delay: 0
  },
  {
    company: "MyKinderpass",
    role: "Full stack developer",
    description: "At MyKinderpass, I worked as a Fullstack developer. During my tenure, I developed web applications and gained experience in analyzing user traffic and implementing SEO strategies.",
    delay: 300
  },
  {
    company: "Attainu",
    role: "Mern stack developer",
    description: "At Attainu, I worked as a MERN stack developer. During my tenure, I developed web applications and gained experience in learning the fundamentals and various tech stacks.",
    delay: 500
  }
]

const Experience = () => {
  return (
    <GridBox gridTemplateColumns={"1fr 1fr 1fr"} margin={"100px 0"} id="experience" height={500} alignContent='center' className='component' backgroundColor='var(--experience-bg)' padding={"0 72px 100px 72px"}>
      {workConfig.map(({ role, company, delay, description }, index) => (
        <WorkCard cardNumber={index + 1} data-aos="fade-right" data-aos-delay={delay} className='card'>
          <h1>{`0${index + 1}`}</h1>
          <h2><strong>{company}</strong>{role}</h2>
          <p>{description}</p>
        </WorkCard>
      ))}
    </GridBox>
  )
}

export default Experience
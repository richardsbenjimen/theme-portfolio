import { createContext, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';
import Experience from './components/Experience';


import AOS from 'aos';
import "aos/dist/aos.css";
import ToastComponent from './components/ToastComponent';
import { Switch } from './components/utils';
import SideModal from './components/SideModal';


type ContextPropType = {
  theme: string,
  setTheme: VoidFunction,
  scrollHandler: (item: string) => void,
  redirect?: (link: string) => void
}

export const ThemeContext = createContext<ContextPropType>({
  theme: "",
  setTheme: () => { },
  scrollHandler: () => { }
})

function App() {
  const navigate = useNavigate()
  const [currentTheme, setCurrentTheme] = useState<string>("dark")
  const [scrollPercent, setScrollPercent] = useState(0)
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    AOS.init({
      disable: "",
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
      mirror: true
    });
    document.documentElement.setAttribute("data-theme", currentTheme)
  }, [])

  const scrollFunction = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    setScrollPercent(scrolled)
  }

  useEffect(() => {
    if (!appRef.current) return
    window.onscroll = scrollFunction
  }, [])

  useEffect(() => {
    if (!appRef.current) return
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navigate(`${entry.target.getAttribute("id")}`, { replace: true })
        }
      });
    }, options);

    const sections = document.querySelectorAll('.component');

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };

  }, []);

  const setTheme = () => {
    setCurrentTheme(p => {
      let theme = p === "dark" ? "light" : "dark"
      document.documentElement.setAttribute("data-theme", theme)
      return theme
    })
    return
  }

  const scrollHandler = (item: string) => {
    let lowerCase = item.toLowerCase()
    let element = document.querySelector(`#${lowerCase}`);
    if (!element) return

    const yOffset = -100; // Offset from the top
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    navigate(`/${lowerCase}`)
  }

  const redirect = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme, scrollHandler, redirect }}>
      <ToastComponent />
      <Header scrollPercent={scrollPercent} />
      <div className="App" ref={appRef}>
        <Welcome />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

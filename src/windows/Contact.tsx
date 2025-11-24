import WindowsControl from "../components/WindowsControl"
import { socials } from "../constants"
import WindowWrapper from "./WindowWrapper"

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowsControl target="contact" />
        <h2>Contact me</h2>
      </div>

      <div className="p-5 space-y-5">
        <h3>Hey, I'm Gorav</h3>
        <p>I am a B.Tech student in Computer Science and Engineering with AIML at Vellore Institute of Technology (GPA: 9.07/10).
          I have professional experience as an intern at Peer Islands, where I worked on a RAG-based Full Stack project and later 
          collaborated on the main production chatbot. I enjoy applying my foundation to build full-stack platforms like the 
          social media app "Flick Spot" and developing complex AI/ML solutions, such as the voice-controlled "Vocal Chess" game and 
          optimized road extraction models.
        </p>

        <ul>
          {socials.map(({ id, text, icon, link, bg }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={text} className="size-5"/>
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')
export default ContactWindow
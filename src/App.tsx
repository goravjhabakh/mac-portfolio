import Dock from "./components/Dock"
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import gsap from "gsap"
import Draggable from "gsap/Draggable"

import Terminal from "./windows/Terminal"
import Resume from "./windows/Resume"
import Finder from "./windows/Finder"
import ImageWindow from "./windows/Image"
import Contact from "./windows/Contact"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Resume />
      <Finder />
      <ImageWindow />
      <Contact />
    </main>
  )
}
export default App
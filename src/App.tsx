import Dock from "./components/Dock"
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import gsap from "gsap"
import Draggable from "gsap/Draggable"
import Terminal from "./windows/Terminal"
import Resume from "./windows/Resume"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Resume />
    </main>
  )
}
export default App
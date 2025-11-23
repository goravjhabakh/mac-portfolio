import WindowsControl from "../components/WindowsControl"
import { skills } from "../constants"
import WindowWrapper from "./WindowWrapper"

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowsControl target="terminal"/>
        <h2>gorav — -zsh — 80x24</h2>
      </div>

      <div className="techstack">
        <p className="mb-2 text-gray-500">Last login: {new Date().toDateString()} on ttys000</p>
        <p>
          <span className="text-[#10b981] font-bold">gorav@macbook-pro</span> <span className="text-blue-500 font-bold">~</span> <span className="text-gray-500">%</span> show skills
        </p>

        <div className="mt-4 space-y-4">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <p className="font-bold text-blue-600 mb-1">➜  {category}</p>
              <div className="grid grid-cols-5 gap-2 ml-4">
                {items.map((item, idx) => (
                  <span key={idx} className="text-gray-700 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-gray-500">
          <p>
            <span className="text-green-500">✔</span> 4 categories loaded.
          </p>
        </div>
        
        <p className="mt-2">
          <span className="text-[#10b981] font-bold">gorav@macbook-pro</span> <span className="text-blue-500 font-bold">~</span> <span className="text-gray-500">%</span> <span className="animate-pulse">_</span>
        </p>
      </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow
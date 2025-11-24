import clsx from "clsx"
import WindowsControl from "../components/WindowsControl"
import { locations } from "../constants"
import useExplorerStore from "../store/explorer"
import WindowWrapper from "./WindowWrapper"
import useWindowStore from "../store/window"

type locationsMap = typeof locations
type explorerItem = locationsMap[keyof locationsMap]
type ProjectFolder = NonNullable<explorerItem['children']>[number]

const Finder = () => {
  const { activeLocation, setActiveLocation } = useExplorerStore()
  const { openWindow } = useWindowStore()

  const openItem = (item: ProjectFolder) => {
    if (item.kind === 'pdf') return openWindow('resume')
    if (item.kind === 'folder') return setActiveLocation(item)
    if (item.kind === 'url') return window.open(item.content)
    if (item.kind === 'img') return openWindow('imgfile', item)
  }

  return (
    <>
      <div id="window-header">
        <WindowsControl target="finder" />
        <img src="/icons/search.svg" alt="search" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favourites</h3>
            <ul>
              {Object.values(locations).map((item) => (
                <li key={item.id} onClick={() => setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? 'active' : 'not-active')}>
                  <img src={item.icon} className="w-4" alt={item.name} />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Highlights</h3>
            <ul>
              {locations.projects.children.map((item) => (
                <li key={item.id} onClick={() => setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? 'active' : 'not-active')}>
                  <img src={item.icon} className="w-4" alt={item.name} />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="content">
          {activeLocation.children.map((item) => (
            <li key={item.id} className={item.position} onClick={() => openItem(item)}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")
export default FinderWindow
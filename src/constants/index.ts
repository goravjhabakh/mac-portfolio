const navLinks = [
  { id: 1, name: 'Resume' },
  { id: 2, name: 'Contact' },
  { id: 3, name: 'Projects' },
]

const navIcons = [
  { id:1, img: '/images/wifi.svg' },
  { id:2, img: '/images/search.svg' },
  { id:3, img: '/images/control-centre.svg' },
  { id:4, img: '/images/profile.svg' },
]

const dockApps = [
  {
    id: 'finder',
    name: 'Resume',
    img: '/images/finder.png',
    canOpen: true
  },
  {
    id: 'safari',
    name: 'Portfolio',
    img: '/images/safari.png',
    canOpen: true
  },
  {
    id: 'photos',
    name: 'Gallery',
    img: '/images/photos.png',
    canOpen: false
  },
  {
    id: 'contacts',
    name: 'Contact',
    img: '/images/contact.png',
    canOpen: true
  },
  {
    id: 'terminal',
    name: 'Skills',
    img: '/images/terminal.png',
    canOpen: false
  },
  {
    id: 'trash',
    name: 'Archive',
    img: '/images/trash.png',
    canOpen: false
  }
]

export { navLinks, navIcons, dockApps }
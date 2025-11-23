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
    name: 'Projects',
    img: '/images/finder.png',
    canOpen: true
  },
  {
    id: 'safari',
    name: 'Articles',
    img: '/images/safari.png',
    canOpen: false
  },
  {
    id: 'photos',
    name: 'Gallery',
    img: '/images/photos.png',
    canOpen: false
  },
  {
    id: 'contact',
    name: 'Contact',
    img: '/images/contact.png',
    canOpen: true
  },
  {
    id: 'terminal',
    name: 'Skills',
    img: '/images/terminal.png',
    canOpen: true
  },
  {
    id: 'trash',
    name: 'Archive',
    img: '/images/trash.png',
    canOpen: false
  }
]

const initialZIndex = 1000

const windowConfig = {
  finder: { isOpen: false, zIndex: initialZIndex, data: null },
  contact: { isOpen: false, zIndex: initialZIndex, data: null },
  safari: { isOpen: false, zIndex: initialZIndex, data: null },
  resume: { isOpen: false, zIndex: initialZIndex, data: null },
  txtfile: { isOpen: false, zIndex: initialZIndex, data: null },
  imgfile: { isOpen: false, zIndex: initialZIndex, data: null },
  terminal: { isOpen: false, zIndex: initialZIndex, data: null }
}

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Express.js', 'TailwindCSS']
  },
  {
    category: 'Cloud and DB',
    items: ['AWS', 'Firebase', 'MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    category: 'ML, Tools and Soft Skills',
    items: ['Pytorch', 'TensorFlow', 'Git', 'Teamwork', 'Communication']
  }
]

export { navLinks, navIcons, dockApps, initialZIndex, windowConfig, skills }
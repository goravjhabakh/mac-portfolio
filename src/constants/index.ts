const navLinks = [
  { id: 1, name: 'Portfolio', type: 'finder' },
  { id: 2, name: 'Contact', type: 'contact' },
  { id: 3, name: 'Resume', type: 'resume' },
]

const navIcons = [
  { id: 1, img: '/images/wifi.svg' },
  { id: 2, img: '/images/search.svg' },
  { id: 3, img: '/images/control-centre.svg' },
  { id: 4, img: '/images/profile.svg' },
]

const dockApps = [
  {
    id: 'finder',
    name: 'Portfolio',
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

const Projects = {
  id: 1,
  type: "projects",
  name: "Projects",
  icon: '/icons/projects.svg',
  kind: 'folder',
  children: [
    {
      id: 5,
      name: 'Flick Spot',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-5',
      content: '',
      children: [
        {
          id: 1,
          name: 'flick-spot-livid.vercel.app',
          icon: '/images/safari.png',
          kind: 'url',
          position: 'top-30 left-5',
          content: 'https://flick-spot-livid.vercel.app/',
          children: []
        },
        {
          id: 2,
          name: 'flick-spot.png',
          icon: '/images/flick-spot.png',
          kind: 'img',
          position: 'top-10 left-50',
          content: '',
          children: []
        }
      ]
    },
    {
      id: 6,
      name: 'Upcoming...',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-52 right-80',
      content: '',
      children: []
    },
    {
      id: 7,
      name: 'Upcoming...',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-80',
      content: '',
      children: []
    }
  ]
}

const Resume = {
  id: 2,
  type: "resume",
  name: "Resume",
  icon: '/icons/resume.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'Resume.pdf',
      icon: '/images/pdf.png',
      kind: 'pdf',
      position: 'top-30 left-20',
      content: '',
      children: []
    }
  ]
}

const Skills = {
  id: 3,
  type: "skills",
  name: "Skills",
  icon: '/icons/skills.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'Python',
      icon: '/skills/python.svg',
      kind: 'icon',
      position: 'top-10 left-115 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 2,
      name: 'C++',
      icon: '/skills/cpp.svg',
      kind: 'icon',
      position: 'top-60 left-5 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 3,
      name: 'Java',
      icon: '/skills/java.svg',
      kind: 'icon',
      position: 'top-2 left-65 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 4,
      name: 'JavaScript',
      icon: '/skills/js.svg',
      kind: 'icon',
      position: 'top-35 left-95 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 5,
      name: 'TypeScript',
      icon: '/skills/ts.svg',
      kind: 'icon',
      position: 'top-70 left-75 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 6,
      name: 'React',
      icon: '/skills/react.svg',
      kind: 'icon',
      position: 'top-5 left-15 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 7,
      name: 'Next.js',
      icon: '/skills/next.svg',
      kind: 'icon',
      position: 'top-45 left-45 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 8,
      name: 'Node.js',
      icon: '/skills/node.svg',
      kind: 'icon',
      position: 'top-68 left-18 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 9,
      name: 'TailwindCSS',
      icon: '/skills/tailwind.svg',
      kind: 'icon',
      position: 'top-15 left-90 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 10,
      name: 'MongoDB',
      icon: '/skills/mongo.svg',
      kind: 'icon',
      position: 'top-25 left-25 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 11,
      name: 'Firebase',
      icon: '/skills/firebase.svg',
      kind: 'icon',
      position: 'top-55 left-105 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 12,
      name: 'AWS',
      icon: '/skills/aws.svg',
      kind: 'icon',
      position: 'top-65 left-35 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 13,
      name: 'Git',
      icon: '/skills/git.svg',
      kind: 'icon',
      position: 'top-40 left-120 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 14,
      name: 'Github',
      icon: '/skills/github.svg',
      kind: 'icon',
      position: 'top-73 left-95 text-xs size-8',
      content: '',
      children: []
    },
    {
      id: 15,
      name: 'SQL',
      icon: '/skills/sql.svg',
      kind: 'icon',
      position: 'top-25 left-55 text-xs size-8',
      content: '',
      children: []
    }
  ]
}

const Trash = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: '/icons/trash.svg',
  kind: 'folder',
  children: []
}

const locations = {
  projects: Projects,
  skills: Skills,
  resume: Resume,
  trash: Trash
}

const socials = [
  {
    id: 1,
    text: 'Github',
    icon: '/icons/github.svg',
    link: 'https://github.com/goravjhabakh',
    bg: '#690ac2'
  },
  {
    id: 2,
    text: 'Linkedin',
    icon: '/icons/linkedin.svg',
    link: 'https://www.linkedin.com/in/gorav-jhabakh-77ba57277/',
    bg: '#1a44c4'
  },
  {
    id: 3,
    text: 'Email',
    icon: '/icons/email.svg',
    link: 'mailto:goravjhabakh@gmail.com',
    bg: '#c4311a'
  },
  {
    id: 4,
    text: 'Phone',
    icon: '/icons/phone.svg',
    link: '+91 9361516186',
    bg: '#1bc449'
  }
]

export { navLinks, navIcons, dockApps, initialZIndex, windowConfig, skills, locations, socials }
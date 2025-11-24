# Mac Portfolio

A personal portfolio website built with React and Vite, designed to mimic the macOS interface. This project features a functional desktop environment with draggable windows, a dock, and various applications to showcase skills and projects.

## 🚀 Features

- **macOS Interface**: Realistic desktop environment with a Dock, Menu Bar, and Window management.
- **Draggable Windows**: Interactive windows that can be dragged, focused, and minimized.
- **Finder**: Browse through projects and skills in a file system-like interface.
- **Terminal**: A terminal-like window displaying technical skills.
- **PDF Viewer**: Integrated PDF viewer for displaying the resume.
- **Image Viewer**: Custom image viewer for project screenshots.
- **Responsive Design**: Optimized for various screen sizes.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) with Immer
- **PDF Rendering**: [React-PDF](https://github.com/wojtekmaj/react-pdf)

## 📦 Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/goravjhabakh/mac-portfolio.git
    cd mac-portfolio
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start the development server**

    ```bash
    npm run dev
    ```

4.  **Build for production**

    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Dock, Navbar, etc.)
├── constants/      # Configuration data (Apps, Skills, File System)
├── store/          # Global state management (Zustand stores)
├── windows/        # Application window components (Finder, Terminal, etc.)
└── App.tsx         # Main application entry point
```

## 🎨 Customization

You can customize the content by modifying the files in `src/constants/index.ts`. This file contains configurations for:

- Dock applications
- Desktop icons
- File system structure (Projects, Resume, Skills)
- Social links

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

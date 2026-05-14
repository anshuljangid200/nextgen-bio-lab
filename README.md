# Micrylis Biotech

Micrylis Biotech is a cutting-edge biotechnology platform designed to showcase advanced research, sustainable solutions, and interactive scientific tools. The application features immersive 3D visualizations, real-time scientific calculators, and a modern, responsive interface.

## 🚀 Features

- **Interactive 3D Visualizations**: High-fidelity 3D DNA models and molecular structures powered by `three.js` and `@react-three/fiber`.
- **Scientific Calculators**: Custom-built tools for biological computations and data analysis.
- **Sustainability Tracking**: Visual dashboards monitoring carbon footprint and environmental impact metrics.
- **Modern UI/UX**: Smooth animations and transitions using `framer-motion`, fully responsive across all devices.
- **Dynamic Content**: Sections for Research & Development, Applications, and Company Overview.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **3D Graphics**: [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: ESLint

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/anshuljangid200/nextgen-bio-lab.git
   cd nextgen-bio-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
nextgen-bio-lab/
├── public/              # Static assets (images, models)
├── src/
│   ├── components/      # Reusable UI components (ThreeScene, etc.)
│   ├── Calculators.tsx  # Scientific calculator logic
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🤝 Contributing

 Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

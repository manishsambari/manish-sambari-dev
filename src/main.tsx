import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ─── console easter egg ──────────────────────────────────────────────
// Hey, devtools snooper. Welcome 👋
// (intentionally not behind any condition — small enough to ship.)
const banner = `
   __  ___          _      __    ____             __                 _
  /  |/  /__ ____  (_)__  / /   / __/__ ___ _    / /  ___ ________ _(_)
 / /|_/ / _ \`/ _ \\/ (_-< / _ \\ _\\ \\/ _ \`/  ' \\  / _ \\/ _ \`/ __/ -_) /
/_/  /_/\\_,_/_//_/_/___//_//_//___/\\_,_/_/_/_/ /_.__/\\_,_/_/  \\__/_/

  Full-Stack Software Engineer · Mumbai, IN

  Looking for someone like me?  sambarimanish@gmail.com
  Want to see the code?         https://github.com/manishsambari
  More on the work:             https://manishsambari.vercel.app
`;

if (typeof window !== "undefined") {
  // Big lime banner + smaller info line, like a CLI MOTD
  console.log(
    "%c" + banner,
    "color:#0a0a0a;background:#FFD93D;font-family:'JetBrains Mono',monospace;font-size:11px;line-height:1.3;padding:8px;",
  );
  console.log(
    "%chey 👋 %cnice to see another curious dev. Built with React + Vite + Tailwind. If you want to chat: sambarimanish@gmail.com",
    "font-size:14px;font-weight:700;color:#FF6BB5;",
    "font-size:12px;color:#0a0a0a;",
  );
}

createRoot(document.getElementById("root")!).render(<App />);

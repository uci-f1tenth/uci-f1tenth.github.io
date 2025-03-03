import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-10 flex flex-col gap-2.5 items-end px-5 md:px-10 py-2.5">
      {/* always visible content */}
      <div className="w-full flex justify-between items-center">
        <img src="/assets/F1TenthUCIlogo.png" alt="logo" className="w-[7.5rem]" />
        <Bars3Icon onClick={ () => { setIsMenuOpen(!isMenuOpen); }} className="w-12 text-white md:hidden" />
        <ul className="flex gap-2 5 items-center p-2 5">
          <li>
            <Link to="/">
              <p className="font-semibold uppercase text-white">HOME</p>
            </Link>
          </li>
          <li>
            <Link to="/robotics">
              <p className="font-semibold uppercase text-white">ROBOTICS</p>
            </Link>
          </li>
          <li>
            <Link to="/ai-rl">
              <p className="font-semibold uppercase text-white">AI/RL</p>
            </Link>
          </li>
          <li>
            <Link to="/mailto:f1tenth@uci.edu">
              <p className="font-semibold uppercase text-white">CONTACT US</p>
            </Link>
          </li>
        </ul>
      </div>
      <AnimatePresence>
        { isMenuOpen && (
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
            className="flex flex-col gap-2.5 items-end p-2.5"
          >
            <li>
              <Link to="/">
                <p className="font-semibold uppercase text-white">HOME</p>
              </Link>
            </li>
            <li>
              <Link to="/robotics">
                <p className="font-semibold uppercase text-white">ROBOTICS</p>
              </Link>
            </li>
            <li>
              <Link to="/ai-rl">
                <p className="font-semibold uppercase text-white">AI/RL</p>
              </Link>
            </li>
            <li>
              <Link to="/mailto:f1tenth@uci.edu">
                <p className="font-semibold uppercase text-white">CONTACT US</p>
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full flex flex-col gap-10 md:gap-5 items-center py-12 bg-neutral-800">
      <h3 className="font-black text-2xl md:text-5xl text-white">JOIN OUR SERVER</h3>
      <Link to="https://discord.gg/KWENJaPCMK">
        <img src="https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg" alt="discord logo" className="w-20 rounded-2xl" />
      </Link>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full font-sans">
      { Header() }
      <main className="absolute top-0 w-full flex flex-col">
        { children }
        { Footer() }
      </main>
    </div>
  );
}
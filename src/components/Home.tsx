import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* landing view */}
      <div className="relative w-full min-h-lvh flex flex-col items-center justify-center bg-[url(/assets/IMG_0145.webp)] bg-center">
        {/* opaque filter */}
        <div className="absolute inset-0 bg-cyan-900 opacity-60" />
        {/* text */}
        <div className="w-full md:w-[40rem] z-10 flex flex-col gap-2.5 items-center px-5 py-2.5">
          <h1 className="font-black italic text-6xl tracking-wider text-right text-white">F1TENTH<br className="md:hidden" />@UCI</h1>
          <p className="w-full font-semibold md:text-center text-white">Building fast, <a href="https://www.youtube.com/watch?v=lbP01VaWrVU">small-scale autonomous racing cars</a> is an exciting challenge that we hope to conquer.</p>
        </div>
      </div>
      {/* about us */}
      <div className="relative w-full overflow-hidden flex flex-col gap-10 justify-center px-5 md:px-48 pt-44 md:pt-32 pb-16 md:pb-32">
        {/* background picture */}
        <img src="/assets/IMG_0322.webp" alt="team" className="absolute -z-10 md:w-full h-full scale-125 md:scale-none overflow-visible object-cover bottom-15 md:bottom-auto left-60 md:left-0" />
        {/* opaque filter */}
        <div className="absolute inset-0 bg-black opacity-70" />
        {/* text */}
        <h2 className="z-10 font-black text-5xl text-white">About Us</h2>
        <p className="z-10 w-full md:w-[26rem] font-semibold md:font-normal text-white">
          F1Tenth is an international community of autonomous systems enthusiasts. 
          We are a student-run club aimed at developing machine learning algorithms 
          and building hardware. Our goal is to learn, innovate, and build these 
          systems together to compete in various races throughout the year.
          <br />
          <br />
          Whether you're a coding genius wonderchild, a hardware nerd, or just 
          curious about autonomous racing, we provide unique opportunities that 
          scratch all itches.
        </p>
      </div>
      {/* fields */}
      <div className="w-full flex flex-col gap-16 md:gap-8 items-center py-16 bg-gray-900">
        <h2 className="font-black text-5xl text-center uppercase text-white">TWO FIELDS <br className="hidden md:block" />ONE GOAL</h2>
        {/* windows */}
        <div className="w-full md:w-[60rem] flex flex-col md:flex-row gap-16 md:justify-between px-20 md:px-0">
          <Link to="/robotics" className="w-full md:w-80 flex flex-col gap-5 items-center">
            <img src="/assets/IMG_0064.webp" alt="car" className="w-full aspect-square object-cover rounded-full" />
            <h3 className="font-extrabold text-4xl text-white uppercase">ROBOTICS</h3>
            <h4 className="p-2.5 font-black text-xl uppercase bg-white text-gray-900">TEAM GOGGINS</h4>
          </Link>
          <Link to="/robotics" className="w-full md:w-80 flex flex-col gap-5 items-center">
            <img src="/assets/IMG_0394.webp" alt="car" className="w-full aspect-square object-cover rounded-full" />
            <h3 className="font-extrabold text-4xl text-white uppercase">AI/RL</h3>
            <h4 className="p-2.5 font-black text-xl uppercase bg-white text-gray-900">TEAM ARNOLD</h4>
          </Link>          
        </div>
      </div>
      {/* gallery */}
      <div className="w-full md:h-[34rem] flex flex-col md:flex-row items-center">
        <img src="/assets/IMG_0382.webp" alt="simulation" className="w-full md:object-cover md:w-1/3 md:h-full" />
        <img src="/assets/2d740d7e110c66f2bda244443d41a0c5.webp" alt="computer surgery" className="w-full md:object-cover md:w-1/3 md:h-full" />
        <img src="/assets/IMG_0061.webp" alt="card" className="w-full md:object-cover md:w-1/3 md:h-full" />
      </div>
      {/* contact */}
      <div className="w-full flex flex-col items-center px-5 py-32 bg-[url(/assets/Screenshot_2025-02-05_at_6.03.01_PM.webp)] bg-cover bg-center">
        <div className="w-full flex flex-col items-center gap-5">
          <h2 className="font-black text-5xl uppercase">INTERESTED?</h2>
          <p className="font-black text-xl text-center">Meetings every Monday & Wednesday 5:00 - 6:00pm, DBH 1423 / ICF 183</p>
          <a href="mailto:f1tenth@uci.edu" className="p-2.5 bg-cyan-300">
            <p className="font-black text-xl uppercase text-white">GET IN CONTACT</p>
          </a>
        </div>
      </div>
    </div>
  )
}
export default function Robotics() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* landing view */}
      <div className="relative w-full min-h-dvh flex flex-col items-center justify-center bg-[url(/assets/IMG_0394.webp)] bg-cover bg-center">
        {/* opaque filter */}
        <div className="absolute inset-0 bg-cyan-900 opacity-60" />
        {/* text */}
        <div className="w-full md:w-[40rem] z-10 flex flex-col gap-2.5 items-center px-5 py-2.5">
          <h1 className="w-full md:w-auto font-black italic text-6xl tracking-wider text-right text-white">AI / RL</h1>
          <p className="w-full font-semibold md:text-center text-white">Building fast, <a href="https://www.youtube.com/watch?v=lbP01VaWrVU">small-scale autonomous racing cars</a> is an exciting challenge that we hope to conquer.</p>
        </div>
      </div>
      {/* model */}
      <div className="relative w-full flex flex-col gap-10 items-center md:items-start px-5 md:px-44 py-24 bg-[url(public/assets/ai-backgrond.webp)] bg-cover">
        {/* opaque filter */}
        <div className="absolute inset-0 bg-black opacity-25 md:opacity-50" />
        <h2 className="z-10 font-bold text-4xl md:text-6xl uppercase text-white">OUR MODEL</h2>
        {/* tools */}
        <div className="w-full z-10 flex flex-col md:flex-row gap-20">
          {/* dreamer v3 */}
          <div className="w-full flex flex-col gap-5 items-center">
            {/* image frame */}
            <div className="w-full h-64 flex overflow-hidden">
              <div className="w-5 h-full bg-yellow-400 shrink-0" />
              <img src="/assets/dreamer.png" alt="dreamer v3" className="w-full object-cover" />
            </div>
            <h3 className="font-bold text-4xl md:text-2xl uppercase text-white">DREAMER V3</h3>
            <ul className="w-full font-semibold list-inside list-disc space-y-3 uppercase text-white">
              <li>WORLD-MODEL-BASED RL</li>
              <li>DREAMS OF FUTURE STATES FOR SMARTER DECISIONS</li>
              <li>PROVEN TRACK RECORD ACROSS VARIOUS GAME TASKS</li>
              <li>IMPROVES SAMPLE EFFICIENCY AND PERFORMANCE</li>
            </ul>
          </div>
          {/* isaac lab */}
          <div className="w-full flex flex-col gap-5 items-center">
            {/* image frame */}
            <div className="w-full h-64 flex overflow-hidden">
              <div className="w-5 h-full bg-yellow-400 shrink-0" />
              <img src="https://developer.download.nvidia.com/images/isaac/lab/groot-practitioner-og-100%.jpg" alt="dreamer v3" className="w-full object-cover" />
            </div>
            <h3 className="font-bold text-4xl md:text-2xl uppercase text-white">ISAAC LAB</h3>
            <ul className="w-full font-semibold list-inside list-disc space-y-3 uppercase text-white">
              <li>HIGH-FIDELITY SIMULATION FOR AUTONOMOUS VEHICLES</li>
              <li>GPU-ACCELERATED TRAINING FOR COMPLEX SCENARIOS</li>
              <li>PHYSICS-BASED REINFORCEMENT LEARNING IN SIMULATION</li>
              <li>MULTI-AGENT AND SENSOR NOISE</li>
            </ul>
          </div>
          {/* ros 2 */}
          <div className="w-full flex flex-col gap-5 items-center">
            {/* image frame */}
            <div className="w-full h-64 flex overflow-hidden">
              <div className="w-5 h-full bg-yellow-400 shrink-0" />
              <img src="/assets/ros3.png" alt="dreamer v3" className="right-0 w-full object-cover" />
            </div>
            <h3 className="font-bold text-4xl md:text-2xl uppercase text-white">ROS 2</h3>
            <ul className="w-full font-semibold list-inside list-disc space-y-3 uppercase text-white">
              <li>REAL-TIME COMMUNICATION BETWEEN SYSTEM COMPONENTS</li>
              <li>MODULAR FRAMEWORK FOR SCALABLE DEVELOPMENT</li>
              <li>INTEGRATES SENSORS, CONTROL, AND ACTUATORS</li>
              <li>SUPPORTS INDUSTRY-STANDARD ROBOTICS AND VEHICLE TOOLS</li>
            </ul>
          </div>
        </div>
      </div>
      {/* timeline */}
      <div className="w-full flex flex-col gap-10 bg-sky-700 py-20">
        <div className="hidden w-full px-40">
          <h2 className="font-semibold text-5xl uppercase text-white">CURRENT TIMELINE</h2>
        </div>
        {/* rows */}
        <div className="w-full flex gap-5">
          {/* top checkpoints */}
          <div className="hidden"></div>
          
        </div>
      </div>
    </div>
  );
}
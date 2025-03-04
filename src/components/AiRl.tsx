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
      <div className="w-full flex flex-col gap-10 bg-sky-700 md:py-20">
        <div className="hidden md:block w-full px-40">
          <h2 className="font-semibold text-5xl uppercase text-white">CURRENT TIMELINE</h2>
        </div>
        {/* rows */}
        <div className="w-full flex md:flex-col gap-5">
          {/* top checkpoints */}
          <div className="hidden md:flex gap-60 px-40">
            {/* fall */}
            <div className="w-60 flex flex-col gap-2.5">
              <h3 className="font-semibold text-3xl text-center text-white">Fall</h3>
              <p className="text-center text-white">
                Workshopping standard racing simulations
                <br />
                Workshopping traditional self-driving algorithms
              </p>
            </div>
            {/* spring */}
            <div className="w-60 flex flex-col gap-2.5">
              <h3 className="font-semibold text-3xl text-center text-white">Spring</h3>
              <p className="text-center text-white">
                Train the driving algorithm
                <br />
                Test the vehicle's performance
                <br />
                Adapt Sim2Real
              </p>
            </div>
          </div>
          {/* track */}
          <div className="w-32 md:w-full h-[64rem] md:h-36 flex justify-center md:justify-start md:items-center pt-[24rem] md:pt-0 md:pl-[29rem] bg-[url(/assets/track-vertical.png)] md:bg-[url(/assets/track-horizontal.png)] bg-cover bg-center">
            <img src="/assets/car.png" alt="car" className="md:-rotate-90 w-16 h-min" />
          </div>
          {/* bottom checkpoints */}
          <div className="flex flex-col md:flex-row md:gap-60 justify-between md:justify-start pt-14 md:pt-0 md:pl-96 pb-20 md:pb-0">
            <h2 className="md:hidden w-full font-semibold text-4xl uppercase text-white">CURRENT TIMELINE</h2>
            {/* fall */}
            <div className="md:hidden w-full flex flex-col gap-2.5">
              <h3 className="font-semibold text-3xl text-white">Fall</h3>
              <p className="text-white">
                Workshopping standard racing simulations
                <br />
                Workshopping traditional self-driving algorithms
              </p>
            </div>
            {/* winter */}
            <div className="w-full md:w-60 flex flex-col gap-2.5">
              <h3 className="font-semibold text-3xl md:text-center text-white">Winter</h3>
              <p className="md:text-center text-white">
                Exploring training options
                <br />
                Setting up training environments
                <br />
                Implementing RL engine
              </p>
            </div>
            {/* spring */}
            <div className="md:hidden w-full flex flex-col gap-2.5">
              <h3 className="font-semibold text-3xl text-white">Spring</h3>
              <p className="text-white">
                Train the driving algorithm
                <br />
                Test the vehicle's performance
                <br />
                Adapt Sim2Real
              </p>
            </div>
            {/* summer */}
            <div className="w-full md:w-60 flex flex-col gap-2.5">
              <h3 className="font-semibold text-3xl text-center text-white">Summer</h3>
              <p className="text-center text-white">Race!</p>
            </div>
          </div>
        </div>
      </div>
      {/* repository */}
      <div className="w-full flex flex-col md:flex-row gap-10 md:items-start md:gap-24 px-5 md:px-52 py-20 bg-[url(/assets/github-background-rotated.png)] md:bg-[url(/assets/github-background.png)] bg-cover">
        <img src="/assets/github-logo.png" alt="github-logo" className="w-24 md:w-36 md:object-contain" />
        {/* text */}
        <div className="w-full md:w-[32rem] flex flex-col gap-7">
          <h2 className="w-full font-black text-5xl text-white">OUR REPOSITORY</h2>
          <hr className="w-16 h-1 bg-white" />
          <p className="font-semibold text-white">
            We wish to share our code and tools as an open-source project, 
            for the sake of facilitating ongoing research on autonomous 
            racing and other branches of RL research. Our objective is to 
            allow other researchers and developers to utilize our tool and 
            build upon our project, encouraging collaborations and 
            innovation within the field.
          </p>
          <a href="https://github.com/uci-f1tenth/uci_f1tenth_workshop" className="w-fit rounded-full px-5 py-2.5 bg-white">
            <h3 className="font-semibold text-xl ">CHECK OUR CODE</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
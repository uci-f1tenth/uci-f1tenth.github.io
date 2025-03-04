export default function Robotics() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* landing view */}
      <div className="relative w-full min-h-dvh flex flex-col items-center justify-center bg-[url(/assets/IMG_0064.webp)] bg-cover bg-center">
        {/* opaque filter */}
        <div className="absolute inset-0 bg-cyan-900 opacity-60" />
        {/* text */}
        <div className="w-full md:w-[40rem] z-10 flex flex-col gap-2.5 items-center px-5 py-2.5">
          <h1 className="font-black italic text-6xl tracking-wider text-right text-white">ROBOTICS</h1>
          <p className="w-full font-semibold md:text-center text-white">Building fast, <a href="https://www.youtube.com/watch?v=lbP01VaWrVU">small-scale autonomous racing cars</a> is an exciting challenge that we hope to conquer.</p>
        </div>
      </div>
      {/* vehicle */}
      <div className="w-full flex gap-10 md:gap-28 items-center justify-center pr-5 py-24 bg-cyan-950">
        <img src="https://roboracer.ai/landing/car-inside.png" alt="car" className="w-24 md:w-auto h-[25rem] object-cover object-right" />
        {/* text */}
        <div className="w-full md:w-auto flex flex-col gap-10">
          <h2 className="font-black text-5xl text-white"><span className="text-3xl md:text-5xl">The </span><br className="md:hidden" />Vehicle</h2>
          <p className="w-full md:w-[26rem] text-white">
            Following the standard vehicle model provided by RoboRacer (formerly F1TENTH), 
            our club has built our machine on top of a 
            <a href="https://traxxas.com/products/models/electric/6804Rslash4x4platinum">Traxxas Slash 4x4 Premium</a> 
            chassis. This build provides a sturdy structure for which to transport our 
            electronics at speeds of up to 60 mph.
            <br />
            <br />
            Over the Fall 2024 term, our team has designed and assembled the vehicle 
            adding crucial components for its self-driving algorithm, including a LiDAR 
            sensor, a camera, and 
            <a href="https://traxxas.com/products/models/electric/6804Rslash4x4platinum">NVIDIA Jetson Xavier NX</a> 
            for the sim2real implementation of our driving algorithm. 
          </p>
        </div>
      </div>
    </div>
  );
}
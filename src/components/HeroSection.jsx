import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
  Transforming Women's Health
  <span className="bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text">
    {" "}
    with SoinHealth
  </span>
</h1>
<p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
  Empower women across the globe with access to vital health education, 
  community support, and tokenized incentives. Take control of your health journey today, 
  and become part of a community that promotes wellness, advocacy, and empowerment.
</p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-pink-500 to-purple-800 py-3 px-5 mx-5 rounded-md"
        >
          Get Started
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border bg-gradient-to-r from-pink-500 to-purple-800 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border bg-gradient-to-r from-pink-500 to-purple-800 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;

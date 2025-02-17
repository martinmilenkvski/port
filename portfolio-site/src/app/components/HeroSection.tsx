interface HeroProps

{name: string

}

const HeroSection: React.FC<HeroProps> = ({ name }) => {
  return (
    <div className=" justify-center items-center">
      <h1 className="m-0 leading-none text-[320px] align-center">{name}</h1>

      <video
        src="https://videos.pexels.com/video-files/6986423/6986423-uhd_2732_1440_25fps.mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}

export default HeroSection
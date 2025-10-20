import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const AboutSimple = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-0 md:pt-20 md:pb-0 lg:pt-20 lg:pb-0"
      id="about-simple"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "ABOUT ME !"
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px]">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:text-[24px]">
            <AnimatedBody
              text={
                "Hello there! I'm Kamal, born and raised in Taroudant, a warm and historic city in the south of Morocco where tradition meets simplicity. Growing up surrounded by creativity and curiosity, I discovered my deep passion for technology at the age of fifteen."
              }
            />
            <AnimatedBody
              text={
                "I was fascinated by how computers worked, how websites came to life, and what really happens behind the scenes of the digital world. That curiosity soon turned into a calling, leading me to study web development and explore the endless possibilities of digital innovation."
              }
            />
            <AnimatedBody
              text={
                "Today, I find joy in crafting interactive, responsive, and visually engaging web experiences, blending art and engineering to create something meaningful. I love experimenting with animations, UI/UX design, full-stack projects, and AI-driven features, always chasing that perfect balance between creativity and functionality."
              }
            />
            <AnimatedBody
              text={
                "Outside the screen, I'm someone who finds inspiration in music, hiking, and entrepreneurship. I also enjoy swimming and home decoration, both reminding me that design, whether digital or physical, is all about harmony and emotion."
              }
            />
            <AnimatedBody
              text={
                "For me, web development is more than just writing code; "
              }
            />
            <AnimatedBody
              text={
                '"it\'s about building experiences that inspire, connect, and make people\'s lives better."'
              }
              className="text-[#FFD700] font-semibold text-center sm:text-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimple;

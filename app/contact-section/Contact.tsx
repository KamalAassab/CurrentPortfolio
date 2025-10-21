import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 pb-0 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords2
            title={"Let's Talk"}
            style={
              "flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[390px]"
            }
          />
          <Image
            src={heartIcon}
            alt="Heart Icon"
            className="heartbeat md:-bottom-18 absolute -bottom-5 left-64 w-[120px] sm:-bottom-14 sm:left-[40%] md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px]"
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-start justify-between gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className=" flex w-[350px] max-w-[90%] flex-col items-start text-left text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Got a question, proposal, project, or want to work together on something?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <div className="bor der mt-5 flex items-center">
              <Link
                href="mailto:kamalaassab2002@gmail.com?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20project...%20Reach%20out%20as%20soon%20as%20you%20can."
                target="_blank"
                aria-label="Send me an email"
                className="bor der mt-1 inline-block underline underline-offset-2 hover:no-underline sm:mt-2 md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text={"Send me an email"}
                  className={"bor der"}
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-4 text-[16px] font-bold text-[#e4ded7] sm:gap-6 sm:text-[24px] md:gap-4 md:text-[16px] lg:gap-8 lg:text-[28px] self-end">
            <Link
              href="https://github.com/KamalAassab"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-[#e4ded7] text-[24px] sm:text-[28px] md:text-[24px] lg:text-[36px] hover:text-white transition-colors"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kamalaassab"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[#e4ded7] text-[24px] sm:text-[28px] md:text-[24px] lg:text-[36px] hover:text-white transition-colors"
              />
            </Link>
            <Link
              href="https://www.instagram.com/its.urky"
              target="_blank"
              aria-label="View Instagram Profile"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#e4ded7] text-[24px] sm:text-[28px] md:text-[24px] lg:text-[36px] hover:text-white transition-colors"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

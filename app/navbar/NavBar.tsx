"use client";
import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 my-0  mx-auto  hidden w-[350px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:flex sm:w-[420px] md:p-2 lg:w-[440px]">
      <Link
        href="https://drive.google.com/drive/folders/14m2XX7MQtenDJq2tFStWcNdfzGkaTJ7-?usp=sharing"
        target="_blank"
        className="flex"
        aria-label="Open my resume"
        data-blobity-tooltip="View Resume"
        data-blobity-magnetic="false"
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          className="py-2 px-2 text-[16px] sm:px-4 md:py-1"
        />
      </Link>

      <Link
        href="#home"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Home Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-3 text-[12px] sm:text-[14px] md:py-1 md:px-3">
          Home
        </h4>
      </Link>
      <Link
        href="#about-simple"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to About Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-3 text-[12px] sm:text-[14px] md:py-1 md:px-3">
          About
        </h4>
      </Link>

      <Link
        href="#work"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Projects Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-3 text-[12px] sm:text-[14px] md:py-1 md:px-3">
          Projects
        </h4>
      </Link>

      <Link
        href="#about"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Skills Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-3 text-[12px] sm:text-[14px] md:py-1 md:px-3">
          Skills
        </h4>
      </Link>

      <Link
        href="#contact"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Contact Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-3 text-[12px] sm:text-[14px] md:py-1 md:px-3">
          Contact
        </h4>
      </Link>
    </nav>
  );
};

export default NavBar;

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { monaSans } from "../fonts/monaSans";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "HOME", number: "01" },
    { id: "about-simple", label: "ABOUT", number: "02" },
    { id: "work", label: "PROJECTS", number: "03" },
    { id: "about", label: "SKILLS", number: "04" },
    { id: "contact", label: "CONTACT", number: "05" },
  ];

  const handleScroll = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about-simple", "work", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className={`fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0E1016] text-[#e4ded7] font-bold shadow-lg sm:hidden ${monaSans.className}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `
            linear-gradient(135deg, #0E1016 0%, #1a1a1a 100%),
            radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%, 200px 200px, 200px 200px',
          backgroundPosition: '0 0, 0 0, 100% 100%'
        }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[24px] font-bold"
        >
          +
        </motion.span>
      </motion.button>

      {/* Mobile Side Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with grid pattern */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                background: `
                  linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(14,16,22,0.9) 100%),
                  radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)
                `,
                backgroundSize: '100% 100%, 300px 300px, 300px 300px',
                backgroundPosition: '0 0, 0 0, 100% 100%'
              }}
            />

            {/* Side Navigation Panel */}
            <motion.nav
              className="fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-white shadow-2xl sm:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                 <motion.button
                   className={`text-black font-bold text-[24px] ${monaSans.className}`}
                   onClick={() => setIsOpen(false)}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   Close ✕
                 </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-1 flex-col justify-center px-8 space-y-8">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    className={`relative flex items-center justify-between py-4 text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? "text-[#6366f1]"
                        : "text-black hover:text-[#6366f1]"
                    }`}
                    onClick={() => handleScroll(section.id)}
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`flex items-center gap-3 ${monaSans.className}`}>
                      <span className="text-[48px] font-bold leading-tight">
                        {section.label}
                      </span>
                       <span className={`text-[24px] font-medium ${
                         activeSection === section.id
                           ? "text-[#6366f1]"
                           : "text-gray-500"
                       }`}>
                         {section.number}
                       </span>
                    </div>
                    
                     {/* Active indicator - now using border-left instead */}
                     {activeSection === section.id && (
                       <motion.div
                         className="absolute -left-6 top-1/2 h-12 w-2 -translate-y-1/2 rounded-full bg-[#6366f1]"
                         layoutId="activeIndicator"
                         transition={{ type: "spring", damping: 25, stiffness: 200 }}
                       />
                     )}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

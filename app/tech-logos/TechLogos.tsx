import React from 'react';
import { LogoLoop } from '../components/LogoLoop';
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiPhp, 
  SiMysql, 
  SiNodedotjs, 
  SiGithub, 
  SiGit, 
  SiFigma, 
  SiFramer, 
  SiBootstrap, 
  SiNextdotjs, 
  SiPostman, 
  SiCanva, 
  SiIntellijidea,
  SiClaude,
  SiShadcnui
} from 'react-icons/si';
import { FaLinux } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import Image from 'next/image';

const TechLogos = () => {
  const techLogos = [
    { 
      node: React.createElement(SiReact as any, { className: "text-white text-6xl" }), 
      title: "React", 
      href: "https://react.dev" 
    },
    { 
      node: React.createElement(SiTypescript as any, { className: "text-white text-6xl" }), 
      title: "TypeScript", 
      href: "https://www.typescriptlang.org" 
    },
    { 
      node: React.createElement(SiShadcnui as any, { className: "text-white text-6xl" }), 
      title: "Shadcn UI", 
      href: "https://ui.shadcn.com" 
    },
    { 
      node: React.createElement(SiTailwindcss as any, { className: "text-white text-6xl" }), 
      title: "Tailwind CSS", 
      href: "https://tailwindcss.com" 
    },
    { 
      node: React.createElement(SiJavascript as any, { className: "text-white text-6xl" }), 
      title: "JavaScript", 
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
    },
    { 
      node: React.createElement(SiHtml5 as any, { className: "text-white text-6xl" }), 
      title: "HTML5", 
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML" 
    },
    { 
      node: React.createElement(SiCss3 as any, { className: "text-white text-6xl" }), 
      title: "CSS3", 
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS" 
    },
    { 
      node: React.createElement(SiPhp as any, { className: "text-white text-6xl" }), 
      title: "PHP", 
      href: "https://www.php.net" 
    },
    { 
      node: React.createElement(SiMysql as any, { className: "text-white text-6xl" }), 
      title: "MySQL", 
      href: "https://www.mysql.com" 
    },
    { 
      node: React.createElement(SiNodedotjs as any, { className: "text-white text-6xl" }), 
      title: "Node.js", 
      href: "https://nodejs.org" 
    },
    { 
      node: React.createElement(SiGithub as any, { className: "text-white text-6xl" }), 
      title: "GitHub", 
      href: "https://github.com" 
    },
    { 
      node: React.createElement(SiGit as any, { className: "text-white text-6xl" }), 
      title: "Git", 
      href: "https://git-scm.com" 
    },
    { 
      node: React.createElement(VscVscode as any, { className: "text-white text-6xl" }), 
      title: "VS Code", 
      href: "https://code.visualstudio.com" 
    },
    { 
      node: React.createElement(Image, { 
        src: "/cursor.png", 
        alt: "Cursor", 
        width: 64, 
        height: 64, 
        className: "text-white" 
      }), 
      title: "Cursor", 
      href: "https://cursor.sh" 
    },
    { 
      node: React.createElement(SiClaude as any, { className: "text-white text-6xl" }), 
      title: "Claude", 
      href: "https://claude.ai" 
    },
    { 
      node: React.createElement(SiFigma as any, { className: "text-white text-6xl" }), 
      title: "Figma", 
      href: "https://www.figma.com" 
    },
    { 
      node: React.createElement(SiFramer as any, { className: "text-white text-6xl" }), 
      title: "Framer Motion", 
      href: "https://www.framer.com/motion" 
    },
    { 
      node: React.createElement(SiBootstrap as any, { className: "text-white text-6xl" }), 
      title: "Bootstrap", 
      href: "https://getbootstrap.com" 
    },
    { 
      node: React.createElement(SiNextdotjs as any, { className: "text-white text-6xl" }), 
      title: "Next.js", 
      href: "https://nextjs.org" 
    },
    { 
      node: React.createElement(SiPostman as any, { className: "text-white text-6xl" }), 
      title: "Postman API", 
      href: "https://www.postman.com" 
    },
    { 
      node: React.createElement(SiCanva as any, { className: "text-white text-6xl" }), 
      title: "Canva", 
      href: "https://www.canva.com" 
    },
    { 
      node: React.createElement(FaJava as any, { className: "text-white text-6xl" }), 
      title: "Java", 
      href: "https://www.java.com" 
    },
    { 
      node: React.createElement(SiIntellijidea as any, { className: "text-white text-6xl" }), 
      title: "IntelliJ IDE", 
      href: "https://www.jetbrains.com/idea" 
    },
    { 
      node: React.createElement(FaLinux as any, { className: "text-white text-6xl" }), 
      title: "Linux", 
      href: "https://www.linux.org" 
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0E1016] py-0 md:py-16">
      <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={72}
          gap={60}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0E1016"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default TechLogos;
"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFileExcel,
} from "react-icons/fa";
import { DiAws, DiPython, DiDocker } from "react-icons/di";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about
const about = {
  title: "About Me",
  description:
    "Even though I showcase my technical skills, my most valuable skill is my curiosity with the second being patience. Combining these two skills, I have been able to learn and adapt to any new challenge, which eventually brought you the skills highlighted on this page. Proudly born in Făgăraș, raised in Sibiu and Cluj-Napoca, lived in Munich and Montreal, this background helped me develop a global perspective that enhances my adaptability and problem-solving in diverse, fast-paced environments.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Comaniciu Nicolae",
    },
    {
      fieldName: "Experience ",
      fieldValue: "5+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Romanian",
    },
    {
      fieldName: "Email",
      fieldValue: "nico@comanico.biz",
    },
    {
      fieldName: "Freelance",
      fieldValue: "available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Romanian, English, German, French",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "With a background in electrical engineering, I bring a strong foundation in networking and a proven ability to tackle complex technical and financial challenges. My experience spans startups to top-tier firms like Morgan Stanley, where I delivered solutions ranging from optimized Excel-based financial models to scalable, containerized applications using modern DevOps practices. My diverse skill set and adaptability enable me to drive impactful results in dynamic, high-stakes environments.",
  items: [
    {
      company: "Future Workforce",
      position: "RPA Business Analyst",
      duration: "Summer 2018",
    },
    {
      company: "Saico General Cables",
      position: "Infratructure Engineer",
      duration: "Summer 2019",
    },
    {
      company: "mthree",
      position: "Production Support Analyst",
      duration: "2020 - 2022",
    },
    {
      company: "Morgan Stanley",
      position: "Reliability Production Engineer",
      duration: "2022 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Curiosity pushed me to explore various fields, from electrical engineering to international banking and finance. This diverse educational background has equipped me with a unique perspective and a versatile skill set that I apply to my work in web development and cloud computing.",
  items: [
    {
      institution: "Technical University of Cluj-Napoca",
      degree: "Bachelor in Electrical Engineering",
      duration: "2015 - 2019",
    },
    {
      institution: "Robert Kennedy College",
      degree: "Masters in International Banking and Finance",
      duration: "2023 - Present",
    },
    {
      institution: "Amazon Web Services",
      degree: "Certified Cloud Practitioner",
      duration: "2022",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I am a versatile engineer with a strong foundation in modern web development and data technologies. Proficient in HTML, CSS, and JavaScript, I build dynamic and responsive user interfaces using React and Next.js, enhanced by Tailwind CSS for efficient styling. On the backend, I leverage Node.js for scalable server-side solutions and deploy applications using AWS for cloud infrastructure and Docker for containerization. I also have expertise in Python for scripting and data processing, alongside advanced proficiency in KDB for high-performance data analytics. Additionally, I am skilled in Excel for data analysis and visualization, enabling me to deliver comprehensive, end-to-end solutions across web development, cloud deployment, and data management.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <DiAws />,
      name: "AWS",
    },
    {
      icon: <DiPython />,
      name: "Python",
    },
    {
      icon: <DiDocker />,
      name: "Docker",
    },
    {
      icon: <FaFileExcel />,
      name: "Excel",
    },
    {
      icon: <img src="/assets/kdb-bw.png" alt="KDB Logo" style={{ width: "1em", height: "1em" }} />, // Adjust size to match other icons
      name: "KDB",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3>{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3>{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-8">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillsList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                <div className="text-6xl group:hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w[600] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

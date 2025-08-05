"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using modern technologies. You describe your idea and it will be brought to life by starting with the design of your logo, website and eventually your desired product.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Cloud Architecture",
    description:
      "Designing and implementing scalable cloud solutions for businesses. From infrastructure setup to deployment, you are ensured that your applications runs smoothly in the cloud at a low cost.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Digital Marketing",
    description:
      "Strategizing from beginnig of a brand to getting a customer profile and eventually selling your product.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Video / Photo Editing",
    description:
      "Creating stunning visual content for your brand. Finding the right angle to capture the story of your brand and product.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-ful"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

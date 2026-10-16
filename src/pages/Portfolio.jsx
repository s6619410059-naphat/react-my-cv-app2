import NavBar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";


 import bikes from "../assets/img2.png";
 import learnify from "../assets/img3.png";
 import animex from "../assets/img4.png";
 import techz from "../assets/img5.png";

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione!";


const projects = [
  {
    title: "Bikes and Beards",
     image: bikes,
    demo: "#", 
    git: "#", 
  },
  {
    title: "Learnify",
     image: learnify,
    demo: "#",
    git: "#",
  },
  {
    title: "Anime-X",
     image: animex,
    demo: "#",
    git: "#",
  },
  {
    title: "Tech-Z",
     image: techz,
    demo: "#",
    git: "#",
  },
];

export default function Portfolio() {
  return (
    <>
      
      <NavBar pname='portfolio' ColorLinkNavbar="text-[#FFF714]" />

      
      <div className="flex justify-center pt-20">
        <span className="text-white text-5xl font-bold font-['Lora',serif]">Portfolio</span>
      </div>

      
      <div className="flex flex-col gap-10 pt-16 pb-20 px-50">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex items-center justify-between gap-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            
            <div className="w-[500px] h-[350px] shrink-0 rounded-2xl overflow-hidden bg-neutral-800">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full"
                />
              )}
            </div>

           
            <div className="flex flex-col items-center gap-4 max-w-[430px]">
              <span className="text-white text-3xl font-bold font-['Lora',serif]">
                {project.title}
              </span>
              <span className="text-gray-300 text-base leading-relaxed text-left">
                {description}
              </span>

              
              <div className="flex items-center justify-center gap-8">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="_blank"
                  className="text-white border border-white rounded-full px-8 py-1 hover:bg-white hover:text-[#FFF714] transition-colors"
                >
                  View
                </a>
                <a
                  href={project.git}
                  target="_blank"
                  rel="_blank"
                  className="flex items-center gap-2 text-white"
                >
                  <FaGithub className="text-3xl" />
                  <span>Git code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
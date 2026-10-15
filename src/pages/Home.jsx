import Navber from "./../components/Navbar";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import css from "./../assets/css.png";
import html from "./../assets/html.png";
import java from "./../assets/java.png";
import figma from "./../assets/figma.png";
import spring from "./../assets/spring.png";
import node from "./../assets/node.png";
import Firebase from "./../assets/Firebase.png";
import react from "./../assets/react.png";
import chiikawa from "./../assets/chiikawa3.png";

export default function Home() {
  return (
    <>
      {/* ส่วนของ Navbar */}
      <Navber pname="home" ColorLinkNavbar="text-[#FFF714]" />

      {/* hero section */}
      <div className="flex items-center justify-between pt-30 pl-80 pr-80">
        {/* รายละเอียดด้านซ้าย */}
        <div className="flex flex-col gap-2">
          <span className="text-white">Full Stack Web Developer</span>
          <span className="text-white">Developer</span>
          <span className="text-white">
            Hi, I’m NinniN SAU. A passionate Full Stack
          </span>
          <span className="text-white">Web Developer based in Thailand.</span>
          <div className="flex gap-3 pt-3">
            <FaLinkedinIn className="text-white" />
            <FaGithub className="text-white" />
          </div>
        </div>
        {/* รูปด้านขวา */}
        <div>
          <img
            src={chiikawa}
            alt=""
            className="w-[450px] h-[450px] rounded-full object-cover"
          />
        </div>
      </div>
      {/* ส่วนของข้อความ tech stack */}
      <div className="flex justify-center pt-20">
        <p className="text-white text-2xl font-bold"> My Tech Stack</p>
      </div>

      {/* ส่วนของรูปภาพtech stack */}
      <div className="flex justify-center gap-10 pt-10">
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS" />
        <img src={node} alt="Node.js" />
        <img src={react} alt="React" />
        <img src={spring} alt="Spring" />
        <img src={java} alt="Java" />
        <img src={figma} alt="Figma" />
        <img src={Firebase} alt="Firebase" />
      </div>
    </>
  );
}
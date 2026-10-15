import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin} from "react-icons/fa";

export default function Home() {
  return (
    <div>
        <Navbar pname="home" ColorLinkNavbar="text-[#FFF714]" />

        {/* hero section */}
        <div className="">
            {/* about hero */}
            <div>
                <span className="text-white">Full Stack Web</span>
                <span className="text-white"> Developer!</span>
                <span className="text-white">Hi! I'm NinniN SAU. A passionate full stack</span>
                <span className="text-white">web developer based in Thailand.</span>
                <div>
                    <FaLinkedin className="text-white" />
                    <FaGithub className="text-white" />
                </div>
            </div>

            {/* hero pic*/}
            <div>

            </div>
        </div>


    </div>
  );
}

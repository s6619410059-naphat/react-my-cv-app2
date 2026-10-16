import NavBar from "../components/Navbar";
import aboutShape from "../assets/img1.png";

export default function About() {
  return (
    <>
      {/* ส่วนของ NavBar  */}
      <NavBar pname='about' ColorLinkNavbar="text-[#FFF714]" />

      {/* ส่วนของ About Section */}
      <div className="flex justify-center items-center pt-40 pb-20 gap-40 pl-20 pr-80">
        {/* รายละเอียดด้านซ้าย */}
        <div className="flex flex-col items-center gap-12 w-1/2 pl-10">
          <span className="text-white text-5xl font-bold font-['Lora',serif]">
            About Me
          </span>

          {/* รูปกราฟิก */}
          <div className="w-[180px] h-[180px]">
            <img
              src={aboutShape}
              alt="About shape"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* รายละเอียดด้านขวา */}
        <div className="flex flex-col gap-5 w-1/2 max-w-[420px] text-left">
          <span className="text-white text-2xl font-bold font-['Lora',serif]">
            Hi, I’m Naphat SAU. A passionate Full Stack Web Developer based in Thailand.
          </span>
          <span className="text-gray-400 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore
            unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum,
            ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi
            repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora
            voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt
            asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio
            asperiores ratione! Accusantium placeat dolorem minus eos excepturi modi.
          </span>
        </div>
      </div>

      {/* ปุ่ม Download CV */}
      <div className="flex justify-center pt-10 pb-12">
        
        <a
          href="/cv.pdf"
          download
          className="text-white text-xl border border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors"
        >
          Download CV
        </a>
      </div>
    </>
  );
}
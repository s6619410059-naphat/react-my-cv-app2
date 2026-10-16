import NavBar from "../components/Navbar";

import iconEmail from "../assets/c1.png";
import iconLocation from "../assets/c2.png";
import iconLinkedin from "../assets/c3.png";

export default function Contact() {
  return (
    <>
      {/* ส่วนของ NavBar  */}
      <NavBar pname='contact' ColorLinkNavbar="text-[#FF0000] border-2 border-white px-3 py-1 rounded-2xl" />

      {/* ส่วนของหัวข้อ */}
      <div className="flex flex-col items-center gap-6 pt-50">
        <span className="text-white text-5xl font-bold font-['Lora',serif]">Let’s talk</span>
        <span className="text-gray-300 text-xl font-semibold text-center pt-10">
          Don't be a stranger! Say hello and let's collaborate
        </span>
      </div>

      {/* ส่วนของข้อมูลติดต่อ 3 คอลัมน์ */}
      <div className="grid grid-cols-3 items-start px-10 pt-24 pb-16">
        {/* อีเมล */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <img src={iconEmail} alt="Email" className="w-full h-full " />
          </div>
          <span className="text-gray-200 text-lg font-semibold">s6619410059@sau.ac.th</span>
        </div>

        {/* ที่อยู่ */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <img src={iconLocation} alt="Location" className="w-full h-full " />
          </div>
          <span className="text-gray-200 text-lg font-semibold">Thailand, Bangkok</span>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <img src={iconLinkedin} alt="LinkedIn" className="w-full h-full" />
          </div>
          <span className="text-gray-200 text-lg font-semibold">Naphat Kanhachai</span>
        </div>
      </div>
    </>
  );
}
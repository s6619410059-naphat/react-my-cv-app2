
export default function Navbar({pname ,ColorLinkNavbar}) {
  return (
    <div>
      {/* Menu */}
      <div className="w-full flex items-center justify-between px-10 pt-5">
        {/* logo */}
        <div className="">
          <span className="text-[#00ff90] text-3xl font-bold">{">_"}</span>
          <span className="text-white text-3xl font-bold">NinniN SAU</span>
        </div>

        <div className="flex gap-5 items-center">
            <a href="/" className={pname == "home" ? ColorLinkNavbar : "text-white"}>Home</a>
            <a href="/about" className={pname == "about" ? ColorLinkNavbar : "text-white"}>About</a>
            <a href="/contact" className={pname == "contact" ? ColorLinkNavbar : "text-white"}>Contact</a>
            <a href="/portfolio" className={pname == "portfolio" ? ColorLinkNavbar : "text-white border-2 border-white px-3 py-1 rounded-2xl"}>Let's talk</a>
        </div>
      </div>
    </div>
  )
}

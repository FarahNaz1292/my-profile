import Link from "next/link";

const Header = ({ dark }) => {
  return (
    <div className="orido_tm_header fixed top-0 left-0 right-0 z-[10] py-[25px] px-[150px] transition-all duration-300 middle:hidden">
      <div className="flex items-center justify-between w-full header_in">
        <div className="logo">
          <p className="text-2xl font-extrabold">farahn1298@gamil.com</p>
        </div>
        <div className="relative menu">
          <ul className="flex items-center anchor_nav">
            <li className="current mr-[50px]">
              <a className="text-[#5A5A5A]" href="#home">
                Home
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#about">
                About
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#service">
                Service
              </a>
            </li>
            <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#portfolio">
                Portfolio
              </a>
            </li>
            {/* <li className="mr-[50px]">
              <a className="text-[#5A5A5A]" href="#blog">
                Blog
              </a>
            </li> */}
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="orido_tm_boxed_button">
          <a href="assets/img/cv/FarahNaz.docx" download>
            <p className="flex">My Resume <img className="svg" src="assets/img/svg/paper.svg" alt /></p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;

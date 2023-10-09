import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className="w-full h-72 py-12 bg-slate-800 text-center ">
        <div className="flex justify-center items-center ">
          <AiFillFacebook className="text-6xl  text-blue-500 hover:text-orange-500" />
          <AiFillGithub className="text-6xl text-white hover:text-orange-500" />
          <AiFillLinkedin className="text-6xl text-blue-500 hover:text-orange-500" />
        </div>
        <div className="flex justify-center items-center gap-10 text-white font-semibold text-lg mt-3">
          <a className=" hover:text-orange-500" href="">
            Info
          </a>
          <a className=" hover:text-orange-500" href="">
            Support
          </a>
          <a className=" hover:text-orange-500" href="">
            About
          </a>
        </div>
        <div className="flex justify-center items-center gap-3 mt-2 text-white mb-2">
          <a href="">Terms of Use</a> 
          <a href="">Privacy Policy</a>
        </div>
        <p className="text-white">©️ 2023 Masum Rana</p>
      </footer>
    </div>
  );
};

export default Footer;

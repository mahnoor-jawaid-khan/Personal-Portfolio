import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" px-6 md:px-16 py-6 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {year} Mahnoor Khan. All rights reserved.</p>

        <div className="flex gap-5 text-xl">
          <Link to="https://www.linkedin.com/in/mahnoor-khan-234802200/" target="_blank">
            <FiLinkedin className="hover:text-[#0e76a8] transition-transform hover:scale-110" />
          </Link>
          <Link to="https://github.com/mahnoor-jawaid-khan" target="_blank">
            <RiGithubLine className="hover:text-gray-300 transition-transform hover:scale-110" />
          </Link>
          <Link to="https://www.facebook.com/" target="_blank">
            <SlSocialFacebook className="hover:text-[#1877f2] transition-transform hover:scale-110" />
          </Link>
          <Link to="https://www.instagram.com/mhnxxrjk/" target="_blank">
            <SlSocialInstagram className="hover:text-[#e1306c] transition-transform hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

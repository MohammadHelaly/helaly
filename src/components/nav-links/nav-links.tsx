import { scrollTo } from "@/lib/utils";

const links = ["About", "Projects", "Skills", "Contact"];

const NavLinks = () => {
  return links.map((link) => {
    const handleClick = () => {
      scrollTo(link.toLowerCase());
    };

    return (
      <li key={link}>
        <button
          onClick={handleClick}
          className="flex h-full cursor-pointer items-center px-4 py-1 font-manrope text-base font-normal text-black transition-all duration-200 ease-in-out hover:bg-black hover:text-white"
        >
          {link}
        </button>
      </li>
    );
  });
};

export default NavLinks;

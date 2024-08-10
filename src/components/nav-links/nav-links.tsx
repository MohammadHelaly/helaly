const links = ["About", "Projects", "Skills", "Contact"];

const NavLinks = () => {
  return links.map((link) => {
    const href = "#" + link.toLowerCase();

    return (
      <li key={link}>
        <a
          href={href}
          className="flex h-full items-center px-4 py-1 font-manrope text-base font-normal text-black transition-all duration-200 ease-in-out hover:bg-black hover:text-white"
        >
          {link}
        </a>
      </li>
    );
  });
};

export default NavLinks;

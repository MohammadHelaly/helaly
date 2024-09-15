import { scrollTo } from "@/lib/utils";

const NavLogo = () => {
  const handleClick = () => {
    scrollTo("home");
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer font-manrope text-xl font-bold text-black"
    >
      helaly.dev
    </button>
  );
};

export default NavLogo;

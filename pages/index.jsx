import { useState } from "react";
import Link from "next/link";
import { Icon, Box, Img } from "@chakra-ui/react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen(!menuOpen);

  return (
    <Box
      as="header"
      bg="white"
      className="w-full py-4 px-3 fixed z-50 transition duration-500 ease-in shadow-sm bg-white"
    >
      <div className="container">
        <nav className="flex lg:flex-row items-center justify-between">
          <Link href="/">
            <a>LOGO</a>
          </Link>
          <div className="hidden lg:flex flex-row">
            <LinkItem link="/" caption="Home" />
            <LinkItem link="/about" caption="Who we are" />
            <LinkItem link="/career" caption="Careers" />
            <LinkItem link="/contact-us" caption="Contact Us" />
          </div>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={handleClick}
            className="rounded lg:hidden focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          >
            <Icon as={menuOpen ? MdOutlineClose : MdOutlineMenu} />
          </button>
        </nav>
        {menuOpen && (
          <nav className="p-4 flex flex-col items-center justify-center space-y-3 lg:hidden">
            <LinkItem link="/" caption="Home" />
            <LinkItem link="/about" caption="Who we are" />
            <LinkItem link="/career" caption="Careers" />
            <LinkItem link="/contact-us" caption="Contact Us" />
          </nav>
        )}
      </div>
    </Box>
  );
}

function LinkItem({ link, caption }) {
  return (
    <Link href={link}>
      <a className="text-lg font-medium cursor-pointer py-2 px-6 hover:underline">
        {caption}
      </a>
    </Link>
  );
}

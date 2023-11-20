import { CuriousLogo } from "../../../assets/svgs/svg";
import { IoSearchOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <>
      <nav className=" max-w-screen-xl mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 flex items-center justify-between">
        {/* logo */}
        <div className=" flex items-center">
          <img src={CuriousLogo} className=" w-[60px] h-[60px]" />
          <h1 className="  font-semibold  text-3xl ml-2">Curious</h1>
        </div>
        {/* search */}
        <div className="relative flex items-stretched">
          <input
            type="search"
            placeholder="Search..."
            className="  border border-gray-500 rounded-3xl px-4 py-1 w-full bg-transparent"
          />
          <div className="absolute inset-y-0 flex items-center right-0 pr-4 cursor-pointer">
            <IoSearchOutline className=" text-xl" />
          </div>
        </div>

        {/* Nav Links */}



      </nav>
    </>
  );
};

export default Nav;

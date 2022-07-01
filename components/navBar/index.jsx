import { MessageIndicator } from "../../atoms";

import Link from "next/link";
const NavBar = () => {
  return (
    <header className="bg-red-50">
      <nav className="width-container flex items-center justify-between  gap-2 ">
        <h2>Logo</h2>
        <ul className="flex flex-nowrap gap-3 items-center justify-center px-3 ">
          <li className="text-lg xl:text-xl px-3  font-sora">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg xl:text-xl px-3 ">
            <Link href="/">About</Link>
          </li>
          <li className="text-lg xl:text-xl px-3 ">
            <Link href="/">Products</Link>
          </li>
          <li className="text-lg xl:text-xl px-3 ">
            <Link href="/">Blogs</Link>
          </li>
          <li className="text-lg xl:text-xl px-3 ">
            <Link href="/">Services</Link>
          </li>
        </ul>
        <div className="avatar">
          <div className="w-11 mask mask-squircle">
            <img src="https://api.lorem.space/image/face?hash=47449" />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;

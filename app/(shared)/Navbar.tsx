import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className='mb-5'>
      <nav className='flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4'>
        <div className='hidden sm:block'>Social Links</div>
        <div className='flex justify-between items-center gap-10'>
          <Link href='/'>Home</Link>
          <Link href='/'>Trending</Link>
          <Link href='/'>About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

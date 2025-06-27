'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/next.svg" // stored inside /public/logo.svg
        alt="Flowbite Logo"
        width={36}
        height={36}
        className="mr-3 h-6 sm:h-9 w-auto"
        priority
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        
      </span>
    </Link>
  );
};

export default Logo;

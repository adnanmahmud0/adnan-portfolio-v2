'use client';
import React from 'react';
import Link from 'next/link'; // Remove this if not using Next.js

const menuItems = [
  { name: 'Home', href: '#', current: true },
  { name: 'Company', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Contact', href: '#' },
];

const baseClasses =
  'block py-2 pr-4 pl-3 border-b border-gray-100 lg:p-0 lg:border-0 lg:hover:text-primary-700 lg:hover:bg-transparent dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent';

const MenuItems: React.FC = () => {
  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {menuItems.map(({ name, href, current }) => (
        <li key={name}>
          <Link
            href={href}
            className={`${baseClasses} ${
              current
                ? 'text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white'
                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-400 lg:dark:hover:text-white'
            }`}
            aria-current={current ? 'page' : undefined}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;

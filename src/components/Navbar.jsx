import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const RESUME_URL = '/Resume.pdf';
const RESUME_FILENAME = 'Saurabh_Naulakha_Resume.pdf';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const viewResume = () => {
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex md:hidden flex-col' : 'hidden md:flex'} flex-row gap-4 lg:gap-5 items-center`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-white text-[16px] lg:text-[18px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li className={`flex ${isSecondary ? 'flex-col items-start gap-3 mt-2' : 'flex-row gap-3'}`}>
        <button
          type="button"
          onClick={() => {
            viewResume();
            if (isSecondary) setToggle(false);
          }}
          className={`${isSecondary ? 'text-secondary' : 'text-white'} hover:text-white text-[16px] lg:text-[18px] font-medium`}
        >
          View Resume
        </button>
        <a
          href={RESUME_URL}
          download={RESUME_FILENAME}
          onClick={() => {
            if (isSecondary) setToggle(false);
          }}
          className={`${isSecondary ? 'text-secondary' : 'text-white'} hover:text-white text-[16px] lg:text-[18px] font-medium`}
        >
          Download Resume
        </a>
      </li>
    </ul>
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Saurabh Naulakha logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] lg:text-[20px] font-bold cursor-pointer flex">
            SAURABH&nbsp;
            <span className="sm:block hidden">NAULAKHA</span>
          </p>
        </Link>
        {renderNavLinks(false)}
          <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
            className="p-2"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="w-[28px] h-[18px] object-contain"
            />
          </button>
          <div
            className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[180px] z-10 rounded-xl foggy-glass ${
              toggle ? 'flex' : 'hidden'
            }`}
          >
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

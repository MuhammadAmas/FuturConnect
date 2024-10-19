import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DropdownBasic from '../Dropdowns/DropdownBasic';
import companyLogo from '/logo large 1.png';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? true : storedSidebarExpanded === 'true',
  );

  // Handle close on outside click
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Save the expanded state in localStorage
  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen ${
        sidebarExpanded ? 'w-72.5' : 'w-20'
      } flex-col bg-white overflow-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img
            alt="Company Logo"
            src={companyLogo}
            className={`${
              sidebarExpanded ? 'h-12 w-auto' : 'hidden'
            } transition-all duration-300`}
          />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>

        {/* Collapse/Expand button */}
        <button
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className="hidden lg:block mr-[-28px]  border-solid border-[1px] rounded-full p-1"
        >
          <img
            src="/Group 328739.png"
            className={`${!sidebarExpanded && 'rotate-180'}`}
          />
        </button>
      </div>

      {/* Sidebar content */}
      <nav className="flex-grow px-4 lg:px-6 py-4">
        <ul className="flex flex-col gap-1.5">
          <li>
            <NavLink
              to="/dashboard"
              className={`group relative flex items-center gap-2.5 rounded-lg py-3 px-2 font-medium text-lowemphasize duration-300 ease-in-out ${
                pathname.includes('/dashboard') &&
                'bg-primaryblue rounded-lg dark:bg-meta-4 text-white'
              }`}
            >
              <img
                src="/dashboard-icon.svg"
                style={{
                  filter: `${
                    pathname.includes('/dashboard')
                      ? 'brightness(0) invert(1)'
                      : ''
                  }`,
                }}
              />
              {sidebarExpanded && <span>Dashboard</span>}
            </NavLink>
          </li>

          {/* Room Management */}
          <li>
            <NavLink
              to="/room-management"
              className={`group relative flex items-center gap-2.5 rounded-lg py-3 px-2 font-medium text-lowemphasize duration-300 ease-in-out ${
                pathname.includes('/room-management') &&
                'bg-primaryblue rounded-lg dark:bg-meta-4 text-white'
              }`}
            >
              <img
                src="/🦆 icon _two seater sofa_.png"
                style={{
                  filter: `${
                    pathname.includes('/room-management')
                      ? 'brightness(0) invert(1)'
                      : ''
                  }`,
                }}
              />
              {sidebarExpanded && <span>Room Management</span>}
            </NavLink>
          </li>

          {/* Entity Management */}
          <li>
            <NavLink
              to="/entity-management"
              className={`group relative flex items-center gap-2.5 rounded-lg py-3 px-2 font-medium text-lowemphasize duration-300 ease-in-out ${
                pathname.includes('/entity-management') &&
                'bg-primaryblue rounded-lg dark:bg-meta-4 text-white'
              }`}
            >
              <img
                src="/receipt-text.png"
                style={{
                  filter: `${
                    pathname.includes('/entity-management')
                      ? 'brightness(0) invert(1)'
                      : ''
                  }`,
                }}
              />
              {sidebarExpanded && <span>Entity</span>}
            </NavLink>
          </li>
          <hr className="my-3" />
          {/* Settings */}
          <li>
            <NavLink
              to=""
              className={`group relative flex items-center gap-2.5 rounded-lg py-3 px-2 font-medium text-lowemphasize duration-300 ease-in-out ${
                pathname.includes('/entity-managementt') &&
                'bg-primaryblue rounded-lg dark:bg-meta-4 text-white'
              }`}
            >
              <img src="/settings.png" />
              {sidebarExpanded && <span>Settings</span>}
            </NavLink>
          </li>

          {/* Support */}
          <li>
            <NavLink
              to=""
              className={`group relative flex items-center gap-2.5 rounded-lg py-3 px-2 font-medium text-lowemphasize duration-300 ease-in-out ${
                pathname.includes('/entity-managementt') &&
                'bg-primaryblue rounded-lg dark:bg-meta-4 text-white'
              }`}
            >
              <img src="/support.svg" />
              {sidebarExpanded && <span>Support</span>}
            </NavLink>
          </li>
        </ul>
      </nav>

      {sidebarExpanded && pathname.includes('/dashboard') && (
        <div className="m-auto py-4">
          <img src="/ate.png" />
        </div>
      )}
      {/* Footer */}
      <div className="px-2 py-5 m-auto ">
        <DropdownBasic
          buttonText="Ahmed"
          menuItems={[
            {
              title: 'Ahmed',
              value: 'ahmed',
            },
            {
              title: 'John',
              value: 'john',
            },
          ]}
          avatarUrl="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
        />
      </div>
    </aside>
  );
};

export default Sidebar;

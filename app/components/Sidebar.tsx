import React from "react";
import Link from "next/link";
import {
  Home,
  Search,
  Bell,
  Mail,
  PenSquare,
  User,
  MoreHorizontal,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-black text-white w-1/4 md:w-1/5 min-h-screen flex flex-col justify-between p-4 border-r border-gray-800">
      <div>
        <div className="mb-8">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-white"
            fill="currentColor"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                href="/home"
                className="flex items-center space-x-4 text-xl"
              >
                <Home size={24} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className="flex items-center space-x-4 text-xl"
              >
                <Search size={24} />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link
                href="/notifications"
                className="flex items-center space-x-4 text-xl"
              >
                <Bell size={24} />
                <span>Notifications</span>
              </Link>
            </li>
            <li>
              <Link
                href="/messages"
                className="flex items-center space-x-4 text-xl"
              >
                <Mail size={24} />
                <span>Messages</span>
              </Link>
            </li>
            <li>
              <Link
                href="/grok"
                className="flex items-center space-x-4 text-xl"
              >
                <PenSquare size={24} />
                <span>Grok</span>
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="flex items-center space-x-4 text-xl"
              >
                <User size={24} />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/more"
                className="flex items-center space-x-4 text-xl"
              >
                <MoreHorizontal size={24} />
                <span>More</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mb-4">
        <button className="bg-blue-500 text-white w-full py-3 rounded-full text-xl font-bold">
          Post
        </button>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
          M
        </div>
        <div className="flex-grow">
          <div className="font-bold">Muhammad Bill Fedr...</div>
          <div className="text-gray-500">@DRofooo</div>
        </div>
        <div>...</div>
      </div>
    </div>
  );
};

export default Sidebar;

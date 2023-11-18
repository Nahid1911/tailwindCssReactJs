import {Outlet, Link} from "react-router-dom";
import { Menu } from "@headlessui/react";
export default function NavBar() {
  return (
    <>
    <div className="flex flex-row justify-between p-4 text-blue-100 text-xl bg-blue-950">
      <div>Logo</div>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button>
            <span>
              TailwindCSS
            </span>
          </Menu.Button>
        </div>
        <div>
          <Menu.Items className="absolute w-40 left-0 bg-slate-500 rounded-lg text-green-200 text-left text-lg p-2 border">
            <Menu.Item className="block border rounded p-1"><Link to="/">Screen Size</Link></Menu.Item>
            <Menu.Item className="block border rounded p-1 mt-1"><Link to="/dropdown">Tailwind Dropdown</Link></Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
      <div className="flex flex-row gap-4">
        <button className="border rounded-full">noti</button>
        <Menu as="div" className="relative border rounded-full">
          <div>
            <Menu.Button>
              <span className="relative">Prof</span>
            </Menu.Button>
          </div>
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 rounded-xl bg-blue-900">
            <Menu.Item className="block border-r-amber-600">
              <a href=" " className="">Head-1</a>
            </Menu.Item>
            <Menu.Item className="block border-r-amber-600">
              <a href=" ">Head-2</a>
            </Menu.Item>
            <Menu.Item className="block border-r-amber-600">
              <a href=" ">Head-3</a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
    <Outlet />
    </>
  );
}

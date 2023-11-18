import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
export default function NavBar() {
  return (
    <div className="flex flex-row justify-between p-4 text-blue-100 text-xl bg-blue-950">
      <div>Logo</div>
      <div>
        <ul>TailwindCSS</ul>
      </div>
      <div className="flex flex-row gap-4">
        <button className="border rounded-full">noti</button>
        <Menu as="div" className="relative border rounded-full">
          <div>
            <Menu.Button>
              <span className="relative">Prof</span>
            </Menu.Button>
          </div>
          <Transition as={Fragment} className="rounded-xl p-4">
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 bg-blue-900">
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
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

import { Menu, Transition } from "@headlessui/react";
export default function Dropdown() {
  return (
    <div className="w-full text-center pt-40">
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="border p-4 bg-slate-300 hover:bg-slate-950 hover:text-white rounded-full">
            <span>
              Dropdown
            </span>
          </Menu.Button>
        </div>
        <Menu.Items>
          <Menu.Item>Dropdown List-1</Menu.Item>
          <Menu.Item>Dropdown List-2</Menu.Item>
          <Menu.Item>Dropdown List-3</Menu.Item>
          <Menu.Item>Dropdown List-4</Menu.Item>
          <Menu.Item>Dropdown List-5</Menu.Item>
          <Menu.Item>Dropdown List-6</Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}
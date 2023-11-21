import { Menu, Transition } from "@headlessui/react";
export default function Dropdown() {
  return(
    <div className="w-full text-center pt-40">
      <Menu as="div" className="relative">
        <div>
        <Menu.Button className="border p-4 bg-slate-300 hover:bg-slate-950 hover:text-white rounded-full">Dropdown</Menu.Button>
        </div>
      </Menu>
    </div>
  )
}
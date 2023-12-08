import { Bell, ChevronsLeftRight, ExternalLink, Monitor, Plus, Settings } from "lucide-react"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <header className='p-4 border-b border-gray-700'>
      <div className="px-4 mx-auto flex items-center justify-between">
        <span className="text-xl font-bold">Logo</span>

        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-gray-300">
            <li className="border rounded-md bg-[#1a1a1a] py-1 px-3">
              <Link href='#'>Feedback</Link>
            </li>
            <li>
              <Link className="text-base" href='#'>Changelog</Link>
            </li>
            <li>
              <Link className="text-base" href='#'>Help</Link>
            </li>
            <li>
              <Link className="text-base" href='#'>Docs</Link>
            </li>
          </ul>

          <div className="flex gap-3 items-center">
            <div className="p-2 border h-10 w-10 rounded-full border-gray-700 flex justify-center items-center">
              <Bell className="w-5 h-5 text-gray-300 block" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="h-10 w-10 rounded-full gradient" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 mr-12 mt-2 rounded-xl bg-[#111111]">
                <DropdownMenuLabel className="p-3 flex flex-col">
                  <span className="text-base text-gray-100">Betr Beta Dev</span>
                  <span className="font-normal text-gray-400">example@gmail.com</span>
                </DropdownMenuLabel>

                <DropdownMenuCheckboxItem className="text-gray-300 hover:text-white px-3 py-2">
                  Dashboard
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="px-3 py-2 flex items-center text-gray-300 hover:text-white justify-between">
                  <span className="block">Settings</span>
                  <Settings className="w-[18px] h-[18px]" />
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="px-3 py-2 flex items-center text-gray-300 hover:text-white justify-between">
                  <span className="block">Create Team</span>
                  <Plus className="w-[18px] h-[18px]" />
                </DropdownMenuCheckboxItem>

                <DropdownMenuSeparator className="mx-3" />

                <DropdownMenuCheckboxItem className="px-3 py-2 flex items-center justify-between text-gray-300 hover:text-white">
                  <span className="block">Command Menu</span>
                  <div className="flex items-center gap-1">
                    <div className="w-7 h-7 flex justify-center bg-[#1a1a1a]   items-center rounded-md border border-gray-700">
                      <span className="block p-0 text-xl">⌘</span>
                    </div>
                    <div className="w-7 h-7 flex justify-center bg-[#1a1a1a]   items-center rounded-md border border-gray-700">
                      <span className="block p-0 text-base font-medium">K</span>
                    </div>
                  </div>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="px-3 py-2 flex items-center justify-between text-gray-300 hover:text-white">
                  <span className="block">Theme</span>
                  <div className="px-2 py-1 bg-[#1a1a1a] rounded-md border border-gray-700 flex gap-1 items-center">
                    <Monitor className="w-[14px] h-[14px] mr-1" />
                    <span className="block">System</span>
                    <ChevronsLeftRight className="rotate-90 w-[14px] h-[14px]" />
                  </div>
                </DropdownMenuCheckboxItem>

                <DropdownMenuSeparator className="mx-3" />

                <DropdownMenuCheckboxItem className="px-3 py-2 flex items-center justify-between text-gray-300 hover:text-white">
                  <span className="block">Vercel Homepage</span>
                  <ExternalLink className="w-[18px] h-[18px]" />
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="px-3 py-2 text-gray-300 hover:text-white">
                  Log out
                </DropdownMenuCheckboxItem>

                <DropdownMenuSeparator className="mx-3" />

                <div className="p-3">
                  <Button className="w-full">
                    Upgrade to Pro
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </nav>
      </div>

    </header>
  )
}

export default Navbar

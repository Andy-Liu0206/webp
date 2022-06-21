import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtoms";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div
        onClick={() => router.push("/")}
        className="flex justify-between max-w-6xl mx-5 lg:mx-auto"
      >
        {/* Left */}
        <div
          className="relative hidden lg:inline-grid w-24
        cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative w-10 lg:hidden flex-shrink-0
        cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle Search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div
              className="absolute inset-y-0 pl-3 flex
                items-center pointer-events-none"
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon
            onClick={() => router.push("/")}
            className="hidden h-6 md:inline-flex cursor-pointer
        hover:scale-125 transition-all duration-150 ease-out"
          />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div
                className="relative hidden h-6 md:inline-flex cursor-pointer
        hover:scale-125 transition-all duration-150 ease-out"
              >
                <PaperAirplaneIcon
                  className="hidden h-6 md:inline-flex cursor-pointer
        hover:scale-125 transition-all duration-150 ease-out rotate-45"
                />
              </div>

              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="hidden h-6 md:inline-flex cursor-pointer
        hover:scale-125 transition-all duration-150 ease-out"
              />
              <UserGroupIcon
                className="hidden h-6 md:inline-flex cursor-pointer
        hover:scale-125 transition-all duration-150 ease-out"
              />
              <HeartIcon
                className="hidden h-6 md:inline-flex cursor-pointer
        hover:scale-125 transition-all duration-150 ease-out"
              />

              <img
                onClick={() => router.push("/auth/profile")}
                src={session.user.image}
                alt="profile pic"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

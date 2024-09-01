"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
const Navbar = () => {
	const pathname = usePathname();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
    
		<nav className="bg-background/50 border-b  sticky top-0 backdrop-blur  z-30">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button */}
						<button
							type="button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen ? "true" : "false"}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							<span className="sr-only">Open main menu</span>
							{/* Menu icon */}
							<svg
								className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							{/* Close icon */}
							<svg
								className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<Link href={"/"}>
							<img
								className="h-8 w-auto"
								src={"/logo1.png"}
								/>
								</Link>
						</div>
						<div className="hidden sm:ml-6 sm:block ">
							<div className="flex space-x-4">
							
								<Link
									href="/"
									className={pathname === "/" ? "rounded-md bg-gray-700 text-white  px-3 py-2 text-sm font-medium" : "rounded-md   px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white"}
									aria-current="page">
									Home
								</Link>
								<Link
									href="/movies"
									className={pathname === "/movies" ? "rounded-md bg-gray-700 text-white  px-3 py-2 text-sm font-medium" : "rounded-md   px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white"}>
									Movies
								</Link>
								
								<Link
									href={"/"}
									className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white">
									Blog
								</Link>
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <ModeToggle  />

						{/* Profile dropdown */}
						
					</div>
				</div>
			</div>
			{/* Mobile menu */}
			{isMobileMenuOpen && (
				<div className="sm:hidden" id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2">
						<a
							href="#"
							className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
							aria-current="page">
							Dashboard
						</a>
						<Link
							href="/movies"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
							Movies
						</Link>
						<a
							href="#"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
							Projects
						</a>
						<a
							href="#"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
							Calendar
						</a>
            
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-6 bg-gray-50 shadow">
      {/* Mobile Menu Trigger */}
      <Sheet open={isOpen} onOpenChange={toggleMenu}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
          <nav className="grid gap-4 py-6">
            <Link
              to="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <MountainIcon className="h-6 w-6" />
        <span className="font-bold text-lg">MyLikita</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </nav>
    </header>
  );
}

function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50"
    >
      {children}
    </Link>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

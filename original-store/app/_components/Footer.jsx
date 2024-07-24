import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text md:h-48 p-4 md:p-8 border-t">

      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-wrap justify-center mb-8">
          <Link
            href="/"
            className="text-lg font-bold hover:text-gray-900 dark:hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-bold hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 ml-4 md:ml-8"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg font-bold hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 ml-4 md:ml-8"
          >
            Contact
          </Link>
        </div>
        <p className="text-sm text-center text-gray-600 dark:text-gray-500">
          &copy; 2024 Original Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

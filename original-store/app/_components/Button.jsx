// components/Button.js
import Link from 'next/link';

const Button = ({ children, href }) => {
  return (
    <Link href={href}>
      <div className="relative inline-block px-4 py-2 font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform origin-left hover:scale-x-100"></span>
      </div>
    </Link>
  );
};

export default Button;


import Link from 'next/link';


export default function Header() {
  return (
    <header className="w-full h-[100px] flex justify-center items-center top-0 left-0 right-0 "> {/* Reduced padding */}
      
      <ul className="flex space-x-6">
        <li><Link href="/plant-pots" className="text-gray-500 hover:text-blue-500">Plant Pots</Link></li>
        <li><Link href="/ceramics" className="text-gray-500 hover:text-blue-500">Ceramics</Link></li>
        <li><Link href="/tables" className="text-gray-500 hover:text-blue-500">Tables</Link></li>
        <li className="relative"><Link href="/chairs" className="text-gray-500 hover:text-blue-500">Chairs</Link></li>
        <li><Link href="/crockery" className="text-gray-500 hover:text-blue-500">Crockery</Link></li>
        <li><Link href="/tableware" className="text-gray-500 hover:text-blue-500">Tableware</Link></li>
        <li><Link href="/cutlery" className="text-gray-500 hover:text-blue-500">Cutlery</Link></li>
      </ul>
    </header>
  );
}


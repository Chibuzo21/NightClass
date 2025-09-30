export default function Lists() {
  //React makes it easy to display a list of items using the map() method
  return (
    <header className='w-[100%] py-4 bg-gray-500'>
      <nav className='mx-auto max-w-[70%] flex justify-between items-center'>
        {navlinks.map((link) => (
          <a
            key={link.id}
            className='text-gray-800 font-mono text-2xl hover:text-gray-300'
            href={link.path}>
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

const navlinks = [
  { id: 0, name: "Home", path: "/" },
  { id: 1, name: "About us", path: "/about" },
  { id: 2, name: "Contact", path: "/contact" },
  { id: 3, name: "Services", path: "/services" },
];

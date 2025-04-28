export function Navigation({ srcImg, alt, items }) {
    return (
      <nav className="bg-white shadow-md px-4 py-2 flex items-center space-x-4">
        <a className="flex items-center space-x-2" href="#">
          <img src={srcImg} alt={alt || "NavBar"} className="w-8 h-8" />
          {items.map((e, i) => (
            <a key={i} href={e.ref} className="text-gray-700 hover:text-blue-500">
              {e.title}
            </a>
          ))}
        </a>
      </nav>
    );
  }
  
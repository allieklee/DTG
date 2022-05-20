export const Header = () => {
  return (
    <div className="bg-green-900 p-6">
      <nav className="relative max-w-7xl mx-auto flex grid justify-items-center" aria-label="Global">
        <div className="">
          <div className="space-x-10">
            <a href="#" className="text-base font-medium font-serif text-gray-100 hover:text-gray-300">blog</a>

            <a href="#" className="text-base font-medium font-serif text-gray-100 hover:text-gray-300">about</a>

            <a href="#" className="text-base font-medium font-serif text-gray-100 hover:text-gray-300">shop</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
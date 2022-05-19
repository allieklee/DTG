export const Header = () => {
  return (
    <div className="bg-gray-900 pt-6">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">DTG</span>
              <img className="h-8 w-auto sm:h-10"
                   src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg" alt=""/>
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button type="button"
                      className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                      aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden space-x-8 md:flex md:ml-10">
            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Product</a>

            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Features</a>

            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Marketplace</a>

            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Company</a>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <a href="#" className="text-base font-medium text-white hover:text-gray-300"> Log in </a>
          <a href="#"
             className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"> Start
            free trial </a>
        </div>
      </nav>
    </div>
  );
}
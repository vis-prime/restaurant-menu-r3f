import { MenuItems } from "./assets/menuItems"

// list of menu items for user to select from
function Menu({ setSelectedItem }) {
  const handleItemClick = (item) => {
    setSelectedItem(item)
  }
  return (
    <div className="w-full md:w-96 lg:w-128 h-64 md:h-full bg-gradient-to-b from-emerald-50 to-teal-50 flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
      {/* Header - Fixed */}
      <div className="p-4 md:p-6 pb-2 md:pb-4 flex-shrink-0">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
          Our Menu
        </h2>
        <p className="text-gray-600 text-xs md:text-sm">
          Select a dish to view details
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-hidden md:overflow-y-auto pt-1 md:pt-2 px-4 md:px-6 pb-4 md:pb-6 min-h-0">
        {/* Menu Items Grid */}
        <div className="flex md:grid md:grid-cols-1 gap-2 md:gap-4 overflow-x-auto md:overflow-x-visible overflow-y-hidden md:overflow-y-visible pb-2 md:pb-0 h-full md:h-auto">
          {MenuItems[0].map((item, index) => (
            <div
              onClick={() => handleItemClick(item)}
              key={item.id}
              className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 md:p-6 flex flex-col cursor-pointer border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1 flex-shrink-0 w-40 md:w-auto"
            >
              {/* Item Image */}
              <div className="relative mb-2 md:mb-4 overflow-hidden rounded-lg md:rounded-xl aspect-square">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-full object-contain bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Item Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 capitalize group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-xs md:text-lg font-bold text-emerald-600 bg-emerald-50 px-2 md:px-3 py-1 rounded-full ml-1 md:ml-2 flex-shrink-0">
                    {item.currency} {item.price}
                  </span>
                </div>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300 hidden md:block">
                  {item.description}
                </p>
              </div>

              {/* Category Badge */}
              <div className="mt-2 md:mt-4 flex items-center justify-between">
                <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 md:px-3 py-1 rounded-full capitalize">
                  {item.category}
                </span>

                {/* Hover indicator - Hidden on mobile */}
                <div className="hidden md:flex items-center text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium mr-1">View Details</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Selection indicator - Smaller on mobile */}
              <div className="absolute top-2 md:top-4 right-2 md:right-4 w-4 h-4 md:w-6 md:h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
                <svg
                  className="w-2 h-2 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 md:mt-8 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            All dishes are prepared fresh with authentic Japanese ingredients
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu

import { Suspense } from "react"
import { View, OrbitControls } from "@react-three/drei"
import { Model, ModelLighting } from "./Model"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react"
import { Soup } from "lucide-react"

// Empty State Component
function EmptyState() {
  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="text-center max-w-xs">
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center shadow-inner">
          <Soup className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
          Preview Your Selection
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Choose a delicious dish from our menu to see it in 3D and learn more
          about it
        </p>
      </div>
    </div>
  )
}

// Desktop Header Component
function DesktopHeader({ selectedItem }) {
  return (
    <div className="hidden md:block bg-white/90  border-b border-emerald-200/50 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 capitalize">
            {selectedItem.name}
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl">
            {selectedItem.description}
          </p>
        </div>
        <div className="ml-6 text-right">
          <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">
            {selectedItem.currency} {selectedItem.price}
          </div>
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full capitalize">
            {selectedItem.category}
          </span>
        </div>
      </div>
    </div>
  )
}

// Mobile Title Component
function MobileTitle({ selectedItem }) {
  return (
    <div className="md:hidden mb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2 capitalize leading-tight">
        {selectedItem.name}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        {selectedItem.description}
      </p>
    </div>
  )
}

// Ingredients Section Component
function IngredientsSection({ selectedItem }) {
  return (
    <div className="bg-white/60 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-2 md:gap-6 justify-center items-center md:items-end">
        {/* Content Section */}
        <div className="flex-1">
          <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
            Ingredients & Preparation
          </h3>
          <div className="mb-3 md:mb-4">
            <h4 className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Ingredients:
            </h4>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {selectedItem.ingredients?.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-emerald-50 shadow-sm text-emerald-700 text-xs md:text-sm px-2 py-1 rounded-lg"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm md:text-base font-medium text-gray-700 mb-2">
              Preparation:
            </h4>
            <p className="text-gray-600 text-xs md:text-base leading-relaxed">
              {selectedItem.preparation ||
                "Made with authentic Japanese ingredients and traditional cooking methods. Fresh, high-quality components sourced daily to ensure the best taste and presentation."}
            </p>
          </div>
        </div>

        {/* 3D Model Section */}
        <div className="w-42  md:w-32 lg:w-56 flex-shrink-0 mt-4 md:mt-0 overflow-hidden">
          <motion.div
            className="w-full rounded-xl p-3 aspect-square border border-white/50"
            key={`model-${selectedItem.id}`}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {/* Square container for 3D model with size constraints */}
            <MenuItem3d url={selectedItem.modelUrl} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Nutrition Section Component
function NutritionSection({ selectedItem }) {
  if (!selectedItem.nutrition) return null

  return (
    <div className="bg-white/60 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg">
      <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
        Nutritional Information
      </h3>
      <div className="grid grid-cols-3 gap-2 md:gap-3 text-xs md:text-sm">
        {Object.entries(selectedItem.nutrition).map(([key, value]) => (
          <div
            key={key}
            className="text-center p-2 bg-emerald-50 rounded-lg shadow-sm"
          >
            <div className="font-semibold text-emerald-700 text-sm md:text-base">
              {value}
            </div>
            <div className="text-gray-600 text-xs capitalize">{key}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ItemPreview({ selectedItem }) {
  if (!selectedItem) {
    return <EmptyState />
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedItem.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={selectedItem.thumbnail}
            alt={selectedItem.name}
            className="absolute inset-0 w-full h-full object-cover blur-md opacity-30"
          />

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col">
            <DesktopHeader selectedItem={selectedItem} />

            {/* Main Content Section */}
            <div className="flex-1 flex flex-col p-4 md:p-8 min-h-0 overflow-y-auto">
              {/* Main Content Area */}
              <div className="flex-1 w-full max-w-none">
                <MobileTitle selectedItem={selectedItem} />

                {/* Additional Details */}
                <div className="space-y-3 md:space-y-6">
                  <IngredientsSection selectedItem={selectedItem} />
                  <NutritionSection selectedItem={selectedItem} />
                  {/* <MobileActionSection selectedItem={selectedItem} /> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function MenuItem3d({ url }) {
  return (
    <View className="w-full h-full overflow-hidden">
      <ModelLighting />
      <Suspense fallback={null}>
        <Model url={url} />
      </Suspense>
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={0.2}
        enableDamping={true}
        maxPolarAngle={Math.PI / 2}
      />
    </View>
  )
}

export default ItemPreview

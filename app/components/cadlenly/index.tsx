import { Clock } from "lucide-react"
import { CADLENLY_URL } from "@/app/constants"

const Cadlenly = () => {
  return (
    <div className="xl:col-span-5 mt-8 xl:mt-0">
      <div className="relative max-w-md mx-auto xl:max-w-none">
        {/* Shadow/Offset Effect */}
        <div className="absolute top-1 left-1 md:top-2 md:left-2 w-full h-full bg-black rounded-lg"></div>

        {/* Main Widget */}
        <div className="relative bg-white border-2 border-black rounded-lg overflow-hidden">
          {/* Widget Header */}
          <div className="bg-white border-b border-black p-3 md:p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg font-semibold text-black">Book a Discovery Call</h3>
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-black" />
            </div>
          </div>
          <div className="h-[calc(100vh-300px)]">
            <iframe
              src={CADLENLY_URL}
              className="w-full h-full"
              title="Schedule a meeting with n8n developers"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadlenly

import { Clock } from "lucide-react"
import { CADLENLY_URL } from "@/app/constants"

const Cadlenly = () => {
  return (
    <div className="xl:col-span-5">
      <div className="relative max-w-md mx-auto xl:max-w-none">
        {/* Shadow/Offset Effect */}
        <div className="absolute top-2 left-2 w-full h-full bg-[#FF7A59] rounded-[24px]"></div>

        {/* Main Widget */}
        <div className="relative bg-white border-2 border-[#FF7A59] rounded-[24px] overflow-hidden shadow-sm">
          <div className="h-[500px] md:h-[550px]">
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

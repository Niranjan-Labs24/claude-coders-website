import Image from 'next/image'

const Benefit = ({label}: {label: string}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-1">
        <Image 
          src="/icons/Element.png"
          alt="icon"
          width={18}
          height={18}
          className="object-contain"
        />
      </div>
      <span 
        className="font-sans font-medium text-[16px] leading-[32px] tracking-[-2%] text-black" 
        style={{ width: '292px' }}
      >
        {label}
      </span>
    </div>
  )
}

export default Benefit

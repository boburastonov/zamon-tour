import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = () => {
  return (
    <div className=" flex w-full justify-between gap-[34px] items-start bg-[#2C2137] bg-red-700 fixed bottom-0 left-0 z-[100000] px-[18px] py-[11px] border-t border-gray-700">
        <Link
          href={"/"}
          className="w-3/12 flex flex-col gap-[10px] justify-center items-center relative"
        >
          {/* <GoHome className="text-[25px]" /> */}
          <p className="text-[11px] font-bold text-center leading-[13px]   ">
            Asosiy
          </p>
        </Link>
        <Link
          href={"/pages/CourseInfo"}
          className="w-3/12 flex flex-col gap-[10px] justify-center items-center text-[#FFFFFF99]"
        >
          {/* <IoCalendarClearOutline className="text-[25px]" /> */}
          <p className="toxt-[11px] font-normal text-center leading-[13px]">
            Kurslar
          </p>
        </Link>
        <Link
          href={"/pages/contact"}
          className="w-3/12 flex flex-col gap-[10px] justify-center items-center text-[#FFFFFF99]"
        >
          {/* <MdErrorOutline className="text-[25px]" /> */}
          <p className="toxt-[11px] font-normal text-center leading-[13px]">
            Biz bilan aloqa
          </p>
        </Link>
        <Link
          href={"/pages/personalInfo"}
          className="w-3/12 flex flex-col gap-[10px] justify-center items-center text-[#FFFFFF99]"
        >
          {/* <IoPeople className="text-[25px]" /> */}
          <p className="toxt-[11px] font-normal text-center leading-[13px]">
            Shaxsiy ma`lumotlar
          </p>
        </Link>
      </div>
  )
}

export default MobileNav
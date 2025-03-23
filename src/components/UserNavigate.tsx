import Image from 'next/image';
import { Calendar, House, LogOut, SquareUser } from "lucide-react";
import React from 'react'

function UserNavigate() {
  return (
    <div className="w-64 h-[515px] relative flex flex-col items-center">
      <div className="w-44 h-44 overflow-hidden rounded-full">
        <Image
          src="/img/mockProfile.jpg"
          alt="Profile"
          width={176}
          height={176}
          className="object-cover"
        />
      </div>
      <div className="mt-2 justify-start text-sky-800 text-3xl font-semibold mb-10">
        Name of User
      </div>
      <button className="w-64 h-16 bg-white border-l border-r border-t border-slate-400 flex items-center justify-start pl-7">
        <House className="w-5 text-sky-800 mr-4" />
        <span className="text-sky-800 text-xl font-semibold">
          Dashboard
          </span>
      </button>
      <button className="w-64 h-16 bg-white border-l border-r border-t border-slate-400 flex items-center justify-start pl-7">
        <SquareUser className="w-5 text-sky-800 mr-4" />
        <span className="text-sky-800 text-xl font-semibold">
          Profile Settings
        </span>
      </button>
      <button className="w-64 h-16 bg-white border-l border-r border-t border-slate-400 flex items-center justify-start pl-7">
        <Calendar className="w-5 text-sky-800 mr-4" />
        <span className="text-sky-800 text-xl font-semibold">
          Manage Bookings
        </span>
      </button>
      <button className="w-64 h-16 bg-white border-1 border-slate-400 flex items-center justify-start pl-7">
        <LogOut className="w-5 text-sky-800 mr-4" />
        <span className="text-sky-800 text-xl font-semibold">
          Log Out
          </span>
      </button>
    </div>
  )
}

export default UserNavigate

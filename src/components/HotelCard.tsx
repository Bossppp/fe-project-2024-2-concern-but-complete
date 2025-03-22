'use client'
import React from 'react'
import { Hotel } from '../../interface'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar } from 'lucide-react'

function HotelCard({hotel}:{hotel:Hotel}) {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/hotel/${hotel.id}`)
    }
  return (
    <div className="max-w-sm w-full bg-white text-black rounded-lg shadow-md overflow-hidden">
      <div className="relative h-52 bg-gray-600">
        {/* <img
          src={hotel.image}
          alt="hotel"
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">kuy</h2>
        <div className="flex items-center mb-2">
          <Calendar />
          <span className="ml-2">1238</span>
        </div>
        <div className="flex items-center">
          <MapPin />
          <span className="ml-2">af</span>
        </div>
      </div>
    </div>
    
  )
}

export default HotelCard
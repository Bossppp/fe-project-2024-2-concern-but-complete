"use client"
import { ArrowLeft } from 'lucide-react';
import { useRouter } from "next/navigation";
import React from 'react'

function Hotel() {
    const router = useRouter();
    return (
        <div className="flex flex-col bg-white min-h-screen">
            <button
                onClick={() => router.push("/admin")}
                className="text-blue-500 text-sm cursor-pointer bg-transparent border-none pt-10 pl-17 flex"
            >
                <ArrowLeft className="w-5 mr-2" />
                <span className="flex items-center">{"Back to Admin Dashboard"}</span>
            </button>
            <div className="p-2 w-full text-black text-5xl flex justify-center">
                MANAGE HOTEL COMING SOON
            </div>
        </div>
    );
}

export default Hotel
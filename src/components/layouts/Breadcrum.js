'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Breadcrum() {
    const pathname = usePathname().split("/").pop();
    
    return (
        <div className="pagetitle">
            <h1>{pathname}</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">{pathname}</li>
                </ol>
            </nav>
        </div>
    )
}

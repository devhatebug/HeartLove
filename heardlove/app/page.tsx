"use client"
import React, { useEffect } from 'react';
import HiLayout from '@/components/hiLayout';
import starSnow from '@/functions/snows';

function Page() {
  starSnow();
  return (
    <div className="homepage">
      <div id="snow-animation-container"></div>      
      <div className="layout-hello">
        <HiLayout />
      </div>
    </div>
  )
}

export default Page

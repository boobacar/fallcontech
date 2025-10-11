import React from 'react'
let RiveComp = null
try { RiveComp = require('@rive-app/react-canvas').Rive } catch {}

export default function RiveIcon({ url = import.meta.env.VITE_RIVE_URL, className = 'h-16 w-16 mx-auto' }) {
  if (!url || !RiveComp) return null
  return <RiveComp src={url} autoplay className={className} />
}


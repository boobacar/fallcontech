import React, { useEffect, useState } from 'react'
let Lottie = null
try { Lottie = require('lottie-react').default } catch {}

export default function LottieBlock({ url = import.meta.env.VITE_LOTTIE_URL, className = 'h-24 w-24 mx-auto' }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    let alive = true
    if (!url || !Lottie) return
    fetch(url).then(r => r.json()).then(j => { if (alive) setData(j) }).catch(() => {})
    return () => { alive = false }
  }, [url])
  if (!url || !Lottie || !data) return null
  return <Lottie animationData={data} loop autoplay className={className} />
}

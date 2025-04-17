'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {createPortal} from 'react-dom'

type ZoomImageProps = {
  src: string
  alt: string
  zoomOut: () => void
}

const EnlargedImage = ({alt, src, zoomOut}: ZoomImageProps) => {
  const [transitionState, setTransitionState] = useState('w-0 h-0')
  useEffect(() => {
    setTimeout(() => {
      setTransitionState('w-screen h-screen')
    }, 10)

    return () => {
      setTransitionState('w-0 h-0')
    }
  }, [])

  return createPortal(
    <>
      <div className="absolute">
        {!transitionState.includes('w-0 h-0') && (
          <div className="bg-black opacity-85 backdrop-blur-sm z-10 fixed size-full" />
        )}
      </div>

      <Image
        onClick={() => {
          setTransitionState('w-0 h-0')
          zoomOut()
        }}
        src={src}
        width={window.screen.width}
        height={window.screen.height}
        alt={alt || 'Gallery image'}
        style={{zIndex: 500000}}
        priority
        loading="eager"
        className={`fixed rounded-xl top-0 bottom-0 left-0 right-0 m-auto object-contain transition-all duration-700 ease-in-out ${transitionState} p-4 !cursor-zoom-out`}
      />
    </>,
    document.body
  )
}

export default EnlargedImage

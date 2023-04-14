import React, { useEffect, useState } from 'react'

type Props = {
  url: string
  [key: string]: any
}

const MINIMUM_DISPLAY_TIME = 1000

const IframePanel = ({ url, ...props }: Props) => {
  const [loading, setLoading] = useState(true)
  const [startTime, setStartTime] = useState(Date.now())

  function delayHideLoading() {
    let elapsedTime = Date.now() - startTime
    if (elapsedTime < MINIMUM_DISPLAY_TIME) {
      setTimeout(() => {
        setLoading(false)
      }, MINIMUM_DISPLAY_TIME - elapsedTime)
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(() => {
      setStartTime(Date.now())
      return true
    })
  }, [url])

  return (
    <>
      <div className="w-full h-full relative">
        <iframe
          className={`w-full h-full ${loading ? 'invisible' : 'visible'}`}
          src={url}
          onLoad={delayHideLoading}
        />
        {loading && (
          <div className="w-full h-full absolute top-0 left-0 text-5xl text-center leading-[90vh]">
            loading...
          </div>
        )}
      </div>
    </>
  )
}

export default IframePanel

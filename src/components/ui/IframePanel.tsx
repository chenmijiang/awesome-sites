import React, { useState } from 'react'

type Props = {
  url: string
  [key: string]: any
}

const IframePanel = ({ url, ...props }: Props) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <div className="w-full h-full relative">
        <iframe
          className={`w-full h-full ${loading ? 'invisible' : 'visible'}`}
          src={url}
          onLoad={() => setLoading(false)}
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

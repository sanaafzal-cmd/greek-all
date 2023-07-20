import React from 'react'

//tweet data

const tweetData = {
  title: 'Your Name',
  handle: '@yourhandle'
}

export default function NameWithHandle() {
  return (
    <span className="name-with-handle">
    <span className="name">{tweetData.title}</span>
    <span className="handle">{tweetData.handle}</span>
  </span>
  )
}

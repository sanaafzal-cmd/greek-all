import React from 'react'

//message

const tweetBody = {
  body : 'Lorem ipsum dolor sit amet adipiscing elit. Nulla pretium porttitor dui. In sed dignissim mi, vitae eleifend nibh. Curabitur id tincidunt elit, vitae'
}

export default function Message() {
  return (
    <div className="message"> {tweetBody.body}</div>
  )
}

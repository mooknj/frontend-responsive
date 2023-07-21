import React from "react"

interface PropsType {
  content: ContentType
  onDarkBg?: boolean
}

type ContentType = {
  number: string
  numberColor?: "purple"
  title: string
  text: string
}

const Content = (props: PropsType) => {
  const { content, onDarkBg = false } = props
  const { number, numberColor, title, text } = content

  return (
    <div className={`content-area ${onDarkBg ? "content-area-dark" : ""}`}>
      <div className="content-header">
        <div className={`content-header-number ${numberColor}`}>{number}</div>
        <h3 className="content-header-title">{title}</h3>
      </div>

      <p className="content-text">{text}</p>
    </div>
  )
}

export default Content

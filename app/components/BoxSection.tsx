"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import Content from "./Content"

interface PropsType {
  title: string
  image: ImageProps
  contents: ContentsProps[]
  contentPosition: "left" | "right"
}

type ImageProps = {
  desktop: string
  tablet: string
  mobile: string
}

type ContentsProps = {
  number: string
  numberColor?: "purple"
  title: string
  text: string
  bgColor?: "white" | "grey" | "purple" | "darkBlue"
  onDarkBg?: boolean
}

const BoxSection = (props: PropsType) => {
  const { title, image, contents, contentPosition } = props
  const position = contentPosition === "left" ? "box-section-left" : "box-section-right"

  return (
    <div className={`box-section ${position}`}>
      <div className="bs-img-box bs-img-box-desktop">
        <img src={image.desktop} className="box-section-img" />
      </div>
      <div className="bs-img-box bs-img-box-tablet">
        <img src={image.tablet} className="box-section-img" />
      </div>

      <div className="box-section-contents">
        <div className="bs-title-box">
          <h2 className="box-section-title">{title}</h2>
        </div>

        <div className="bs-img-box bs-img-box-mobile">
          <img src={image.mobile} className="box-section-img" />
        </div>

        <div className="bs-content-desktop">
          {contents?.map((content, index) => (
            <div key={index} className={`bs-content-box bs-content-box-${content.bgColor}`}>
              <Content
                content={{ number: content.number, title: content.title, text: content.text, numberColor: content.numberColor }}
                onDarkBg={content.onDarkBg}
              />
            </div>
          ))}
        </div>

        <div className="bs-content-mobile">
          <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }}>
            {contents?.map((content, index) => (
              <SwiperSlide key={index}>
                <div className={`bs-content-box bs-content-box-${content.bgColor}`}>
                  <Content
                    content={{ number: content.number, title: content.title, text: content.text, numberColor: content.numberColor }}
                    onDarkBg={content.onDarkBg}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default BoxSection

import React from "react"
import BoxSection from "./components/BoxSection"

export default function Home() {
  return (
    <div>
      <BoxSection
        title="ATHLETS"
        image={{
          desktop: "/images/footballer/desktop.png",
          tablet: "/images/footballer/tablet.png",
          mobile: "/images/footballer/mobile.png",
        }}
        contents={[
          {
            number: "01",
            title: "CONNECTION",
            text: "Connect with coaches directly, you can ping coaches to view profile.",
            bgColor: "white",
          },
          {
            number: "02",
            title: "COLLABORATION",
            text: "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
            bgColor: "grey",
          },
          {
            number: "03",
            title: "GROWTH",
            text: "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
            onDarkBg: true,
            bgColor: "purple",
          },
        ]}
        contentPosition="right"
      />

      <BoxSection
        title="PLAYERS"
        image={{
          desktop: "/images/basketball/desktop.png",
          tablet: "/images/basketball/tablet.png",
          mobile: "/images/basketball/mobile.png",
        }}
        contents={[
          {
            number: "01",
            title: "CONNECTION",
            text: "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
            bgColor: "white",
          },
          {
            number: "02",
            title: "COLLABORATION",
            text: "Work with recruiter to increase your chances of finding talented athlete.",
            bgColor: "grey",
          },
          {
            number: "03",
            numberColor: "purple",
            title: "GROWTH",
            text: "Save your time, recruit proper athlets for your team.",
            onDarkBg: true,
            bgColor: "darkBlue",
          },
        ]}
        contentPosition="left"
      />
    </div>
  )
}

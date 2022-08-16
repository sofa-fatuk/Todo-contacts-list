import React, { SVGProps } from "react"

interface Iprops extends SVGProps<SVGSVGElement> {}

function CreateIcon(props: Iprops) {
  const { width, height } = props;

  return (

    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    viewBox="0 0 495 495"
    {...props}
  >
    <path
      style={{
        fill: "#fff",
      }}
      d="M495 227.5H267.5V0h-40v227.5H0v40h227.5V495h40V267.5H495z"
    />
  </svg>
  )
}

export default CreateIcon
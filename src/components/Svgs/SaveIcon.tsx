import React from "react"
import { SVGProps } from "react"

const SaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 10 48 48"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <path
      d="m14 24 1.25 1.25M44 14 24 34l-1.25-1.25M4 24l10 10 20-20"
      stroke="#20acdf"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SaveIcon

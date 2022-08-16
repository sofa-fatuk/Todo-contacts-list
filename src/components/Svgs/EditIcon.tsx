import React, { SVGProps } from 'react'

interface Iprops extends SVGProps<SVGSVGElement> {}

function EditIcon(props: Iprops) {
  const { width, height } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={width}
      height={height}
      viewBox="0 0 2 10"
      {...props}
    >
      <defs>
        <style>
          {
          '.fil0{fill:none}.fil1,.fil2{fill:#000;fill-rule:nonzero}.fil1{fill:#000}'
        }
        </style>
      </defs>
      <g id="Layer_x0020_1">
        <g id="_370262496">
          <path id="_370262520" className="fil0" d="M0 0h6.827v6.827H0z" />
          <path id="_370262664" className="fil0" d="M.853.853h5.12v5.12H.853z" />
        </g>
        <path className="fil1" d="m1.36 4.452.997.989-.152.148-.998-.988z" />
        <path
          className="fil1"
          d="m2.205 5.59-1.218.328-.183.05.054-.183.349-1.184.172.165-.263.897.937-.255z"
        />
        <path
          className="fil2"
          d="m4.798 1.188.882.904.074.076-.076.074-3.228 3.15-.15-.15 3.153-3.078-.733-.752L1.557 4.5l-.15-.15 3.24-3.163.076-.074z"
        />
        <path
          className="fil2"
          d="M4.723 1.114a.733.733 0 0 1 1.04.012v.001a.733.733 0 0 1-.01 1.04H5.75l-.074-.075-.076-.076.002-.001a.521.521 0 0 0 .01-.739H5.61a.521.521 0 0 0-.74-.01l-.148-.152z"
        />
      </g>
    </svg>
  )
}


export default EditIcon
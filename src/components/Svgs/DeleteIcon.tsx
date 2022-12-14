import React, { SVGProps } from 'react'

interface Iprops extends SVGProps<SVGSVGElement> {}

function DeleteIcon(props: Iprops) {
  const { width, height } = props;
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={width}
        height={height}
        viewBox="0 0 40 90"
        {...props}
      >
    <path d="M52.5 6H38.456c-.11-1.25-.495-3.358-1.813-4.711C35.809.434 34.751 0 33.499 0H23.5c-1.252 0-2.31.434-3.144 1.289C19.038 2.642 18.653 4.75 18.543 6H6.5a1 1 0 1 0 0 2h46a1 1 0 1 0 0-2zM21.792 2.681C22.24 2.223 22.799 2 23.5 2h9.999c.701 0 1.26.223 1.708.681.805.823 1.128 2.271 1.24 3.319H20.553c.112-1.048.435-2.496 1.239-3.319zM10.456 54.021C10.493 55.743 11.565 59 15.364 59h28.272c3.799 0 4.871-3.257 4.907-4.958L50.376 10H8.624l1.832 44.021zM48.291 12l-1.747 41.979C46.538 54.288 46.4 57 43.636 57H15.364c-2.734 0-2.898-2.717-2.909-3.042L10.709 12h37.582z" />
    <path d="M17.5 54h24a1 1 0 1 0 0-2h-24a1 1 0 1 0 0 2zM17.5 49h24a1 1 0 1 0 0-2h-24a1 1 0 1 0 0 2zM17.5 44h24a1 1 0 1 0 0-2h-24a1 1 0 1 0 0 2z" />
  </svg>
  )
}


export default DeleteIcon
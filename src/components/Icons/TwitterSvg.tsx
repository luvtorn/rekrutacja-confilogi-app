import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

const TwitterSvg = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 20"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 
      4.932 0 0 0 23.337.365a9.864 9.864 0 0 
      1-3.127 1.195 4.916 4.916 0 0 0-8.38 
      4.482A13.945 13.945 0 0 1 1.671.896a4.916 
      4.916 0 0 0 1.523 6.574A4.897 4.897 0 0 
      1 .964 7.1v.062a4.917 4.917 0 0 0 
      3.946 4.818 4.902 4.902 0 0 
      1-2.212.084 4.919 4.919 0 0 0 
      4.588 3.417A9.867 9.867 0 0 
      1 0 17.539a13.94 13.94 0 0 0 
      7.548 2.212c9.057 0 14.01-7.506 
      14.01-14.01 0-.213-.005-.425-.014-.636A10.012 
      10.012 0 0 0 24 2.557z"
    />
  </svg>
);

export default TwitterSvg;

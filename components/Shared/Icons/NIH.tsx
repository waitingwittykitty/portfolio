import { SVGProps } from "react";

const GDCLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    viewBox="0 0 250 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path fill="#BF063B" d="M183.8,0h-12.4L210,71l-40.1,72h12.4c4.7,0,9-2.5,11.3-6.7L230.1,71L195.2,6.8C192.9,2.6,188.5,0,183.8,0z" />
      <path fill="#65666A" d="M160.5,0.5H10.8C4.8,0.5,0,5.3,0,11.3v121.4c0,6,4.8,10.8,10.8,10.8H159l40.1-72L160.5,0.5z" />
      <g>
        <polygon fill="#FFFFFF" points="65.3,85.4 33.6,37.7 23.7,37.7 23.7,103.3 33.8,103.3 33.8,56.7 64.6,103.2 64.7,103.3 75.3,103.3 75.3,37.7 65.3,37.7" />
        <rect x="87" y="37.7" fill="#FFFFFF" width="11.3" height="65.6"/>
        <polygon fill="#FFFFFF" points="150.8,37.7 150.8,65.8 120.3,65.8 120.3,37.7 109,37.7 109,103.3 120.3,103.3 120.3,76.7 150.8,76.7 150.8,103.3 162,103.3 162,37.7" />
      </g>
    </g>
  </svg>
);

export default GDCLogo;

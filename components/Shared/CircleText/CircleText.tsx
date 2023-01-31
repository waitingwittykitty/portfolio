const CircleText = ({ children, className }): JSX.Element => {
  return (
    <svg className={className} viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <path
          id="circle"
          d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text fontSize="17" fill="white">
        <textPath xlinkHref="#circle">
          {children}
        </textPath>
      </text>
    </svg>
  )
}

export default CircleText;

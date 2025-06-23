interface WavyLineProps {
  width?: number
  height?: number
  className?: string
}

export function WavyLine({
  width = 264,
  height = 18,
  className = '',
}: WavyLineProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 264 18"
      className={`${className} animate-wavy`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height }}
    >
      <path
        d="M3 9C11.6154 2.33333 20.2308 2.33333 28.8462 9C37.4615 15.6667 46.0769 15.6667 54.6923 9C63.3077 2.33333 71.9231 2.33333 80.5385 9C89.1538 15.6667 97.7692 15.6667 106.385 9C115 2.33333 123.615 2.33333 132.231 9C140.846 15.6667 149.462 15.6667 158.077 9C166.692 2.33333 175.308 2.33333 183.923 9C192.538 15.6667 201.154 15.6667 209.769 9C218.385 2.33333 227 2.33333 235.615 9C244.231 15.6667 252.846 15.6667 261.462 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  )
}

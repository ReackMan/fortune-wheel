import { Ref, forwardRef, memo, SVGProps } from 'react'

const Frame = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={208}
    ref={ref}
    viewBox={'0 0 120 208'}
    width={120}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M112 0C116.418 0 120 3.58172 120 8V200C120 204.418 116.418 208 112 208H8L7.58789 207.989C3.36114 207.775 0 204.28 0 200V8C3.09243e-06 3.58172 3.58172 0 8 0H112ZM8 2C4.6863 2 2 4.68629 2 8V200C2 203.314 4.68629 206 8 206H50.5186C50.5188 205.763 50.5622 205.521 50.6543 205.281L58.1338 185.85C58.7915 184.141 61.2085 184.141 61.8662 185.85L69.3457 205.281C69.4378 205.521 69.4812 205.763 69.4814 206H112C115.314 206 118 203.314 118 200V8C118 4.68629 115.314 2 112 2H8Z'
      }
      fill={'#FF0633'}
    />
  </svg>
)
const ForwardRef = forwardRef(Frame)
const Memo = memo(ForwardRef)

export default Memo

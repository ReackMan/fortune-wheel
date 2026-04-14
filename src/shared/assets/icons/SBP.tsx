import { Ref, forwardRef, memo, SVGProps } from 'react'

const SBP = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#SBP_svg__a)'}>
      <path
        d={'M2.00024 5.22388L4.90664 10.4189V13.5877L2.00364 18.7725L2.00024 5.22388Z'}
        fill={'#FDFDFD'}
      />
      <path
        d={'M13.1597 8.52865L15.8831 6.85945L21.4567 6.85425L13.1597 11.937V8.52865Z'}
        fill={'#FDFDFD'}
      />
      <path
        d={'M13.1441 5.1934L13.1595 12.0714L10.2463 10.2814V0L13.1441 5.1934Z'}
        fill={'#FDFDFD'}
      />
      <path
        d={'M21.4565 6.8542L15.8827 6.8594L13.1441 5.1934L10.2463 0L21.4565 6.8542Z'}
        fill={'#FDFDFD'}
      />
      <path
        d={'M13.1595 18.8016V15.4646L10.2463 13.7086L10.2479 24.0002L13.1595 18.8016Z'}
        fill={'#FDFDFD'}
      />
      <path
        d={'M15.8762 17.1473L4.90644 10.4189L2.00024 5.22388L21.4448 17.1405L15.8762 17.1473Z'}
        fill={'#FDFDFD'}
      />
      <path
        d={'M10.2483 24L13.1595 18.8014L15.8761 17.1474L21.4447 17.1406L10.2483 24Z'}
        fill={'#FDFDFD'}
      />
      <path
        d={'M2.00366 18.7727L10.2703 13.7087L7.49106 12.0035L4.90666 13.5879L2.00366 18.7727Z'}
        fill={'#FDFDFD'}
      />
    </g>
    <defs>
      <clipPath id={'SBP_svg__a'}>
        <rect fill={'white'} height={'24'} width={'24'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SBP)
const Memo = memo(ForwardRef)

export default Memo

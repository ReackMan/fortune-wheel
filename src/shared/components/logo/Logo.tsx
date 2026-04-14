import Link from 'next/link'

type Props = {
  variant: 'small' | 'large'
}

export const Logo = ({ variant }: Props) => {
  const Comp = variant === 'small' ? 'p' : 'h2'

  const compSize = variant === 'small' ? 'text-2xl leading-6' : 'text-[44px] leading-[44px]'
  const spanSize =
    variant === 'small' ? 'pt-0.5 text-[10px] leading-[10px]' : 'pt-1 text-lg leading-[18px]'

  return (
    <Link href={'/'}>
      <Comp className={`flex ${compSize} font-kelly font-normal tracking-normal`}>
        HIRO
        <span className={`inline-block rotate-270 pl-0.5 ${spanSize}`}>VPN</span>
      </Comp>
    </Link>
  )
}

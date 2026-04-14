import { Button } from '@/shared/components/button/Button'

const navItems = [
  { link: '/faq', name: 'FAQ', type: 'ghost' },
  { link: '/faq', name: 'ТАРИФЫ', type: 'ghost' },
  { link: '/faq', name: 'Скачать', type: 'primary' },
  { link: '/faq', name: 'Блог', type: 'ghost' },
  { link: '/faq', name: 'Аккаунт', type: 'outlined' },
] as const

export const Navbar = () => {
  return (
    <nav className={'pr-10 w-full hidden lg:flex justify-center gap-4'}>
      {navItems.map((item, index) => (
        <Button className={'w-full flex-1'} key={index} size={'lg'} variant={item.type}>
          <h3 className={'text-xl leading-5'}>{item.name}</h3>
        </Button>
      ))}
    </nav>
  )
}

import { Icon } from '@iconify/react'

import { Logo } from '@/shared/components/logo/Logo'

import { Navbar } from './navbar/Navbar'

export const Header = () => {
  return (
    <header className={'custom-container py-4 flex justify-between'}>
      <div className={'lg:hidden flex-1'}>
        <Icon height={'24'} icon={'material-symbols-light:menu'} width={'24'} />
      </div>
      <div className={'flex flex-1 items-center justify-center'}>
        <Logo variant={'large'} />
      </div>
      <Navbar />
      <div className={'flex flex-1 justify-end items-center gap-4 '}>
        <h3 className={'text-xl leading-5'}>РУ</h3>
        <Icon height={'24'} icon={'iconamoon:arrow-down-2-thin'} width={'24'} />
      </div>
    </header>
  )
}

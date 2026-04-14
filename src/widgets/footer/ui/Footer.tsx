import { Icon } from '@iconify/react'

import MacOS from '@/shared/assets/icons/MacOS'
import SberPay from '@/shared/assets/icons/SberPay'
import SBP from '@/shared/assets/icons/SBP'
import TPay from '@/shared/assets/icons/TPay'
import { Logo } from '@/shared/components/logo/Logo'
import { FooterColumn } from '@/widgets/footer/ui/footerColumn/FooterColumn'

const footerItems = {
  download: [
    { icon: <Icon height={'24'} icon={'ri:app-store-fill'} width={'24'} />, label: 'IOS' },
    {
      icon: <Icon height={'24'} icon={'simple-icons:googleplay'} width={'24'} />,
      label: 'Android',
    },
    {
      icon: <Icon height={'24'} icon={'material-symbols:android'} width={'24'} />,
      label: 'Android TV',
    },
    { icon: <Icon height={'24'} icon={'ri:windows-fill'} width={'24'} />, label: 'Windows' },
    { icon: <MacOS />, label: 'Mac Os' },
    { icon: <Icon height={'24'} icon={'simple-icons:linux'} width={'24'} />, label: 'Linux' },
  ],
  hiro: [
    { label: 'FAQ' },
    { label: 'Тарифы' },
    { label: 'Блог' },
    { label: 'Роутеры' },
    { label: 'Партнёрам' },
    { label: 'Аккаунт' },
  ],
  payment: [
    { icon: <SBP />, label: 'СБП' },
    { icon: <SberPay />, label: 'Sberpay' },
    { icon: <TPay />, label: 'Tinkoff Pay' },
    {
      icon: <Icon height={'24'} icon={'material-symbols-light:credit-card-outline'} width={'24'} />,
      label: 'Банковская карта',
    },
    {
      icon: <Icon height={'24'} icon={'simple-icons:tether'} width={'24'} />,
      label: 'Криптовалюта',
    },
  ],
}

export const Footer = () => {
  return (
    <footer
      className={
        'custom-container pt-10 pb-6 w-full flex flex-col border-2 border-secondary border-b-0 rounded-lg rounded-b-none'
      }
    >
      <div className={'px-6 pb-6 grid grid-cols-1 md:grid-cols-4 gap-6'}>
        <FooterColumn items={footerItems.hiro} title={<Logo variant={'small'} />} />
        <FooterColumn items={footerItems.download} title={'Скачать'} />
        <FooterColumn items={footerItems.payment} title={'Способы оплаты'} />
        <FooterColumn isSupport title={'поддержка 24/7'} />
      </div>
      <p
        className={
          'pt-4 mx-auto w-full max-sm:max-w-[217px] border-t border-secondary text-xl leading-5 text-center text-card'
        }
      >
        © 2025 Wolle Development Limited. Все права защищены.
      </p>
    </footer>
  )
}

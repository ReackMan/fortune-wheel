export const Loader = () => {
  return (
    <div className={'flex h-full max-h-[296px] items-center justify-center'}>
      <div className={'relative inline-block w-12 h-12'}>
        <div
          className={
            'w-12 h-12 rounded-full border-4 border-white border-t-4 border-r-4 border-b-transparent border-l-transparent animate-rotation'
          }
        />

        <div
          className={
            'absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-l-4 border-b-4 border-l-accent animate-rotation-reverse'
          }
        />
      </div>
    </div>
  )
}

import PokeSupport from '@/components/PokeSupport'

const PokeDashboard = ({ children, className }) => {
  return (
    <main className={`grid min-h-[100dvh] grid-rows-[auto_1fr_auto] bg-[radial-gradient(circle_at_center,_white,_#fef3c7)] ${className}`}>
      {children}
      <PokeSupport />
    </main>
  )
}

export default PokeDashboard

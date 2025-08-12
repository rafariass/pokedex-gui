const PokeMain = ({ children, className }) => {
  return (
    <main className={`w-full max-w-7xl flex flex-col items-center justify-center px-2 my-15 mx-auto ${className}`}>
      {children}
    </main>
  )
}

export default PokeMain

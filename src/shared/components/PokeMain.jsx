const PokeMain = ({ children, className }) => {
  return (
    <main className={`w-full flex flex-col items-center justify-center px-4 md:px-10 mx-auto my-15 ${className}`}>
      {children}
    </main>
  )
}

export default PokeMain

const PokeMain = ({ children, className }) => {
  return (
    <main className={`px-2 my-15 mx-auto flex items-center justify-center ${className}`}>
      {children}
    </main>
  )
}

export default PokeMain

const PokeMain = ({ children, className }) => {
  return (
    <main className={`w-full max-w-xxl flex flex-col items-center justify-center px-4 mx-auto my-15 ${className}`}>
      {children}
    </main>
  )
}

export default PokeMain

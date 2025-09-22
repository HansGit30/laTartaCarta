

const Categorias = () => {
  return (
    <>
      <h2 className="pl-5">Categorias</h2>
      <div className="w-full h-[70px] flex gap-5 items-center pl-5">
        <div className="bg-amber-300 p-2 rounded-2xl w-20 flex justify-center">
          <h2>Todos</h2>
        </div>
        <div className="bg-amber-300 p-2 rounded-2xl w-20 flex justify-center">
          <h2>Postres</h2>
        </div>
        <div className="bg-amber-300 p-2 rounded-2xl w-20 flex justify-center">
          <h2>Bebidas</h2>
        </div>
      </div></>

  )
}

export default Categorias
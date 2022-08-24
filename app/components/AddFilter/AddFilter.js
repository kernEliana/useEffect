const React = require("react");
const { useState } = React;
const FilterList = require('./../FilterList');

const AddFilter = () => {
  const [filtros, setFiltros] = useState({})

  const handleAgregarRango=(e)=> {
    e.preventDefault()
    const min = e.target[0].value
    const max = e.target[1].value
    setFiltros( filtros => ({
      ...filtros,
      precio: `${min}-${max}`
  }))
  console.log(filtros)
  }
  const handleAgregarCategoria=(e)=> {
    e.preventDefault()
    const categoria = e.target[0].value
    setFiltros( filtros => ({
      ...filtros, [categoria]:categoria
    }))
    console.log(filtros)
  }
  return (
    <>
    <form onSubmit={handleAgregarRango}>
      <label htmlFor="min">Rango Minimo</label>
      <input type="number" id="min" />
      <label htmlFor="max">Rango Maximo</label>
      <input type="number" id="max" />
      <button type="submit">Agregar rango de precio</button>
    </form>
       <br></br> 
    <form onSubmit={handleAgregarCategoria}>   
      <label htmlFor="category">Filtro por Categoria</label>
      <input type="text" id="category" />
      <button type="submit">Agregar filtro por categoria</button>
    </form>
    <FilterList filtros={filtros} setFiltros={setFiltros}/>
    </>
  );
};
module.exports = AddFilter;

const React = require("react");

const FilterList = ({ filtros, setFiltros }) => {

  const handleClickEliminar = (key) => {
    setFiltros(filtros => {
        const copy = {...filtros};
        delete copy[key];
        return copy;
      });
  };
  return (
    <>
      <h2>Filtros</h2>
      <ul>
        {Object.keys(filtros).map((filtro) => (
          <li>
            {filtros[filtro]}
            <button onClick={()=>handleClickEliminar(filtro)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
};
module.exports = FilterList;

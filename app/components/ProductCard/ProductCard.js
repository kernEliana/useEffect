const React = require("react");
const PropTypes = require("prop-types");
const Image = require("nordic/image");
const { useState, useEffect, useRef } = React;

const ProductCard = (props) => {
  const { title, id, thumbnail, price, i18n, addCar, removeCar } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFav = (id) => {
    !isFav ? addCar(id) : removeCar(id);
    setIsFav((isFav) => !isFav);
  };

  return (
    <>
      <li key={id}>
        <h3>{i18n.gettext(title)}</h3>
        <Image src={thumbnail} alt={i18n.gettext(title)} lazyload="off" />
        <p
          style={{
            backgroundColor: "#ff8d3b",
            borderRadius: "5px",
            textAlign: "center",
            width: "75px",
          }}
        >
          ${price}
        </p>
        <div>
          <label htmlFor="productQuant" id="quant">Cantidad de Productos</label>
          <input type={'number'} id="productQuant"/>
          <button
            aria-label="Agregar producto al Carrito"
            onClick={(e) => handleFav(id)}>Agregar al Carrito
          </button>
        </div>
      </li>
    </>
  );
};
ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
module.exports = ProductCard;

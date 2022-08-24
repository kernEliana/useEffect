const React = require("react");
const Script = require("nordic/script");
const serialize = require("serialize-javascript");
const Head = require("nordic/head");
const { injectI18n } = require("nordic/i18n");
const Image = require("nordic/image");
const ProductList = require("../../components/ProductList");
const Style = require('nordic/style')

const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
});

const { useState, useEffect, useRef } = React;

/**
 * View Component Using Page. This is the same component located under pages/demo/view but it uses the Page Component
 */
function View(props) {
  const { i18n, translations, size} = props; // ssr

  const preloadedState = {
    i18n,
    translations,
    size,
  };


  const [productList, setProductList] = useState([]);
  console.log(productList)

  useEffect(() => {
    restclient.get('/getProducts', {
        params: {
            name: 'motorola',
            limit: 5
        },
    })
        .then((response) => setProductList(response.data))
        .catch(() => setProductList([]));
  }, [])

  return (
    <>
      <Head>
        <title>{i18n.gettext("Product List")}</title>
      </Head>

      <ProductList productList={productList} size={size} i18n={i18n} />
      <Style href="productList.css"/>
      <Script>
        {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, {
             isJSON: true,
           })}
       `}
      </Script>
      {/* Dependencias cargadas en el cliente */}
      <Script src="vendor.js" />
      {/* Carga el archivo de cliente de la pagina */}
      <Script src="productList.js" />
    </>
  );
}

module.exports = injectI18n(View);

const React = require("react");
const Script = require("nordic/script");
const serialize = require("serialize-javascript");
const AddFilter = require("../../components/AddFilter");

function View(props) {
  const {} = props;
  const preloadedState = {};
  return (
    <>
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, {
            isJSON: true,
          })};
          console.log('Forms page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="forms.js" />
      <AddFilter />
    </>
  );
}

module.exports = View;

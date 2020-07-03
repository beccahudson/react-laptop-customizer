import React from "react";

import Feature from "../Feature/Feature";

export default function FeatureCategory(props) {
  const { feature, idx } = props;
  const featureHash = feature + "-" + idx;
  const options = props.features[feature].map((item, itemIdx) => (
    <Feature {...props} item={item} itemIdx={itemIdx} key={itemIdx} />
  ));

  // FeatureCategory
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}

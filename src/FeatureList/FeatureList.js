import React from "react";

import FeatureCategory from "../FeatureCategory/FeatureCategory";

export default function FeatureList(props) {
  const features = Object.keys(props.features).map((feature, idx) => (
    <FeatureCategory {...props} feature={feature} idx={idx} key={idx} />
  ));

  return features;
}

import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "MarijuanaDispensery.",
  description: "We sell the best products for afordable price ",
  keyword: "Marijuana, X, Y, Z",
};

export default Meta;

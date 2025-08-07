import React from "react";
import IntroDivider from "../../../../../../components/Divider/Divider";

const paymentdata = [
  {
    id: 1,
    name: "Full Time Plan",
    price: 500,
    description:
      "Comprehensive plan covering all aspects of full-time employment.",
  },
  {
    id: 2,
    name: "Part Time Plan",
    price: 300,
    description:
      "Flexible plan suitable for part-time engagements with essential features.",
  },
  {
    id: 3,
    name: "Contractor Plan",
    price: 400,
    description:
      "Specialized plan designed for contractors with unique requirements.",
  },
];

const FullTimePaymant = () => {
  return (
    <div>
      <IntroDivider paymentdata={paymentdata} />
    </div>
  );
};

export default React.memo(FullTimePaymant);

import React from "react";
import IntroDivider from "../../../../../../components/Divider/Divider";

const paymentdata = [
  {
    id: 1,
    name: "Toothbrush",
    price: 400,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 2,
    name: "Toothpaste",
    price: 200,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 3,
    name: "Shampoo",
    price: 300,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 4,
    name: "Conditioner",
    price: 250,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 5,
    name: "Body Wash",
    price: 350,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 6,
    name: "Lotion",
    price: 150,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 7,
    name: "Deodorant",
    price: 180,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 8,
    name: "Face Wash",
    price: 220,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
];

const LastTimePaymant = () => {
  return (
    <div>
      <IntroDivider paymentdata={paymentdata} />
    </div>
  );
};

export default React.memo(LastTimePaymant);

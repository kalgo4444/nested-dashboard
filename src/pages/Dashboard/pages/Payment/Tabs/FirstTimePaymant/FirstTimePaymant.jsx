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
  {
    id: 9,
    name: "Sunscreen",
    price: 280,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 10,
    name: "Hair Oil",
    price: 320,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 11,
    name: "Face Cream",
    price: 270,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 12,
    name: "Lip Balm",
    price: 130,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 13,
    name: "Hand Sanitizer",
    price: 160,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 14,
    name: "Shaving Cream",
    price: 190,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 15,
    name: "Razor",
    price: 210,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 16,
    name: "Cotton Swabs",
    price: 140,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 17,
    name: "Nail Clipper",
    price: 170,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
  {
    id: 18,
    name: "Foot Cream",
    price: 200,
    description:
      "Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.",
  },
];

const FirstTimePaymant = () => {
  return (
    <div>
      <IntroDivider paymentdata={paymentdata} />
    </div>
  );
};

export default React.memo(FirstTimePaymant);

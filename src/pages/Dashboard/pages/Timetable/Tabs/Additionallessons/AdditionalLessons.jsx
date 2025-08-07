import React from "react";
const TableData = React.lazy(() =>
  import("../../../../../../components/Table/TableData")
);

const tabledata = [
  {
    id: 1,
    name: "Matematika",
    calories: 48,
    fat: "Aliyev",
    carbs: 30,
    protein: 5,
  },
  {
    id: 2,
    name: "Fizika",
    calories: 30,
    fat: "Valiyev",
    carbs: 20,
    protein: 3,
  },
  {
    id: 3,
    name: "Kimyo",
    calories: 25,
    fat: "Saidov",
    carbs: 15,
    protein: 4,
  },
  {
    id: 4,
    name: "Biologiya",
    calories: 20,
    fat: "Xolmatov",
    carbs: 10,
    protein: 2,
  },
  {
    id: 5,
    name: "Ingliz tili",
    calories: 15,
    fat: "Rahimov",
    carbs: 5,
    protein: 1,
  },
];

const AdditionalLessons = () => {
  return (
    <div>
      <TableData tabledata={tabledata} />
    </div>
  );
};

export default React.memo(AdditionalLessons);

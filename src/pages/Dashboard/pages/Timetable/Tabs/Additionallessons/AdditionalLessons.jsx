import React from "react";
const TableData = React.lazy(() =>
  import("../../../../../../components/Table/TableData")
);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const lessons = [
  createData("Matematika", 48, "Aliyev", 30, 5),
  createData("Fizika", 42, "Karimova", 28, 4),
  createData("Ingliz tili", 36, "Smith", 25, 3),
  createData("Kimyo", 40, "Rahmonov", 27, 4),
  createData("Biologiya", 38, "Nazarova", 26, 3),
  createData("Tarix", 35, "Saidov", 29, 3),
  createData("Geografiya", 34, "To‘xtayev", 31, 2),
  createData("Informatika", 45, "Rustamov", 24, 4),
  createData("Adabiyot", 39, "Yusufova", 33, 3),
  createData("Ona tili", 37, "Jabborov", 32, 3),
];

const AdditionalLessons = () => {
  return (
    <div>
      <TableData tabledata={lessons} />
    </div>
  );
};

export default React.memo(AdditionalLessons);

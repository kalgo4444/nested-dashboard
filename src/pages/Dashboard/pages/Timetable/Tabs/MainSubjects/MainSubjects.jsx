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
];

const MainSubjects = () => {
  return (
    <div>
      <TableData tabledata={lessons} />
    </div>
  );
};

export default React.memo(MainSubjects);

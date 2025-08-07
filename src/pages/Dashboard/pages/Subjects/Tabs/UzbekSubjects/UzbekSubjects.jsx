import React from "react";
const Article = React.lazy(() =>
  import("../../../../../../components/Article/Article")
);

const UZB_SUBJECTS = [
  {
    id: 1,
    title: "O'zbek Tili",
    description: "O'zbek tili darslari haqida ma'lumotlar",
  },
  {
    id: 2,
    title: "Adabiyot",
    description: "Adabiyot darslari haqida ma'lumotlar",
  },
  {
    id: 3,
    title: "Tarix",
    description: "Tarix darslari haqida ma'lumotlar",
  },
  {
    id: 4,
    title: "Geografiya",
    description: "Geografiya darslari haqida ma'lumotlar",
  },
  {
    id: 5,
    title: "Biologiya",
    description: "Biologiya darslari haqida ma'lumotlar",
  },
  {
    id: 6,
    title: "Kimyo",
    description: "Kimyo darslari haqida ma'lumotlar",
  },
  {
    id: 7,
    title: "Matematika",
    description: "Matematika darslari haqida ma'lumotlar",
  },
  {
    id: 8,
    title: "Informatika",
    description: "Informatika darslari haqida ma'lumotlar",
  },
];

const UzbekSubjects = () => {
  return (
    <div>
      <Article articledata={UZB_SUBJECTS} />
    </div>
  );
};

export default React.memo(UzbekSubjects);

import React from "react";
import Article from "../../../../../../components/Article/Article";
const RUS_SUBJECTS = [
  {
    id: 1,
    title: "Русский Язык",
    description: "Русский язык darslari haqida ma'lumotlar",
  },
  {
    id: 2,
    title: "Литература",
    description: "Литература darslari haqida ma'lumotlar",
  },
  {
    id: 3,
    title: "История",
    description: "История darslari haqida ma'lumotlar",
  },
  {
    id: 4,
    title: "География",
    description: "География darslari haqida ma'lumotlar",
  },
  {
    id: 5,
    title: "Биология",
    description: "Биология darslari haqida ma'lumotlar",
  },
  {
    id: 6,
    title: "Химия",
    description: "Химия darslari haqida ma'lumotlar",
  },
  {
    id: 7,
    title: "Математика",
    description: "Математика darslari haqida ma'lumotlar",
  },
  {
    id: 8,
    title: "Информатика",
    description: "Информатика darslari haqida ma'lumotlar",
  },
];

const RussianSubjects = () => {
  return (
    <div>
      <Article articledata={RUS_SUBJECTS} />
    </div>
  );
};

export default React.memo(RussianSubjects);

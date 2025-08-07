import React from "react";
import MediaCard from "../../../../../../components/Card/Card";

const librarydata = [
  {
    id: 1,
    name: "Book One",
    description: "This is the description for Book One.",
  },
  {
    id: 2,
    name: "Book Two",
    description: "This is the description for Book Two.",
  },
  {
    id: 3,
    name: "Book Three",
    description: "This is the description for Book Three.",
  },
  {
    id: 4,
    name: "Book Four",
    description: "This is the description for Book Four.",
  },
  {
    id: 5,
    name: "Book Five",
    description: "This is the description for Book Five.",
  },
];

const MostPopular = () => {
  return (
    <div>
      <MediaCard librarydata={librarydata} />
    </div>
  );
};

export default React.memo(MostPopular);

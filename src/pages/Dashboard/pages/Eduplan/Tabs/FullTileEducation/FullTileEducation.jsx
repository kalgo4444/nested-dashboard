import React from "react";
import AccordionElement from "../../../../../../components/AccordionElement/AccordionElement";

const AccordionData = [
  {
    id: 1,
    title: "Birinchi sinf",
    description:
      "Birinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Birinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 2,
    title: "Ikkinchi sinf",
    description:
      "Ikkinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Ikkinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 3,
    title: "Uchinchi sinf",
    description:
      "Uchinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Uchinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 4,
    title: "To'rtinchi sinf",
    description:
      "To'rtinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. To'rtinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 5,
    title: "Beshinchi sinf",
    description:
      "Beshinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Beshinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 6,
    title: "Oltinchi sinf",
    description:
      "Oltinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Oltinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 7,
    title: "Yettinchi sinf",
    description:
      "Yettinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Yettinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 8,
    title: "Sakkizinchi sinf",
    description:
      "Sakkizinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Sakkizinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 9,
    title: "To'qqizinchi sinf",
    description:
      "To'qqizinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. To'qqizinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 10,
    title: "O'ninchi sinf",
    description:
      "O'ninchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'ninchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 11,
    title: "O'n birinchi sinf",
    description:
      "O'n birinchi sinf uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n birinchi sinf o'quvchilari uchun mo'ljallangan ta'lim dasturi.",
  },
];

const FullTileEducation = () => {
  return (
    <div>
      <AccordionElement accordiondata={AccordionData} />
    </div>
  );
};

export default React.memo(FullTileEducation);

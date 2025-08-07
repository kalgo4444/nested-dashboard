import React from "react";
import AccordionElement from "../../../../../../components/AccordionElement/AccordionElement";

const AccordionData = [
  {
    id: 1,
    title: "Birinchi kurs",
    description:
      "Birinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Birinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 2,
    title: "Ikkinchi kurs",
    description:
      "Ikkinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Ikkinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 3,
    title: "Uchinchi kurs",
    description:
      "Uchinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Uchinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 4,
    title: "To'rtinchi kurs",
    description:
      "To'rtinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. To'rtinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 5,
    title: "Beshinchi kurs",
    description:
      "Beshinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Beshinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 6,
    title: "Oltinchi kurs",
    description:
      "Oltinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Oltinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 7,
    title: "Yettinchi kurs",
    description:
      "Yettinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Yettinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 8,
    title: "Sakkizinchi kurs",
    description:
      "Sakkizinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. Sakkizinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 9,
    title: "To'qqizinchi kurs",
    description:
      "To'qqizinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. To'qqizinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 10,
    title: "O'ninchi kurs",
    description:
      "O'ninchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'ninchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 11,
    title: "O'n birinchi kurs",
    description:
      "O'n birinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n birinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 12,
    title: "O'n ikkinchi kurs",
    description:
      "O'n ikkinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n ikkinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 13,
    title: "O'n uchinchi kurs",
    description:
      "O'n uchinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n uchinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 14,
    title: "O'n to'rtinchi kurs",
    description:
      "O'n to'rtinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n to'rtinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 15,
    title: "O'n beshinchi kurs",
    description:
      "O'n beshinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n beshinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 16,
    title: "O'n oltinchi kurs",
    description:
      "O'n oltinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n oltinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 17,
    title: "O'n yettinchi kurs",
    description:
      "O'n yettinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n yettinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 18,
    title: "O'n sakkizinchi kurs",
    description:
      "O'n sakkizinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n sakkizinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 19,
    title: "O'n to'qqizinchi kurs",
    description:
      "O'n to'qqizinchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n to'qqizinchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
  {
    id: 20,
    title: "O'n o'ninchi kurs",
    description:
      "O'n o'ninchi kurs uchun ta'lim rejalari va dars jadvali haqida ma'lumotlar. O'n o'ninchi kurs talabalari uchun mo'ljallangan ta'lim dasturi.",
  },
];

const CorrespondenceEducation = () => {
  return (
    <div>
      <AccordionElement accordiondata={AccordionData} />
    </div>
  );
};

export default React.memo(CorrespondenceEducation);

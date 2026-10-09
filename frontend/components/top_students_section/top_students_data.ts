export type TopStudent = {
  name: string;
  image: string;
  score: string;
  grade: string;
  field: string;
};

export const top_students_data: TopStudent[] = [
  {
    name: "مهبد تاکایدی",
    image: "/students/student-1.jpg",
    score: "20.00",
    grade: "یازدهم",
    field: "علوم تجربی",
  },
  {
    name: "آرش متقی",
    image: "/students/student-2.jpg",
    score: "19.75",
    grade: "یازدهم",
    field: "علوم تجربی",
  },
  {
    name: "ماهان ظاهری",
    image: "/students/student-5.jpg",
    score: "19.65",
    grade: "یازدهم",
    field: "علوم تجربی",
  },
  {
    name: "دکتر هلاکویی",
    image: "/students/student-3.jpg",
    score: "19.60",
    grade: "دوازدهم",
    field: "ریاضی فیزیک",
  },
  {
    name: "آلبرت انیشتن",
    image: "/students/student-6.jpg",
    score: "21",
    grade: "یازدهم",
    field: "ریاضی فیزیک",
  },
];
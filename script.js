const students = [
  {id: 1, name: "Israel Chidera", grades: [97,98,99]},
  {id: 2, name: "Joshua Simon", grades: [88,78,89]},
  {id: 3, name: "GB Williams", grades: [93,98,69]},
  {id: 4, name: "Fola Folashade", grades: [67,68,79]}
]

// console.log(students);

const calculateAverageGrades = (students) => {
  return students.map((student) => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    const averageGrade = total / student.grades.length;
    return {
      id: student.id,
      name: student.name,
      averageGrade: averageGrade
    };
  });
};

// console.log(calculateAverageGrades(students));

const findTopStudent = (students) => {
    const studentsWithAverages = students.map((student) =>   {
      const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
      return { ...student, averageGrade };
  });
  
    const maxAverage = Math.max(...studentsWithAverages.map((student) => student.averageGrade));
    return studentsWithAverages.find((student) => student.averageGrade === maxAverage);
};

// console.log(findTopStudent(students));

const sortStudentsByGrade = (students) => {
  return students
    .map((student) => ({
      ...student,
      averageGrade: student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
    }))
    .sort((a, b) => b.averageGrade - a.averageGrade);
};

// console.log(sortStudentsByGrade(students));
function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] <= 99) {
      let cont = 0;
      let diference = 0;

      for (let j = grades[i]; j <= 100; j++) {
        if (j % 5 === 0 && cont === 0) {
          diference = j - grades[i];
          cont++;
          if (diference <= 2) {
            grades[i] = j;
            break;
          }
        }
      }
    }
  }

  return grades;
}

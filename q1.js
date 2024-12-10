function SortStudentMarks(input1, input2, input3) {
  
  function calculateTotalMarks(arr) {
    const students = input1;
    const subjects = input2;
    let subjectAverages = Array(subjects).fill(0);

    if(students >2){
        for (let j = 0; j < subjects; j++) {
            let sum = 0;
            for (let i = 0; i < students; i++) {
              sum += arr[i][j];
            }
            subjectAverages[j] = sum / students;
          }
    }
    else if(students===1){
        subjectAverages=input3[0];
    }

    console.log(subjectAverages);
    let lowerAverageIndex = 0;
    for (let j = 1; j <subjects; j++) {
      if (subjectAverages[j] < subjectAverages[lowerAverageIndex]) {
        lowerAverageIndex = j;
      }
    }
    console.log(lowerAverageIndex);

    const totalMarks = Array(students).fill(0);
    for (let i = 0; i < students; i++) {
      for (let j = 0; j < subjects; j++) {
        if(lowerAverageIndex!=j)
            totalMarks[i] += arr[i][j];
      }
    }

   return totalMarks;
}


return calculateTotalMarks(input3);

}


console.log(SortStudentMarks(3,3,[[50,30,70],[30,70,99],[99,70,35]]));
console.log(SortStudentMarks(1,6,[[75,76,65,87,87,53]]));
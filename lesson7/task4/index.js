// input - arr1, arr2
// output - arr3

// 1. iterate array allStudentsList
// 2. compare with array studentsForRetake, delete them from arr1
// 3. create new array

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  return allStudentsList
    .filter(name => !studentsForRetake.includes(name))
    .map(name => `Good job, ${name}`);
};

// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']
console.log(allStudTest1);
console.log(retakeStudTest1);

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []

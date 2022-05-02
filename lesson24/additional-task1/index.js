export const studentsBirthDays = students => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const result = {};

  const arr = [...students].sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate));
  console.log(arr);

  arr.map(student => {
    const birthMonth = months[new Date(student.birthDate).getMonth()];
    if (result[birthMonth]) {
      result[birthMonth].push(student.name);
    } else result[birthMonth] = [student.name];
  });

  return result;
};

const studentsArr = [
  {
    name: 'Tom',
    birthDate: '01/25/2010',
  },
  {
    name: 'Ben',
    birthDate: '01/17/2008',
  },
  {
    name: 'Sam',
    birthDate: '05/15/2010',
  },
  {
    name: 'Kate',
    birthDate: '05/5/2010',
  },
  {
    name: 'Jake',
    birthDate: '02/10/2010',
  },
];

console.log(studentsArr);
console.log(studentsBirthDays(studentsArr));

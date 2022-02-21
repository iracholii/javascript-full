// input - arr, boolean
// output - arr

function sortContacts(contactsArr, asc) {
  if (!Array.isArray(contactsArr)) {
    return null;
  }
  if (asc === false) {
    return contactsArr.sort((a, b) => b.name.localeCompare(a.name));
  }
  return contactsArr.sort((a, b) => a.name.localeCompare(b.name));
}

const test = [
  { name: 'Tom', phoneNumber: '777' },
  { name: 'Ann', phoneNumber: '222' },
  { name: 'Kate', phoneNumber: '888' },
  { name: 'Jake', phoneNumber: '999' },
  { name: 'John', phoneNumber: '111' },
  { name: 'Lola', phoneNumber: '333' },
];

const test2 = [
  { name: 'Ali', phoneNumber: '777' },
  { name: 'Ann', phoneNumber: '222' },
  { name: 'Kate', phoneNumber: '888' },
  { name: 'Jake', phoneNumber: '999' },
  { name: 'John', phoneNumber: '111' },
  { name: 'Barbara', phoneNumber: '333' },
];

console.log(sortContacts(test, true));
console.log(sortContacts(test2));
console.log(sortContacts(5));

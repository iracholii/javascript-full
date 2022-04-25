const getTitle = () => {
  const titleElem = document.querySelector('.title');
  return titleElem.textContent;
};

getTitle();

const getDescription = () => {
  const titleElem = document.querySelector('.about');
  return titleElem.innerText;
};

getDescription();

const getPlans = () => {
  const titleElem = document.querySelector('.plans');
  return titleElem.innerHTML;
};

getPlans();

const getGoal = () => {
  const titleElem = document.querySelector('.goal');
  return titleElem.outerHTML;
};

getGoal();

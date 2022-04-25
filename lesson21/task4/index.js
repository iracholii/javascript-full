export const getTitle = () => {
  const titleElem = document.querySelector('.title');
  return titleElem.textContent;
};

getTitle();

export const getDescription = () => {
  const titleElem = document.querySelector('.about');
  return titleElem.innerText;
};

getDescription();

export const getPlans = () => {
  const titleElem = document.querySelector('.plans');
  return titleElem.innerHTML;
};

getPlans();

export const getGoal = () => {
  const titleElem = document.querySelector('.goal');
  return titleElem.outerHTML;
};

getGoal();

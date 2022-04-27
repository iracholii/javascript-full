const arenaElem = document.querySelector('.arena');

const generateNumbersRange = length => {
  const numbersArr = [];
  for (let i = 1; i <= length; i += 1) {
    numbersArr.push(i);
  }
  return numbersArr;
  //   return [...Array(length).keys()];
};

const getSectorSeats = () => {
  const seatText = generateNumbersRange(10)
    .map(seatNumber => ` <div class='sector__seat' data-seat-number="${seatNumber}"></div> `)
    .join('');
  return seatText;
};

const getSectorLines = () => {
  const lineText = generateNumbersRange(10)
    .map(
      lineNumber =>
        ` <div class='sector__line' data-line-number="${lineNumber}"> ${getSectorSeats()} </div> `,
    )
    .join('');
  return lineText;
};

const renderArena = () => {
  const sectorText = generateNumbersRange(3)
    .map(
      sectorNumber =>
        ` <div class='sector' data-sector-number="${sectorNumber}"> ${getSectorLines()} </div> `,
    )
    .join('');

  arenaElem.innerHTML = sectorText;
};

renderArena();

const onClickHandler = event => {
  if (!event.target.classList.contains('sector__seat')) {
    return;
  }

  const boardSpanElem = document.querySelector('.board__selected-seat');

  const { seatNumber } = event.target.dataset;
  const { lineNumber } = event.target.closest('.sector__line').dataset;
  const { sectorNumber } = event.target.closest('.sector').dataset;

  boardSpanElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onClickHandler);

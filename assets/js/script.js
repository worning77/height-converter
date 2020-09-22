//start here

const convert = document.querySelector('.button');

convert.addEventListener('click', () => {
  const feet = document.querySelector('.feet');
  const inches = document.querySelector('.inches');
  const meters = document.querySelector('.meters');
  const text = document.querySelector('p');

  let feetValue = parseFloat(feet.value);
  let inchesValue = parseFloat(inches.value);

  if (inchesValue > 11) {
    text.classList.add('warning-on');
  } else {
    text.classList.remove('warning-on');
  }

  let outCome = feetValue * 0.3048 + inchesValue * 0.0254;

  let meter = (meters.value = outCome.toFixed(2));
  return meter;
});

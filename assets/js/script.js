// const changed = () => {
//   const amountField = document.querySelector('.amount');
//   const qualityField = document.querySelector('.quality');
//   const totalField = document.querySelector('.total');

//   let amountValue = parseFloat(amountField.value);
//   const qualityValue = qualityField.value;

//   let percentage = 0;
//   if (qualityValue == 'poor') {
//     percentage = 0.1;
//   } else if (qualityValue == 'average') {
//     percentage = 0.2;
//   } else if (qualityValue == 'great') {
//     percentage = 0.25;
//   }

//   let total = (amountValue * (1 + percentage)).toFixed(2);
//   return (totalField.value = total);
// };

// const amountField = document.querySelector('.amount');
// const qualityField = document.querySelector('.quality');

// amountField.addEventListener('change', changed);
// qualityField.addEventListener('change', changed);

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

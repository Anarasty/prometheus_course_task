// Books count input functional
const refs = {
    price: document.querySelector('#price_number'),
    count: document.querySelector('#count_inp'),
    totalPrice: document.querySelector('#price_total_number'),
    form: document.querySelector(".count_box"),
  };
  
  refs.form.onchange = (e) => {
    e.target.value > 1 && e.target.value <= 42
      ? (refs.totalPrice.textContent = (
          Number(refs.price.textContent) * e.target.value
        ).toFixed(2))
      : (refs.count.value = 1) && alert("Please enter a value between 0 and 43!");
  };
module.exports = {
  commands: [{click_payment_option: click_payment_option}],
  elements: {}
};

function click_payment_option(option){
  const payment_option_selector = `//div[contains(@class, "PaymentList")]//span[contains(., "${option}")]`;
  console.log(payment_option_selector)
  this.api
    .useXpath()
    .click(payment_option_selector);
  return this;
}
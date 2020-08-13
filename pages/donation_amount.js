
module.exports = {
  commands: [{click_amount_donation: click_amount_donation}],
  elements: {}
};

function click_amount_donation(amount_text){
  const amount_element_selector = `//div[contains(@class, "DonationAmount")]//label[contains(., ${amount_text})]`;
  this.api
    .useXpath()
    .click(amount_element_selector);
  return this;
}
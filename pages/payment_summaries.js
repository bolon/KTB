module.exports = {
  commands: [{click_button: click_button}],
  elements: {},
  sections: {
    half_banner: {
      locateStrategy: 'xpath',
      selector: '//div[contains(@class, "BannerContainer")]',
      commands: [{}],
      elements: {
        close_banner: {selector: '//a[contains(@class, "BannerClose")]/span', locateStrategy: 'xpath'},
      }
    },
  }
};

function click_button(button_text){
  var selector_button = `//button/span[contains(., "${button_text}")]`
  this.api
    .useXpath()
    .click(selector_button);
  return this;
}
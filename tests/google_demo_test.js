module.exports = {
  'Demo test Google': function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      // .waitForElementVisible('button[name=btnG]', 1000)
      // .click('button[name=btnG]')
      // .pause(1000)
      // .assert.containsText('ol#rso li:first-child', 'Rembrandt - Wikipedia')
      .end();
  },
  'cookie test': function (browser) {
    browser
      .url('https://ogp-sample.netlify.com/')
      .waitForElementVisible('body', 1000)
      .getCookies(function (result) {
        console.log(result);
      })
      .pause(1000)
      .end();
  }
};

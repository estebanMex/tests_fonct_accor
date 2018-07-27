var urlsToTest = ['www.novotel.com/fr/france/index.shtml',
                  'www.novotel.com/de/deutschland/index.shtml'];
                  /*
                  'www.novotel.com/de/switzerland/index.shtml',
                  'www.novotel.com/es/espana/index.shtml',
                  'www.novotel.com/es/mexico/index.shtml',
                  'www.novotel.com/es/sudamerica/index.shtml',
                  'www.novotel.com/fr/africa/index.shtml',
                  'www.novotel.com/fr/canada/index.shtml',
                  'www.novotel.com/fr/switzerland/index.shtml',
                  'www.novotel.com/gb/africa/index.shtml',
                  'www.novotel.com/gb/asia/index.shtml',
                  'www.novotel.com/gb/australia/index.shtml',
                  'www.novotel.com/gb/canada/index.shtml',
                  'www.novotel.com/gb/china/index.shtml',
                  'www.novotel.com/gb/europe/index.shtml',
                  'www.novotel.com/gb/middle-east/index.shtml',
                  'www.novotel.com/gb/united-kingdom/index.shtml',
                  'www.novotel.com/gb/usa/index.shtml',
                  'www.novotel.com/it/italia/index.shtml',
                  'www.novotel.com/nl/nederland/index.shtml',
                  'www.novotel.com/pl/polska/index.shtml',
                  'www.novotel.com/pt/portugal/index.shtml',
                  'www.novotel.com/pt-br/brasil/index.shtml'];
                  */

for (var i = 0; i < urlsToTest.length; i++) {
  testFunc('http://' + urlsToTest[i]); //pre-
}

function testFunc(url) {

  casper.test.begin(url, 8, function(test) {
    casper.start(url, function() {
      this.echo(url);
    });
    
    casper.then(function() {
      var dataSrcVals;

      dataSrcVals = this.getElementsAttribute('#masterBannerContainer .wise.highlight > a > img', 'data-src');
      test.assertExists('#masterBannerContainer', 'Le #masterBannerContainer exist dans la page'); //masterBannerContainer
      this.echo('il existent', dataSrcVals.length);
      test.assertEquals(dataSrcVals.length === 7, true, 'Les masterBannerContainer contient ' + dataSrcVals.length + ' sur 7 images');


      dataSrcVals = this.getElementsAttribute('#pushOffersContainer .wise.highlight > a > img', 'data-src');
      test.assertExists('#pushOffersContainer', 'Le #pushOffersContainer exist dans la page'); //masterBannerContainer
      this.echo('il existent', dataSrcVals.length);
      test.assertEquals(dataSrcVals.length === 3, true, 'Les pushOffersContainer contient ' + dataSrcVals.length + ' sur 3 images');


      dataSrcVals = this.getElementsAttribute('#pushThematiqueContainer .wise.highlight > a > img', 'data-src');
      test.assertExists('#pushThematiqueContainer', 'Le #pushThematiqueContainer exist dans la page'); //pushDestinationContainer
      this.echo('il existent', dataSrcVals.length);
      test.assertEquals(dataSrcVals.length >= 3, true, 'Les pushThematiqueContainer contient ' + dataSrcVals.length + ' sur 3 images');


      dataSrcVals = this.getElementsAttribute('#pushDestinationContainer .wise.highlight > a > img', 'data-src');
      test.assertExists('#pushDestinationContainer', 'Le #pushDestinationContainer exist dans la page'); //pushDestinationContainer
      this.echo('il existent', dataSrcVals.length);
      test.assertEquals(dataSrcVals.length >= 3, true, 'Les pushDestinationContainer contient ' + dataSrcVals.length + ' sur 3 images');

    });


    casper.run(function() {
      test.done();
    });

  });

}

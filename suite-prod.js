casper.test.begin('hp has contrib prod', 3, function(test) {

  casper.start('http://www.mercure.com/fr/france/index.shtml', function() {});

  casper.wait(1000, function() {
    console.log('wait 1000');
  });

  casper.then(function() {
    var dataSrcVal;
    var data;

    test.assertExists('#pushOffersContainer');
    test.assertExists('#pushOffersContainer .wise.highlight:first-child > a');
    dataSrcVal = this.getElementAttribute('#pushOffersContainer .wise.highlight:first-child > a > img', 'data-src');
    data = dataSrcVal === '' ? false : true;
    console.log('data-src value ==> ', dataSrcVal);
    test.assertEquals(data, true);
  });

  casper.run(function() {
    test.done();
  });

});

/* globals casper */

casper.
start('http://www.novotel.com/fr/france/index.shtml')
  .wait(1000, function() {
    this.echo("I've waited for 1 second to load page");
  }).then(function() {
    phantomcss.screenshot('#pushOffersContainer > div:nth-child(3)', 'novotel-hp-push-offer');
  });

casper.run();

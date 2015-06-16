testApp.controller('MainController', function(){
  this.text = '';
  this.subs = getConfig();

  this.substitute = function substitute(outCurr) {
    var newText = this.text;

    for (t=0; t<this.subs.length; t++) {
      newText = replaceAll(newText, this.subs[t].originalText, this.subs[t].newText);
    }

    this.result = newText;
  };
})

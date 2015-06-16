testApp.controller('MainController', function(){
  this.text = '';
  this.newDate = dateToYMD(new Date());

  this.substitute = function substitute(outCurr) {
    this.result = replaceAll(this.text, '150616', this.newDate);
  };
})

const array = ['He was the last Beatle to learn to drive', 'He was never a vegetarian', 'He was a choir bou an a boy scout', 'He hated the sound of his own voice']
var musicians = ['John Lennon','Paul McCartney', 'George Harrison', 'Ringo Star'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}



function johnLennonFacts(array){
  var i = array[i];
  while (i > 0){
    array.push (array[i] + '!!!');
  }
  return array
}

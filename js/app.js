
var selectedKeyword;
$(document).ready(function(){
  $("select.keyword").change(function(){
    selectedKeyword = $(this).children("option:selected").val();
    console.log(selectedKeyword);
  });
});

switch(selectedKeyword){
case 'narwhal' : {
  console.log(selectedKeyword);
  break;
}
case 'rhino' : {
  console.log(selectedKeyword);
  break;
}
case 'unicorn' : {
  console.log(selectedKeyword);
  break;
}
case 'unilego' : {
  console.log(selectedKeyword);
  break;
}
case 'triceratops' : {
  console.log(selectedKeyword);
  break;
}
case 'markhor' : {
  console.log(selectedKeyword);
  break;
}
case 'mouflon' : {
  console.log(selectedKeyword);
  break;
}
case 'addax' : {
  console.log(selectedKeyword);
  break;
}
case 'chameleon' : {
  console.log(selectedKeyword);
  break;
}
case 'lizard' : {
  console.log(selectedKeyword);
  break;
}
case 'dragon' : {
  console.log(selectedKeyword);
  break;
}
}











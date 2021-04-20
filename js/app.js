var allData = [];
var selectedKeyword;
function ajax() {
  $.ajax({
    type: 'Get',
    url: 'data/page-1.json',
    dataType: 'text',
    success: function (data) {
      allData = JSON.parse(data);
      addImgs(allData);
      checkKeyword();
    },
    error: function () {
      alert('json not found');
    },
  });
}

ajax();



let knowKeyword = (arr, keyword) => {
  console.log(arr.length);
  let newArr = [];
  arr.forEach((element) => {
    if (element.keyword === keyword) {
      newArr.push(element);
    }
  });
  return newArr;
};




function checkKeyword (){
  $('select.keyword').change(function () {
    selectedKeyword = $(this).children('option:selected').val();

    switch (selectedKeyword) {
    case 'narwhal': {
      addImgs(knowKeyword(allData, 'narwhal'));
      break;
    }
    case 'rhino': {
      addImgs(knowKeyword(allData, 'rhino'));
      break;
    }
    case 'unicorn': {
      addImgs(knowKeyword(allData, 'unicorn'));
      break;
    }
    case 'unilego': {
      addImgs(knowKeyword(allData, 'unilego'));
      break;
    }
    case 'triceratops': {
      addImgs(knowKeyword(allData, 'triceratops'));
      break;
    }
    case 'markhor': {
      addImgs(knowKeyword(allData, 'markhor'));
      break;
    }
    case 'mouflon': {
      addImgs(knowKeyword(allData, 'mouflon'));
      break;
    }
    case 'addax': {
      addImgs(knowKeyword(allData, 'addax'));
      break;
    }
    case 'chameleon': {
      addImgs(knowKeyword(allData, 'chameleon'));
      break;
    }
    case 'lizard': {
      addImgs(knowKeyword(allData, 'lizard'));
      break;
    }
    case 'dragon': {
      addImgs(knowKeyword(allData, 'dragon'));
      break;
    }
    }
  });
}


const addImgs = (arr => {
  $('#main_container').empty();
  arr.forEach(item => {
    let div = $('<div> </div>').attr('class' ,item.title);
    let title = $('<h2> </h2>').text(item.title);
    let img = $('<img>').attr('src' , item.image_url);
    let horns = $('<p> </p>)').text('number of horns = '+item.horns);
    let description = $('<p> </p>').text('description: '+item.description);
    div.append(title,img,horns,description);
    $('#main_container').append(div);
  });
});

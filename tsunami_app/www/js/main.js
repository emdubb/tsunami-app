console.log('main loaded!')

$('#target').click(function(){
  console.log('click');
  $.ajax({
    type: 'POST',
    url:  'http://localhost:3000/api/token',
    data: {
      fname: "schmeeeee",
      lname: "BaNana",
      email: "test1@email.com",
      password: "abc123"
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
    success: function(data){
      console.log(data);
    }
  })
});


$("#add_student").submit(function(event){
    alert("Data added successfully!");
})

$("#update_student").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url" :`http://localhost:3000/api/student/${data.roll}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Result Updated Successfully!");
    })
})

function showPassword() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

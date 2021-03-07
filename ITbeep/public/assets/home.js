$(document).ready(function () {
    $('#submit').on('click', function () {
        let passwordInput = $('#password').val();
        let emailInput = $('#email').val();
        let nameInput = $('#name').val();
        if (passwordInput !== "" && emailInput !== "" && nameInput !== '') {
            $('#exampleModal1').modal("show")
        } else {
            swal({
                title: "please enter a valid values",
                icon: "warning",
                button: "ok",
            });
        }

    });
});
let services = [];
function setsevice(event,name){
    let is_selected = event.target.getAttribute('data-selected');

    if (is_selected == 'false') {

        event.target.style.background = "#4B0082";
        services.push(name);


    } else {
        event.target.style.background = "#7D3C98"

        services.splice( services.indexOf(name) , 1);

    }



    is_selected = event.target.getAttribute('data-selected') == 'true' ? false : true
    event.target.setAttribute('data-selected', is_selected)

}

function NextModel(){
    $("#services").val(services) ;
    $('#exampleModal1').modal("hide");
    $('#exampleModal2').modal("show");
}
function submitData(name){
    $("#time").val(name) ;
    $.ajax({
        type: "POST",
        url: "/",
        data: $('#form').serialize(),
        cache: false,
        success: function (res){
            console.log('pass');
            $('#exampleModal2').modal("hide");
            $('#exampleModal3').modal("show");

        },
        error: function(err){
            console.log(err)
            alert('error in ajax');
        }
    })
}
function reload(){
    location.reload();
}


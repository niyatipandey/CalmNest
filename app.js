const submit = document.querySelector("#contact_form");
submit.addEventListener("submit",function (event){
    event.preventDefault();
    alert("Submitted!");
    submit.reset();
});
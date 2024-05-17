function handleSubmit(){
    let inputDate = document.querySelector(".inputDate");
    let output = document.querySelector(".datefield");

    let formatedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    output.value = formatedDate;
    console.log('Formatted date is---> '+ output.value);
}
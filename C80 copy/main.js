studentArray = [];
displayStudentArray = [];

function submit() {
    for (var g = 1; g <= 4; g++) {
        var studentName = document.getElementById("name_of_list_1" + g).value;
        studentArray.push(studentName);
    }

    for (var g = 0; g < studentArray.length; g++) {
        displayStudentArray.push("<h4>Name - " + studentArray[g] + "</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = displayStudentArray;
    document.getElementById("display_name_without_commas").innerHTML = displayStudentArray.join(" ");

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function searching(){
var s= document.getElementById("s1").value
var found=0;
var j;
for(j=0; j<names_of_people.length; j++)
}
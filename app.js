
let text = document.getElementById("text");

text.addEventListener('input',function(){
    let txt = this.value;
    let char = txt.length;
    document.getElementById("char").innerHTML = char;

    txt = txt.trim();
    let word = txt.split(" ");
    let filterText = word.filter(function(rawText){
         return !rawText == " ";
    })
    document.getElementById("word").innerHTML = filterText.length;
});
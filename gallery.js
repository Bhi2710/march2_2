var count=0;

function like(){
    count += 1;
    render();
}

function dislike(){
    count -= 1;
    render();
}

function render(){
    var output = document.getElementById("op_text")
    output.innerText = count;
}
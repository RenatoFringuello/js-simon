let count = 0;
const btn = document.getElementById('btn');
btn.innerHTML = `#(${count})`;

btn.addEventListener('click', function(){
    if(count < 10){
        count ++;
    }
    else{
        setTimeout(function(){
            count = 0;
            this.innerHTML = `#(${count})`;
        },10000);
    }
    this.innerHTML = `#(${count})`;
});
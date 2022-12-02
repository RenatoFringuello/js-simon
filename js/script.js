let count = 0;
const btn = document.getElementById('btn');
btn.innerHTML = `#(${count})`;

btn.addEventListener('click', function handler(){
    if(count < 10){
        count ++;
    }
    else{
        console.log('set');
        setTimeout(() => {
            count = 0;
            this.innerHTML = `#(${count})`;
            btn.addEventListener('click', handler);
        },10000);
        btn.removeEventListener('click', handler);
    }
    this.innerHTML = `#(${count})`;
});
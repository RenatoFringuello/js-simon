let count = 0;
const btn = document.getElementById('btn');
btn.innerHTML = `#(${count})`;

btn.addEventListener('click', function handler(){
    if(count < 10){
        count ++;
    }
    else{
        this.classList.add('over-clicked');
        setTimeout(() => {
            count = 0;
            this.innerHTML = `#(${count})`;
            this.classList.remove('over-clicked');
            this.addEventListener('click', handler);
        },10000);
        this.removeEventListener('click', handler);
    }
    this.innerHTML = `#(${count})`;
});
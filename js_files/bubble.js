function createBars(numBars) {
    let nums = [];
    for (let i = 0; i < numBars; i++) {
        randInt = Math.floor(Math.random() * 100);
        nums.push(randInt);
    }
    console.log(nums);

    let bars = nums.map(num => {
        let bar = document.createElement('div');
        // bar.innerText = num;
        bar.style.height = `${(num + 1) * 8}px`;
        bar.classList.add('bar');
        // barsContainer.appendChild(bar);
        return bar;
    });
    return bars
}
let barsArr = [];
newArrayButton = document.getElementById('newArray');
let barRange = document.getElementById('numBars');


barRange.addEventListener('input', ()=>{
    let numBars = barRange.value;
    let newBars = createBars(numBars);
    barsArr = newBars;
    let barsContainer = document.getElementById('barsContainer')    
    barsContainer.replaceChildren(...barsArr);

})

async function swapElement(ele1, ele2){
    // const style1 = ele1.offsetHeight;
    // const style2 = window.getComputedStyle(ele2);
    
    ele1.style.background = 'red';
    ele2.style.background = 'red';

    const height1 = ele1.offsetHeight;
    const height2 = ele2.offsetHeight;
    let sorted = true;
    if(height1>height2){
        ele1.style.height = `${height2}px`;
        ele2.style.height = `${height1}px`;
        sorted = false;
    };
    // if(sorted){
    //     break;
    // }
        
}

bubbleSort = document.getElementById('bubbleSort');

bubbleSort.addEventListener('click', async ()=>{
    let length = barsArr.length;
    let speed = document.getElementById('speed').value;
    for(let i=0; i<length; i++){
        let lastBar;
        for(let j=0; j<length-i-1; j++){
            let curBar = barsArr[j];
            let nextBar = barsArr[j+1];
            swapElement(curBar, nextBar);
            await new Promise(resolve => setTimeout(() => {resolve()}, speed));
            curBar.style.background = 'aqua';
            nextBar.style.background = 'aqua';
            lastBar = nextBar;
        }
        barsArr[length-i-1].style.background = 'green';
        console.log('finished')
    }

})
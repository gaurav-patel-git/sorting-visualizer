function createBars(numBars) {
    let nums = [];
    for (let i = 0; i < numBars; i++) {
        randInt = Math.floor(Math.random() * 100);
        nums.push(randInt);
    }

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
let barRange = document.getElementById('numBars');

barRange.addEventListener('input', ()=>{
    let numBars = barRange.value;
    barsArr = createBars(numBars);
    let barsContainer = document.getElementById('barsContainer');    
    barsContainer.replaceChildren(...barsArr);
    
})

function swapBubble(ele1, ele2, isSorted){   
    ele1.style.background = 'red';
    ele2.style.background = 'red';

    const height1 = ele1.offsetHeight;
    const height2 = ele2.offsetHeight;
    if(height1>height2){
        ele1.style.height = `${height2}px`;
        ele2.style.height = `${height1}px`;
        return false
    };
    return isSorted;
        
}

function bubbleSort(){
    bubbleSortBtn = document.getElementById('bubbleSort');    
    bubbleSortBtn.addEventListener('click', async ()=>{
        let length = barsArr.length;
        for(let i=0; i<length; i++){
            let isSorted = true;
            for(let j=0; j<length-i-1; j++){
                let curBubble = barsArr[j];
                let nextBubble = barsArr[j+1];
                isSorted = swapBubble(curBubble, nextBubble, isSorted);
                await new Promise(resolve => setTimeout(() => {resolve()}, document.getElementById('speed').value));
                curBubble.style.background = 'aqua';
                nextBubble.style.background = 'aqua';
            }
            if (isSorted){
                console.log('Array has been sorted');
                break;
            }
            barsArr[length-i-1].style.background = 'green';
            console.log('finished');
        }
    
    })

}

bubbleSort();    

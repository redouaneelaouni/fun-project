const previousBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress');
const circle = document.querySelectorAll('.circle');



let i = 1;
/*
* 1 ==> 0   width
* 2 ==> 33% width
* 3 ==> 66% width
* 4 ==> 99% width
* */
const increment = () => {
    previousBtn.disabled = false;

    if (i === 4) {
        return;
    }

    i++;

    circle[i-1].classList.add('active');
    styleBar(i)


}
const decrement = () => {

    if (i === 1) return;

    circle[i-1].classList.remove('active');


    i--;
    styleBar(i)

}

const styleCircle = (i)=>{



    for (let j = 0; j <=i-1 ; j++) {

        console.log(circle[j])

    }
}

const styleBar = (i) => {
    console.log(i)
    switch (i) {
        case 1:
            progressBar.style.width = '0';
            previousBtn.style.cursor = 'not-allowed'
            previousBtn.disabled = true;
            break;

        case 2:
            progressBar.style.width = '33%';

            // previousBtn.style.cursor = 'pointer'
            previousBtn.disabled = false;
            nextBtn.disabled = false;
            // nextBtn.style.cursor = 'pointer'

            break;

        case 3:
            progressBar.style.width = '66%';
            // previousBtn.style.cursor = 'pointer'
            previousBtn.disabled = false;
            nextBtn.disabled = false;
            // nextBtn.style.cursor = 'pointer'
            break;
        case 4:
            progressBar.style.width = '99%';
            nextBtn.style.cursor = 'not-allowed'
            nextBtn.disabled = true;
            break;
    }

}



nextBtn.addEventListener('click',  increment);
previousBtn.addEventListener('click',  decrement);





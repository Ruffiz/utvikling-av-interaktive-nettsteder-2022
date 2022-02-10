let list = document.querySelector('.children');
let colorBtn = document.querySelector('#color');

// EventListener for input with keyup
colorBtn.addEventListener('click', () => {
        giveBorderColor();
});

const giveBorderColor = () => {
    let liList = list.children;
    console.log(liList);

    for (li = 0; li < liList.length; li++) {
        console.log(li);
        if (li % 2 === 0) {
            liList[li].style.border = "5px solid green";
        }
        else {
            liList[li].style.border = "5px solid pink";
        }
    }
};
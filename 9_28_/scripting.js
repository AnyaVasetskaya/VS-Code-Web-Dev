function createParagraph() {
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    para.textContent = "A gust of wind";
    para1.textContent = "A story past";
    para2.textContent = "Flame rekindled";
    para3.textContent = "At long last";
    // if (x = 0) {
    //     para.textContent = "A gust of wind";
    // } else if (x = 1) {
    //     para.textContent = "A story past";
    // } else if (x = 2) {
    //     para.textContent = "Flame rekindled";
    // } else {
    //     para.textContent = "At long last";
    // }
    document.body.appendChild(para);
    document.body.appendChild(para1);
    document.body.appendChild(para2);
    document.body.appendChild(para3);
}

const buttons = document.querySelectorAll('button');

// for (let i = 0; i < buttons.length; i++) {
//     button.addEventListener("click", createLine(i));
// }

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}
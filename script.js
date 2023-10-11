const AddBtn1 = document.querySelectorAll(".btn1");


AddBtn1.forEach((btn1) => {
btn1.addEventListener("click", () => {
    //Specifically located the closest parent element
    const boxColumn = btn1.closest(".box-column");

    // Create a new div element for the box
    const newBox = document.createElement("div");
    newBox.innerHTML = `<div class="box">
    <span class="tag" id="red">Youtube</span>
    <p>This is the title of the card for the thing that needs to be done.</p>
    <div class="box-footer">
        <div class="date">
            <i class="fa-solid fa-calendar-days"></i>
            <span>8 May</span>
        </div>
        <li class="comment">
            <i class="fa-solid fa-message"></i>
            <span>14</span>
        </li>
        </div>  
    </div>
    `

        //so I found the closest boxColumn and insert the newBox before the boxColumn.children[1], in this case, which is the box

        boxColumn.insertBefore(newBox, boxColumn.children[1]);


});


});



const AddBtn2 = document.querySelectorAll(".btn2");

AddBtn2.forEach((btn2) => {
    btn2.addEventListener("click", () => {
        //Specifically located the closest parent element, and use it to find its box elements
        const boxColumn = btn2.closest(".box-column");
        const box = boxColumn.querySelectorAll(".box")
        // Remove the box associated with the clicked "minus" button
        box[0].remove();
    });
});

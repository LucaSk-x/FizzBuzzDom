let text = ""
let textHtml = document.querySelector(".row")


for (let i = 0; i <= 100; i++) {

    let backGround = "bg-primary";
    if ((i % 3 === 0) && (i % 5 === 0)) {
        text = "FizzBuzz";
        backGround = "bg-danger";
    } else if (i % 5 === 0) {
        text = "Buzz";
        backGround = "bg-warning";
    } else if (i % 3 === 0) {
        text = "Fizz";
        backGround = "bg-success";
    } else {
        text = i;
        backGround = "bg-primary";
    }

    console.log(text);

    textHtml.innerHTML +=  `<div class="col-2">
                                <div class=" d-flex justify-content-center align-items-center  p-2 square ${backGround}"">
                                    <span>${text}</span>
                                </div>
                            </div>`


}


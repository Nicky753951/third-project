// let num = 49;

// if (num<50){
// console.log("ok")
// }

// else {
// console.log ("no")
// }


// for (let i = 1; i < 8; i++) {
// 	console.log(i);
// }


// function logging(a, b) {
// 	console.log (a+b)
// }

// logging (3,6);

// let answer = prompt("ok", '');
// {
//	console.log(answer);
// } 

// $(document).ready(function(){
//   $('.carousel__inner').slick({
//   	speed: 1200,
//   	// adaptiveHeight: true,
//   	prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
//   	nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
//   });
// });

// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//     });
// });


$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});

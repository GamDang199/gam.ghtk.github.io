$(document).ready(() => {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    prevArrow: $(".preSlider"),
    nextArrow: $(".nextSlider"),
  });

  $(".ul-elementor").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    customPaging: function (slider, i) {
      console.log(slider);
      return '<button href="#" class="feedback-dot w-[13px] h-[13px] mr-5 rounded-full  bg-Seeshell"></button>';
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".ul-feedback").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    autoplaySpeed: 2000,
    autoplay: true,
    dots: true,
    infinite: true,
    dotsClass: "dots",
    focusOnSelect: true,
    customPaging: function (slider, i) {
      return '<button href="#" class="feedback-dot w-[13px] h-[13px] mr-5 rounded-full  bg-Seeshell"></button>';
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".partner-content").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(window).scroll((e) => {
  let screenLen = window.scrollY;
  if (screenLen >= 170) {
    $('.page-up').css({
      "opacity" : "1",
      "z-index": "999999"
    });

    $("nav").css({
      position: "fixed",
      top: "0",
      left: "0",
      "z-index": "999999",
      width: "100%",
      animation: "fixed-header 1s ease-in-out",
    });
  } else {

    $('.page-up').css({
      "opacity" : "0",
      "z-index": "-99"
    })
    
    $("nav").css({
      position: "relative",
      animation: "",
    });
  }
});

$(".displayVideo").click((e) => {
  $(".video").css({
    display: "block",
    overflow: "hidden",
  });
});

$(".video").click((e) => {
  $(".video").css({
    display: "none",
    overflow: "none",
  });
});

const URL = "https://60d4611a61160900173cb070.mockapi.io/courses";
const displayCourse = (course) => {
  return `
        <div class="item-course mr-8 pb-[45px] bg-white rounded-[5px] shadow-cyan-500/50">
        <div class="thumnail relative">
        <div class="thum-img overflow-hidden h-[250px]">
            <img class="transition-all duration-[400] hover:scale-110 w-full h-full" src="${
              course.image
            }" alt="">
        </div>
        <div class="thum-info absolute top-2 left-3 mt-2 ml-2">
            <span class="bg-[#07294d] text-white font-[400] px-[12px] py-2 rounded-[5px]">Beginner</span>
            <button class="bg-gray-100 p-[5px] rounded-[3px]"><i class="fa-regular fa-bookmark"></i></button>
        </div>
        <div></div>
        </div>
        <div class="content-course px-[30px] pt-[20px] pb-[20px]">
        <div class="star-course flex">
            <ul class="flex mr-3">
            <li><i class="fas fa-star ml-1 text-[#ffc600]"></i></li>
            <li><i class="fas fa-star ml-1 text-[#ffc600]"></i></li>
            <li><i class="fas fa-star ml-1 text-[#ffc600]"></i></li>
            <li><i class="far fa-star ml-1 text-[#ffc600]"></i></li>
            <li><i class="far fa-star ml-1 text-[#ffc600]"></i></li>
            </ul>
            <span class="text-[13px]">3.60 (5)</span>
        </div>
        <h4 class="title-course font-[400] text-[24px] pt-[15px] pb-[20px]">${
          course.name
        }</h4>
        <ul class="view-course flex pb-[20px]">
            <li class="mr-3"><i class="fa-regular fa-user mr-2 text-gray-400"></i><span>173</span></li>
            <li class="mr-3"><i class="fa-regular fa-clock mr-2 text-gray-400"></i><span> ${
              course.duration
            }</span></li>
        </ul>
        <div class="thum-teacher flex justify-items-center pb-[30px]">
            <div class="img-teacher mr-3">
            <img class="rounded-[50%] w-[40px] h-[40px]" src="./assets/images/image_icon/teachers/teacher_1.jpg" alt="">
            </div>
            <div>
            <ul class="flex justify-items-center leading-[50px]">
                <li class="name-teacher mr-2"> by <b>${course.teacher}</b></li>
                <li class="subject-course">in <b>Languages</b></li>
            </ul>
            </div>
        </div>
        <div class="price-course relative border-solid border-gray-400 border-t-[1px] pb-5">
            <div class="price absolute top-0 left-0 mt-[30px]">${
              course.price == 0 ? "Free" : course.price
            } </div>
            <div class="enroll-course absolute top-0 right-0 mt-[30px]">
            <i class="fa-solid fa-cart-shopping text-amber-400"></i>
            <span class="text-[#B09B71]">Get Enrrolled</span>
            </div>
        </div>
        </div>
    </div>
    `;
};

const getCourses = (courses) => {
  let listCourses = "";
  courses.map((course) => {
    listCourses += displayCourse(course);
  });
  $("#list-courses").html(listCourses);
  $(".course-slide").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    autoplaySpeed: 2000,
    autoplay: true,
    prevArrow: $(".preCourse"),
    nextArrow: $(".nextCourse"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
};

const calApi = async () => {
  const data = await (await fetch(URL)).json();
  getCourses(data);
};

window.onload = (e) => {
  e.preventDefault();
  calApi();
};

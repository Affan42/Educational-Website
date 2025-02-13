import { courses, getCourse } from "./data/courses_data.js";
const preloader = document.querySelector(".preloader");
const body = document.querySelector("body");
window.addEventListener("DOMContentLoaded", () => {
  preloader.classList.add("preloader_visible");
  body.style.overflow = "hidden";
});

setTimeout(() => {
  preloader.classList.remove("preloader_visible");
  body.style.overflow = "visible";
}, 2000);

function renderCategoryHTML() {
  let categoryHTML = "";
  let categoriesArray = [];
  courses.forEach((course) => {
    let isCategoryAlreadyExists;
    categoriesArray.forEach((category) => {
      if (category.categoryName === course.category) {
        isCategoryAlreadyExists = true;
        category.categoryCourses++;
      }
    });
    if (!isCategoryAlreadyExists) {
      categoriesArray.push({
        categoryName: course.category,
        categoryCourses: 1,
      });
    }
  });

  categoriesArray.forEach((category, i) => {
    categoryHTML += `
    <div class="category_1_d js_category_d category_d" data-category-name="${
      category.categoryName
    }">
    <div class="cat_img_d">
<img src="/assets/images/category-${i + 1}.png" alt="">
    </div>
    <div class="cat_info_d">
      <p class="specific_cat_heading_p">${category.categoryName}</p>
      <p class="specific_cat_courses_no_p"> 
      ${category.categoryCourses} Courses</p>
    </div>
  </div>
  `;

    document.querySelector(".js-categories-grid").innerHTML = categoryHTML;
    document.querySelectorAll(".js_category_d").forEach((categoryButton) => {
      categoryButton.addEventListener("click", (button) => {
        window.location.href = `courses.html?categoryName=${categoryButton.dataset.categoryName}`;
      });
    });
  });
}
function renderCoursesHTML() {
  const firstSixCourses = courses.slice(0, 6)

  let coursesHTML = "";
  firstSixCourses.forEach((course) => {
    const courseId = course.id;
    const matchingCourse = getCourse(courseId);

    coursesHTML += `<div class="course" data-course-id="${courseId}">
        <div class="course_img_d">
          <img src="${matchingCourse.img}" alt="" class="course_img">
        </div>
        <div class="course_second_sec">
          <div class="course_price_and_rating">

              <p class="course_price_p orange">
                $${matchingCourse.price}
              </p>
              <p class="course_rating_p">
              
              <img src="/assets/images/star-fill.svg" alt="">
              <img src="/assets/images/star-fill.svg" alt="">
              <img src="/assets/images/star-fill.svg" alt="">
              <img src="/assets/images/star-fill.svg" alt="">
              </p>
          </div>
          <p class="course_about">
           ${matchingCourse.about}
          </p>
          <div class="course_lessons_and_students">

            <p class="course_lessons">
                          <img src="/assets/images/user-outline.svg" alt="">
              ${matchingCourse.lessons} Lessons
            </p>
            <p class="course_students">
            
              <img src="/assets/images/file-outline.svg" alt="">
              ${matchingCourse.students} Students
            </p>

          </div>
        </div>
      </div>`;
  });

  document.querySelector(".courses_grid").innerHTML = coursesHTML;
}
document.querySelectorAll(".udemy_logo").forEach((item) => {
  item.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
document.querySelectorAll(".course").forEach((course) => {
  course.addEventListener("click", () => {
    const courseId = course.dataset.courseId;
    window.location.href = ` https://youdemi223.netlify.app/courseOverview.html?courseId=${courseId}`;
  });
});
document.addEventListener("DOMContentLoaded", ()=>{
  renderCategoryHTML()
  renderCoursesHTML()
})
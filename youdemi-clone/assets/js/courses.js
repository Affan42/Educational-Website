import { courses } from "./data/courses_data.js";
import { afterPopUp, openPopUp, responseForPopUp } from "./popUp.js";
renderCoursesHTML();
function renderCoursesHTML() {
  let coursesHtml = "";
  const url = new URL(window.location.href);
  const search = url.searchParams.get("categoryName");
  let filteredCourses = courses;
  if (search) {
    filteredCourses = courses.filter((course) => {
      let matchingCategory = false;
      if (course.category === search) {
        matchingCategory = true;
      }
      return matchingCategory;
    });
  }
  filteredCourses.forEach((course) => {
    const increasedPrice = course.price + course.price * 0.4;

    coursesHtml += `
      <div class="card" data-course-id=${course.id}>
        <div class="card_bookmark">
          <p class="discounted_price">$<span class="bigger_text">${course.price}</span></p>
          <p class="time_period_course">lifetime</p>
        </div>
        <div class="card_img_d">
          <img loading="lazy"

            class="card_img"
            src="${course.img}"
            alt="image"
          />
        </div>
        <div class="card_info">
        <div class="card_clickable_part" >
          <p class="card_title">${course.about}</p>
          <p class="card_description">
           ${course.extraDetails}
          </p>
          <div class="card_extra_info">
            <p class="lessons">
    <img loading="lazy" src="/assets/images/file-outline.svg"  alt="image">

              ${course.lessons} lessons
            </p>
            <p class="students">
<img loading="lazy" src="/assets/images/user-outline.svg" alt="image">
             
              ${course.students} students
            </p>
          </div>
          </div>
          <button class="card_btn">Apply Now</button>
        </div>
      </div>
  `;
    document.querySelector(".container_for_courses").innerHTML = coursesHtml;
  });
  const popUp = document.querySelector(".crs_buy_popUp");
  document.querySelectorAll(".card").forEach((card) => {
    const courseId = card.dataset.courseId;
    card.querySelector(".card_clickable_part").addEventListener("click", () => {
      window.location.href = ` https://youdemi223.netlify.app/courseOverview.html?courseId=${courseId}`;
    });
    const continueButton = card.querySelector(".card_btn");
    continueButton.addEventListener("click", () => {
      popUp.setAttribute(`data-course-id`, courseId);
      responseForPopUp();
      openPopUp();
      afterPopUp();

      const firstMonthBth = document.querySelector(".time_period_1");
      firstMonthBth.click();
    });
  });
}

import {
  calcTotalDiscount,
  calcTotalMoney,
  cart,
  findCourse,
  removeFromCart,
  saveToStorage,
} from "./data/cart_data.js";
import { getCourse } from "./data/courses_data.js";

renderCartCourses();
function renderCartCourses() {
  let headingAndPaymentHTML = "";
  const noOfCoursesInCart = cart.length;
  const totalCoursePrice = calcTotalMoney();
  const totalIncreasedPrice = calcTotalDiscount();
  // Math.abs() makes a negative number positive(if a negative num is there) 
  const totalDiscount = Math.abs(totalIncreasedPrice - totalCoursePrice);

  let totalPercentageDiscount = 0;
  if (totalIncreasedPrice != 0) {
    totalPercentageDiscount = (totalDiscount * 100) / totalIncreasedPrice;
  }

  headingAndPaymentHTML = ` <div class="main_heading">
    <p class="c_left_sec_heading_p">Shopping Cart</p>
    </div>
    <div class="crs_left_and_right_section">
  <div class="c_left_sec_d">
    <p class="num_of_courses_p">${noOfCoursesInCart} Courses in Cart</p>
   <div class="courses_collection_d">

    </div>
  </div>
  <div class="c_right_sec">
    <div class="price_details_d">
      <p class="total_details_heading">
        Price Details (${noOfCoursesInCart} Items)
      </p>
      <div class="about_discount_d">
<div class="total_product_price_d ">
  <p class="total_product_price_p">Total Product Price</p>
  <p class="total_product_price_amount">+ $${totalCoursePrice}</p>
</div>
<div class="total_discount_d ">
  <p class="total_discount_p">Total Discount Percentage</p>
  <p class="total_discount_amount">- ${Math.round(totalPercentageDiscount)}%</p>
</div>
<div class="discount_percentage_d ">
  <p class="discount_percentage_p">Total Discounts</p>
  <p class="discount_percentage_amount">-$${Math.round(totalDiscount)}</p>
</div>


      </div>
    </div>
    <div class="total_price_and_buy_btn">
      <div class="total_price_d">
        <p class="order_total_text">
          Order Total
        </p>
        <p class="order_total_amount">
          $${totalCoursePrice}
        </p>
      </div>
      <div class="about_discounts"></div>
      <button class="buy_courses_btn">
        <p class="buy_p">
          Continue
        </p>
      </button>
    </div>
  </div>
    <div class="c_left_sec_d c_left_sec_d_small_vw">
    <p class="num_of_courses_p">${noOfCoursesInCart} Courses in Cart</p>
  <div class="courses_collection_d ">

</div>
  </div>

</div>`;

  cart.forEach((cartItem) => {
    const courseId = cartItem.courseId;
    let matchingCourse = getCourse(courseId);
    const matchingCoursePrice = Number(matchingCourse.price);
    let totalPrice = 0;
    totalPrice += matchingCoursePrice;
  });
  let courseCartHTML = "";
  cart.forEach((cartItem) => {
    const courseId = cartItem.courseId;
    const matchingCourse = getCourse(courseId);
    const matchingCourseIncart = findCourse(courseId);

    courseCartHTML += `
     <div class="crs_d" data-course-id="${courseId}">
          <div class="crs_img_and_about">
      <div class="crs_img_d">
           <img loading="lazy" src="${matchingCourse.img}" alt="image" class="crs_img">

      </div>
      <div class="crs_about">
        <div class="title_and_responsive_price" >
        <p class="crs_title">${matchingCourse.about}</p>
        <div class="small_vw_div_title_and_price">
        <p class="crs_price_p_small_vw">$${matchingCourseIncart.price}</p>
        <p class="crs_price_p crs_increased_price crs_increased_price_for_small_vw" >$${matchingCourseIncart.increasedPrice}</p>
       </div>
        </div> 
        <p class="crs_by">By Colt Steele</p>

        <div class="crs_things_like_Xfactor_and_rating_d">
          <div class="crs_Xfactor_d">
            <p class="Xfactor_p">${matchingCourse.xFactor}</p>
          </div>
          <p class="crs_rating_p">(${matchingCourse.rating} ratings)</p>
        </div>
        <div class="crs_lectures_hrs_and_all_levels_d">
          <p class="crs_hrs_p"><span class="mid_dot_span mid_dot_span_for_span_width"></span> ${matchingCourse.noOfHours} total hours</p>
          <p class="crs_lectures_p"><span class="mid_dot_span"></span> ${matchingCourse.lectures} lectures</p>
          <p class="crs_all_levels_p"><span class="mid_dot_span"></span> All Levels</p>

        </div>
                  <div class="options_related_to_cart_crs_small_viewport">
        <p class="remove_p_small_viewport remove_p">Remove</p>
        <p class="for_show_btn_small_viewport">Button for Show</p>
      </div>
      </div>
      </div>
      <div class="options_cart_crs_and_price_d">
          <div class="options_related_to_cart_crs">
        <p class="remove_p">Remove</p>
        <p class="for_show_btn">Button for Show</p>
      </div>
       <div class="crs_price_d">
        <p class="crs_price_p">$${matchingCourseIncart.price}</p>
        <p class="crs_price_p crs_increased_price" >$${matchingCourseIncart.increasedPrice}</p>
      
        </div> 
      </div>
    </div>`;
  });

  document.querySelector(".whole_crs_shopping_section").innerHTML =
    headingAndPaymentHTML;
  document.querySelectorAll(".courses_collection_d").forEach((div) => {
    div.innerHTML = courseCartHTML;
  });

  document.querySelectorAll(".crs_d").forEach((crs_div) => {
    const courseId = crs_div.dataset.courseId;
    crs_div
      .querySelector(".crs_img_and_about")
      .addEventListener("click", () => {
        window.location.href = `https://youdemi223.netlify.app/courseOverview.html?courseId=${courseId}`;
      });
    const removeButton = crs_div.querySelectorAll(".remove_p");
    removeButton.forEach((removeBtn) => {
      removeBtn.addEventListener("click", () => {
        removeFromCart(courseId);
        renderCartCourses();
      });
    });
  });

  document.querySelector(".buy_courses_btn").addEventListener("click", () => {
    cart.length = 0;
    saveToStorage();
    renderCartCourses();
  });
}

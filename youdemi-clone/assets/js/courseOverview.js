import { getCourse } from "./data/courses_data.js";
import { getCouponPercentageAmount } from "./data/coupons.js";
import { afterPopUp, openPopUp, responseForPopUp } from "./popUp.js";

renderCourseOverviewHTML();
function renderCourseOverviewHTML() {
  const url = new URL(window.location.href);
  const courseId = url.searchParams.get("courseId");
  let matchingCourse = getCourse(courseId);
  const discountedPrice = Number(matchingCourse.price);
  const withoutDiscountedPrice =
    Number(matchingCourse.price) + Number(matchingCourse.price) * 0.4;
  const couseOverviewHTML = `
  <div class="left_d">
<div class="crs_heading_d">
<p class="crs_heading_p">
  ${matchingCourse.about}
</p>
</div>
<div class="crs_det_d">
  <p class="crs_det_p">${matchingCourse.extraDetails}</p>
</div>
<div class="crs_ex_det_d">
<div class="crs_less_d">
  <svg class="c_less_img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 5.83268V14.166C17.5 16.666 16.25 18.3327 13.3333 18.3327H6.66667C3.75 18.3327 2.5 16.666 2.5 14.166V5.83268C2.5 3.33268 3.75 1.66602 6.66667 1.66602H13.3333C16.25 1.66602 17.5 3.33268 17.5 5.83268Z" stroke="#7B7B8A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #999183;"></path>
<path d="M12.0859 3.75V5.41667C12.0859 6.33333 12.8359 7.08333 13.7526 7.08333H15.4193" stroke="#7B7B8A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #999183;"></path>
<path d="M6.66406 10.834H9.9974" stroke="#7B7B8A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #999183;"></path>
<path d="M6.66406 14.166H13.3307" stroke="#7B7B8A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #999183;"></path>
</svg>
<p class="crs_less_p">${matchingCourse.lessons} Lessons</p>
</div>
<div class="crs_stu_d">
  <svg class="c_stu_img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.63021 9.05768C7.54687 9.04935 7.44687 9.04935 7.35521 9.05768C5.37187 8.99102 3.79688 7.36602 3.79688 5.36602C3.79687 3.32435 5.44687 1.66602 7.49687 1.66602C9.53854 1.66602 11.1969 3.32435 11.1969 5.36602C11.1885 7.36602 9.61354 8.99102 7.63021 9.05768Z" stroke="#7B7B8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #999183;"></path>
<path d="M13.6786 3.33398C15.2953 3.33398 16.5953 4.64232 16.5953 6.25065C16.5953 7.82565 15.3453 9.10898 13.787 9.16732C13.7203 9.15898 13.6453 9.15898 13.5703 9.16732" stroke="#7B7B8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #999183;"></path>
<path d="M3.46563 12.134C1.44896 13.484 1.44896 15.684 3.46563 17.0256C5.75729 18.559 9.51563 18.559 11.8073 17.0256C13.824 15.6757 13.824 13.4757 11.8073 12.134C9.52396 10.609 5.76562 10.609 3.46563 12.134Z" stroke="#7B7B8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #999183;"></path>
<path d="M15.2812 16.666C15.8813 16.541 16.4479 16.2993 16.9146 15.941C18.2146 14.966 18.2146 13.3577 16.9146 12.3827C16.4562 12.0327 15.8979 11.7993 15.3063 11.666" stroke="#7B7B8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #999183;"></path>
</svg>

<div class="students_d">
<p class="crs_less_p">
  ${matchingCourse.students} Students
</p>
<div class="students_tool_tip_d">
  <p class="student_names">Jazmine</p>
  <p class="student_names">Alexa</p>
  <p class="student_names">Linda</p>
  <p class="student_names">Alex</p>
  <p class="student_names">Chris</p>
  <p class="student_names">David</p>
  <p class="student_names">Robert</p>
  <p class="student_names">Nick</p>
  <p class="student_names">George</p>
  <p class="student_names">Spencer</p>
  <p class="student_names">Rhonda</p>
</div>
</div>
</div>
</div>
  </div>
  <div class="right_d">
    <div class="crs_img_d">
      <img loading="lazy" alt="image" class="crs_img" src="${matchingCourse.img}" alt="">
    </div>
    <p class="p_about_bottom_img_responsive crs_heading_p ">
    ${matchingCourse.about}
    </p>
    <p class="p_extra_details_bottom_img_responsive crs_det_p ">
    ${matchingCourse.extraDetails}
    </p>
    <div class="crs_price_and_dis_d">
      <p class="crs_price_p">
$${discountedPrice}
      </p>
      <p class="crs_dis_p">
        $${withoutDiscountedPrice.toFixed(2)}
      </p>
    </div>
    <button class="add_to_cart_b">
      <p class="add_to_cart_p">
        Add to Cart
      </p>
    </button>
    <div class="money_bck_gte">
      <p class="money_bck_gte_p">
        30-Day Money-Back Guarantee
      </p>
    </div>
    <div class="coupons_d">
      <div class="cpn_1_d">
<p class="cpn_1_p">
  Extra 15% off courses
  <br>BONUS15SEP
</p>
<button data-coupon-percentage-amount="15" class="cpn_1_b_1">
  <p class="cpn_1_b_1_p">
    Apply Coupon
  </p>
</button>
<button class="cpn_1_b_2 invisible">
<i class="fa-solid fa-xmark"></i>
  <p class="cpn_1_b_2_p">
    Cancel
  </p>
</button>
      </div>

    </div>
        <div class="coupons_d">
      <div class="cpn_1_d">
<p class="cpn_1_p">
  Extra 25% off courses
  <br>BONUS25SEP
</p>
<button data-coupon-percentage-amount="25"
 class="cpn_1_b_1">
  <p class="cpn_1_b_1_p">
    Apply Coupon
  </p>
</button>
<button class="cpn_1_b_2 invisible">
<i class="fa-solid fa-xmark"></i>
  <p class="cpn_1_b_2_p">
    Cancel
  </p>
</button>
      </div>

    </div>
    <div class="enter_cpn">
      <input placeholder="Enter Coupon" type="text" name="" id="" class="js_cpn_input cpn_input">
      <button  class=" js_cpn_apply_b cpn_apply_b">
        <p class="cpn_apply_b_p">Apply</p>
      </button>
    </div>
    <div class="js_coupon_code_working_text">
    <p class="cpn_code_right_text invisible" >Your coupon code is applied.</p>
    <p class="cpn_code_wrong_text invisible">Your coupon code is wrong.</p>
    </div>
    <div class="coupon_code_removed_text_d">
    <p class="coupon_code_removed_text invisible" >The coupon code is removed.</p>
    </div>
    <div class="coupons_d invisible coupons_d_text_coupon">
    <div class="cpn_1_d"> 
<p class="cpn_1_p cpn_1_input_coupon_p">
  Extra 25% off courses
  <br>BONUS25SEP
</p>
<button class="cpn_1_b_2_for_written_couponCode written_coupon_code_cancel_btn ">
<i class="fa-solid fa-xmark"></i>
  <p class="cpn_1_b_2_p">
    Cancel
  </p>
</button>
      </div>
  </div>

`;
  document.querySelector(".courseOverviewContainer").innerHTML =
    couseOverviewHTML;

  document.querySelectorAll(".cpn_1_b_1").forEach((applyCouponButton, i) => {
    applyCouponButton.addEventListener("click", () => {
      document
        .querySelectorAll(".cpn_1_b_2")
        .forEach((cancelCouponButton, i2) => {
          if (!cancelCouponButton.classList.contains("invisible")) {
            cancelCouponButton.classList.add("invisible");
            document
              .querySelectorAll(".cpn_1_b_1")
              [i2].classList.remove("invisible");
          }
        });

      const cancelCouponButton = document.querySelectorAll(".cpn_1_b_2")[i];
      const discount =
        Number(applyCouponButton.dataset.couponPercentageAmount) / 100;
      const discountedPriceWithCoupon =
        discountedPrice - discountedPrice * discount;

      chnageApplyOrCancelBtn(applyCouponButton, cancelCouponButton);
      changeCoursePrice(discountedPriceWithCoupon);
    });
  });

  function chnageApplyOrCancelBtn(applyCouponButton, cancelCouponButton) {
    applyCouponButton.classList.toggle("invisible");
    cancelCouponButton.classList.toggle("invisible");
  }
  function changeCoursePrice(price) {
    document.querySelector(`.crs_price_p`).innerHTML = `$${price.toFixed(2)}`;
  }
  document.querySelectorAll(".cpn_1_b_2").forEach((cancelCouponButton, i) => {
    cancelCouponButton.addEventListener("click", () => {
      const applyCouponButton = document.querySelectorAll(".cpn_1_b_1")[i];
      chnageApplyOrCancelBtn(applyCouponButton, cancelCouponButton);
      changeCoursePrice(discountedPrice);
    });
  });

  function changeAfterCouponTexts(theText) {

    theText.classList.toggle("invisible");

    setTimeout(() => {
      if (!theText.classList.contains("invisible"))
        theText.classList.toggle("invisible");
            console.log(theText.classList);

    }, 2000);
  }
  function addOrRemoveCouponDiv(couponDiv) {
    couponDiv.classList.toggle("invisible");
  }
  document.querySelector(".js_cpn_apply_b").addEventListener("click", () => {
    const couponCode = document.querySelector(".js_cpn_input").value;
    let couponPercentageAmount = getCouponPercentageAmount(couponCode);
    const rightCouponText = document.querySelector(".cpn_code_right_text ");
    const wrongCouponText = document.querySelector(".cpn_code_wrong_text ");


    document
      .querySelector(".cpn_code_right_text")
      .classList.toggle("coupon_code_working_text_visible");

    if (couponPercentageAmount) {
      const couponDiv = document.querySelector(".coupons_d_text_coupon");

      const priceAfterCoupon =
        discountedPrice - (discountedPrice * couponPercentageAmount) / 100;
      changeCoursePrice(priceAfterCoupon);
      changeAfterCouponTexts(rightCouponText);
      addOrRemoveCouponDiv(couponDiv);
      document.querySelector(
        ".cpn_1_input_coupon_p"
      ).innerHTML = `Extra %${couponPercentageAmount} off courses <br>${couponCode}`;
    } else if (!couponPercentageAmount) {
      changeAfterCouponTexts(wrongCouponText);
    }
    document.querySelector(".js_cpn_input").value = "";

  });
      document
        .querySelector(".written_coupon_code_cancel_btn ")
        .addEventListener("click", () => {
              const removeCouponText = document.querySelector(
                ".coupon_code_removed_text "
              );
          changeAfterCouponTexts(removeCouponText);
        });
  document
    .querySelector(".written_coupon_code_cancel_btn")
    .addEventListener("click", () => {
      const couponDiv = document.querySelector(".coupons_d_text_coupon");
      const rightCouponText = document.querySelector(".cpn_code_right_text ");
      changeCoursePrice(discountedPrice);
      addOrRemoveCouponDiv(couponDiv);
      if (
        !document
          .querySelector(".cpn_code_right_text")
          .classList.contains("invisible")
      ) {
        changeAfterCouponTexts(rightCouponText);
      }
    });

    document.querySelector(".add_to_cart_b").addEventListener("click", ()=>{
      responseForPopUp()
      openPopUp()
      afterPopUp()

      const firstMonthBth = document.querySelector(".time_period_1");
      firstMonthBth.click();
    });
}

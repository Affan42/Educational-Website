import { toggleClass } from "./utils/class.js";
import { addToCart } from "./data/cart_data.js";
import { getCourse } from "./data/courses_data.js";

const popUp = document.querySelector(".crs_buy_popUp");
const overlayForPopUp = document.querySelector(".overlay_div_for_popUp");
const body = document.querySelector("body");
export function responseForPopUp() {
  console.log("toggling")
  toggleClass(popUp, "invisible");
  toggleClass(overlayForPopUp, "overlay_div_for_popUP_visible");
  toggleClass(body, "overflow_hidden");
}

export function afterPopUp() {
  const url = new URL(window.location.href);
  const courseId = popUp.dataset.courseId || url.searchParams.get("courseId");

  const totalMoneyPara = document.querySelector(".total_money_popUp_p_amount");
  const moneyPerMonthPara = document.querySelector(".js_money_per_month");
  const avgTimePara = document.querySelector(".avg_time_p");
  const increasedMoneyPara = document.querySelector(".increased_total_money");

  document.querySelectorAll(".time_period").forEach((time_period_btn) => {
    time_period_btn.addEventListener("click", () => {
      document.querySelectorAll(".time_period").forEach((time_period_btn_2) => {
        if (time_period_btn_2.classList.contains("active_month_popUp")) {
          time_period_btn_2.classList.remove("active_month_popUp");
        }
      });
      time_period_btn.classList.add("active_month_popUp");

      let month = time_period_btn.dataset.month;
      const course = getCourse(courseId);

      let rawPrice = course.price;
      if (month === "infinity") {
        const increasedMoney = rawPrice + rawPrice * 0.4;
        totalMoneyPara.innerHTML = `$${rawPrice}`;
        avgTimePara.innerHTML = `Your Choice :)`;
        moneyPerMonthPara.innerHTML = `$${rawPrice} `;
        increasedMoneyPara.innerHTML = `$${Math.round(increasedMoney)}`;

        return;
      }
      month = Number(month);


      setTotalMoney(rawPrice, month);

      const totalHrs = course.noOfHours;
      setAvgHrs(totalHrs, month);
    });
  });
  function setTotalMoney(rawPrice, month) {
    let changedMonth = month;
    if (month === 1) {
      changedMonth = 6;
    } else if (month === 6) {
      changedMonth = 1;
    }
    const totalMoney = rawPrice - rawPrice * ((changedMonth * 10) / 100);
    totalMoneyPara.innerHTML = `$${totalMoney.toFixed(2)}`;
    setMoneyPerMonth(month, totalMoney);
    const increasedMoney = totalMoney + totalMoney * 0.4;
    increasedMoneyPara.innerHTML = `$${Math.round(increasedMoney)}`;
    if (month === 1) {
      increasedMoneyPara.innerHTML = "";
    }
  }

  function setMoneyPerMonth(month, totalMoney) {
    const moneyPerMonth = totalMoney / month;

    moneyPerMonthPara.innerHTML = `$${moneyPerMonth.toFixed(2)}`;
  }

  function setAvgHrs(totalHrs, month) {
    const hrsPerMonth = totalHrs / month;

    let str = hrsPerMonth.toString();
    let slicedString = str;
    if (str[1] === ".") {
      slicedString = str.slice(0, 1);
      slicedString = slicedString + "+";
    } else if (str[2] === ".") {
      slicedString = str.slice(0, 2);
      slicedString = slicedString + "+";
    }
    if (slicedString === "0+") {
      slicedString = Number(str).toFixed(1);
    }

    avgTimePara.innerHTML = `
             <span class="big_font_for_time_avg avg_hrs">
         ${slicedString}
       </span>
       hours/month
             `;
  }

  document.querySelector(`.continue_btn`).addEventListener("click", () => {
    const activeMonthBtn = document.querySelector(".active_month_popUp");
    const month = activeMonthBtn.dataset.month;
    const rawCoursePrice = totalMoneyPara.innerHTML;
    const coursePrice = Number(rawCoursePrice.slice(1));
    const rawIncreasedPrice = increasedMoneyPara.innerText;
    const increasedPrice = Number(rawIncreasedPrice.slice(1));
    addToCart(courseId, month, coursePrice, increasedPrice);
    responseForPopUp();
  });
  document.querySelector(".fa-x").addEventListener("click", () => {
    responseForPopUp();
  });
  overlayForPopUp.addEventListener("click", ()=>{
   console.log("hi")
    responseForPopUp()
  })
}
export function openPopUp() {
  popUp.innerHTML = `
<div class="scrolabble_part_popUp">
  <div class="popUp_div_heading_d">
    <p class="popUp_heading_p">
     Enroll in this course for a Professional Certificate
  </p>
  <div class="popUp_cross_d">
  <i class="fa-regular fa-x"></i>
  </div>
  </div>
  <div class="popUp_first_part">
    <p class="para_popUp_1_p">
      Foundations: Data, Data, Everywhere is a 8-course Professional Certificate.
    </p>
 
  
    <p class="features_heading_p">This Professional Certificate includes:</p>
    <div class="features">
    <p class="features_p_1 features_p">
      <i class="fa-solid fa-check"></i>
      Unlimited access to all 8 courses
    </p>
    <p class="features_p_2 features_p">
            <i class="fa-solid fa-check"></i>
      EMI payment options
    </p>
    <p class="features_p_3 features_p">
            <i class="fa-solid fa-check"></i>
      Shareable certificate of completion from Google
    </p>
    <p class="features_p_4 features_p">
                  <i class="fa-solid fa-check"></i>
      14 day refund period
    </p>
  </div>
   </div>
  <div class="popUp_div_second_part">
    <div class="time_period_heading_d">
    <p class="time_period_heading_p">
      How much time do you need to finish?
    </p>
    </div>

    <div class="time_periods">
      <div data-month="1" class="time_period_1 time_period active_month_popUp">
        <p class="time_number_p">
          1
        </p>
        <p class="time_period_p">
          month
        </p>
      </div>
      <div data-month="3" class="time_period_2 time_period">
                <p class="time_number_p">
          3
        </p>
                <p class="time_period_p">
          months
        </p>
      </div>
     
      <div data-month="infinity" class="time_period_3 time_period">
                <p class="time_number_p">
        <i class="fa-solid fa-infinity"></i>
        </p>
                <p class="time_period_p">
          months
        </p>
      </div>
    </div>
    <div class="avg_time_and_money">
      <div class="avg_time">
        <p class="avg_time_heading_p">
          ESTIMATED STUDY TIME
        </p>
        <p class="avg_time_p">
          <span class="big_font_for_time_avg avg_hrs">
            15
          </span>
          hours/month
        </p>
      </div>
      <div class="money_total_and_per_month">
        <p class="money_per_month">
          <span class=" js_money_per_month money_per_month_bold_number">
          ₹784
          </span> 
        /month
        </p>
        <div class="total_money_div" >
        <p class="total_money_popUp_p">
         Total <span class="total_money_popUp_p_amount">
         ₹
         2,351
         </span> 
        </p>
                <p class="increased_total_money">
$3333
        </p>
</div>
      </div>
    </div>
  </div>
  </div>
  <div class="continue_btn_d">
    <button class="continue_btn">
      <p class="continue_btn_p">
        Continue
      </p>
    </button>
  </div>
</div>
`;
}

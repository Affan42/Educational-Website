export const coupons = [
  {
    couponCode: "BONUS15SEP",
    couponPercentageAmount: 15,
  },
  {
    couponCode: "BONUS25SEP",
    couponPercentageAmount: 25,
  },
  {
    couponCode: "FLASH20SEP",
    couponPercentageAmount: 20,
  },
  {
    couponCode: "SAVE10SEP",
    couponPercentageAmount: 10,
  },
  {
    couponCode: "DEAL25SEP",
    couponPercentageAmount: 25,
  },
  {
    couponCode: "DISCOUNT30SEP",
    couponPercentageAmount: 30,
  },
  {
    couponCode: "OFFER5SEP",
    couponPercentageAmount: 5,
  },
  {
    couponCode: "WEEKLY15SEP",
    couponPercentageAmount: 15,
  },
  {
    couponCode: "HOTDEAL20SEP",
    couponPercentageAmount: 20,
  },
  {
    couponCode: "EXTRA25SEP",
    couponPercentageAmount: 25,
  },
  {
    couponCode: "LIMITED10SEP",
    couponPercentageAmount: 10,
  },
  {
    couponCode: "SUPER30SEP",
    couponPercentageAmount: 30,
  },
  {
    couponCode: "GIFT5SEP",
    couponPercentageAmount: 5,
  },
  {
    couponCode: "SURPRISE20SEP",
    couponPercentageAmount: 20,
  },
  {
    couponCode: "BONUS50SEP",
    couponPercentageAmount: 50,
  },
  {
    couponCode: "MEGADEAL15SEP",
    couponPercentageAmount: 15,
  },
  {
    couponCode: "CLEARANCE40SEP",
    couponPercentageAmount: 40,
  },
];
export function getCouponPercentageAmount(couponCode){
    let couponPercentageAmount;
    coupons.forEach((coupon) => {
      if (coupon.couponCode === couponCode) {
        couponPercentageAmount = coupon.couponPercentageAmount;
      }
    });
    return couponPercentageAmount;
}

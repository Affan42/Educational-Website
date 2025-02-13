
export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function addToCart(courseId, month, coursePrice, increasedPrice) {

  let matchingCourse = findCourse(courseId);
  if (matchingCourse) {
    if (matchingCourse.month != month) {
        matchingCourse.month = month;
        matchingCourse.price = coursePrice;
        matchingCourse.increasedPrice = increasedPrice
    }
  } else if (!matchingCourse) {
    cart.push({
      courseId: courseId,
      month: month,
      price: coursePrice,
      increasedPrice: increasedPrice
    });
  }
  saveToStorage();
  console.log(cart);
}

export function findCourse(courseId) {
  let matchingCourse;

  cart.forEach((cartCourse) => {
    if (cartCourse.courseId === courseId) {
      matchingCourse = cartCourse;
    }
  });
  return matchingCourse;
}
export function removeFromCart(courseId){
 const newCart = []
cart.forEach((cartItem)=>{
  if(cartItem.courseId != courseId){
    newCart.push(cartItem)
  }
})
cart = newCart
saveToStorage()

}
export function calcTotalMoney(){
  const totalPrice = cart.reduce((accumulator, cartItem)=>{
    return accumulator + cartItem.price
  }, 0)
  return totalPrice
}
export function calcTotalDiscount(){
  let totalDiscount= cart.reduce((accumulator, cartItem)=>{
    return accumulator + cartItem.increasedPrice
  }, 0)
 return totalDiscount
}
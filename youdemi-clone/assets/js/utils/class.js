export function toggleClass(element, afterClass){
  if(element.classList.contains(afterClass)){
    element.classList.remove(afterClass)
  } else {
    element.classList.add(afterClass)
  }
}
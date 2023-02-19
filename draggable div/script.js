const container=document.querySelector(".container")
const header=document.querySelector("header")

function drag({movementX,movementY})
{
    let getStyle=window.getComputedStyle(container)//we can change every style by using this variable
    //fetching the style by using window.getcomputedstyle of paticular element
    let left=parseInt(getStyle.left)
    let top=parseInt(getStyle.top)
    //console.log(typeof left)
    //console.log(e)
    //console.log(movementX)
    container.style.left = `${left + movementX}px`
    container.style.top =`${top + movementY}px`

}
header.addEventListener('mousedown',()=>{
    header.classList.add('active')
    header.addEventListener("mousemove",drag)
})
header.addEventListener('mouseup',()=>{
    header.classList.remove('active')
    header.removeEventListener("mousemove",drag)
})
header.addEventListener('mouseleave',()=>{
    header.classList.remove('active')
    header.removeEventListener("mousemove",drag)
})

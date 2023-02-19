const captcha=document.querySelector(".captcha")
const inputField=document.querySelector("input")
const reload=document.querySelector("i")
const checkBtn=document.querySelector(".check-btn")
const output=document.querySelector(".output")

let allChar=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];
function getCaptcha()
{
    for(let i=0;i<6;i++)
    {
        let randomCaptcha=allChar[Math.floor(Math.random()*allChar.length)]
       // console.log(randomCaptcha)
       captcha.innerText+=randomCaptcha
    }
}
reload.addEventListener("click",()=>{
    captcha.innerText=""
    getCaptcha();
})
getCaptcha();
checkBtn.addEventListener("click",()=>{
    if(captcha.innerText===inputField.value)
    {
        output.innerText="congrats you got it!"
        output.style.color="darkgreen"
        setTimeout(()=>{
            output.innerText=""
            inputField.value=""
            captcha.innerText=""
            getCaptcha()
        },3000)
    }
    else{
        output.innerText="sorry please Try again"
        output.style.color="red"
        setTimeout(()=>{
            output.innerText=""
            inputField.value=""
            captcha.innerText=""
            getCaptcha()
        },3000)
    }
})
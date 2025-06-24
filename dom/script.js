// selectors


// id
// console.log(document.getElementById("header"))

// class
// console.log(document.getElementsByClassName("para"))

// tagname
// console.log(document.getElementsByTagName("p"))

// // query selector

// console.log(document.querySelector("#header"))
// console.log(document.querySelector(".para"))
// console.log(document.querySelector("p"))

// // query selector all

// console.log(document.querySelectorAll("#header"))
// console.log(document.querySelectorAll(".para"))
// console.log(document.querySelectorAll("p"))



// var header = document.getElementById("header")
var header = document.querySelector("#header")

// console.log(header.innerText)
// console.log(header.innerHTML)


// var para_one = document.getElementsByClassName("para")[0]
var para_one = document.querySelector(".para")

// para_one.textContent = "bye bye world"
// para_one.textContent = "<b>bye bye world</b>"

// para_one.innerHTML = "<b>bye bye world</b>"



// para_one.style.backgroundColor = "red"
// para_one.style.color = "white"

// para_one.style = "color:white;background:teal;"


console.log(para_one.attributes)
console.log(para_one.getAttribute("class"))


// para_one.setAttribute("class" , "hello")



// console.log(para_one.classList)
// para_one.classList.add("bye_bye")
// para_one.classList.remove("bye_bye")



    // var header_btn =  header.querySelector("button")
    // header_btn.addEventListener("click",()=>{
    //     console.log("clicked")
    // })



    var img = document.querySelector("#image")
    img.addEventListener("mouseover",()=>{
        img.setAttribute("src" , "https://imgix.ranker.com/list_img_v2/12975/3172975/original/3172975?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355")
    })
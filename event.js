console.log("Event Propagation")

// //Bubblin phase:- child to parent
// const outer = document.getElementById("outer")
// const inner = document.getElementById("inner")
// const button = document.getElementById("btn")


// outer.addEventListener('click', () => {
//     alert("Outer div has been clicked")
// })

// inner.addEventListener('click', () => {
//     alert("inner div has been clicked")
// })

// button.addEventListener('click', () => {
//     alert("Button has been clicked")
// })


//Capturing phase:- parent o child
const outer = document.getElementById("outer")
const inner = document.getElementById("inner")
const button = document.getElementById("btn")


outer.addEventListener('click', (e) => {
    e.stopPropagation()
    alert("Outer div has been clicked", e.target)
}, true)

inner.addEventListener('click', (e) => {
    alert("inner div has been clicked", e.target)
}, true)

button.addEventListener('click', (e) => {
    alert("Button has been clicked", e.target)
}, true)


// let status = confirm("are you sure ?")
// if (status) {
//     window.location.href='https://google.com'
// }
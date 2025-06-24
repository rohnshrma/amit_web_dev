// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     console.log(
//       "response",
//       response.json()
//       .then((data) => {
//         console.log(data);
//       })
//     );
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

const checkEligibility = () => {
  return new Promise((resolve, reject) => {
    var age = parseInt(prompt("Enter age : "));
    console.log("testing....");
    setTimeout(() => {
      if (age >= 18) {
        resolve("Eligible");
      } else {
        reject("Not Eligible");
      }
    }, 5000);
  });
};
// const myPromise = new Promise((resolve, reject) => {
//   var age = parseInt(prompt("Enter age : "));
//   console.log("testing....");
//   setTimeout(() => {
//     if (age >= 18) {
//       resolve("Eligible");
//     } else {
//      reject("Not Eligible");
//     }
//   }, 5000);
// });

// myPromise.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// checkEligibility().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

const sendRequest = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.status === 200 && request.readyState === 4) {
          resolve(JSON.parse(request.responseText))
      }
      if (request.status !== 200 && request.readyState === 4) {
        reject({message : "Failed to fetch data", status: request.status});
      }
    });

    request.open("GET", url);

    request.send();
  });
};


sendRequest("https://jsonplaceholder.typicode.com/todos/1").then(data=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
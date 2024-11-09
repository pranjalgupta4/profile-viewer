import axios from "/axios";
let input = document.getElementById("input");
// async function fetchGH() {
//   const response = await fetch(
//     "https://api.github.com/repos/facebook/react/issues",
//     {
//       headers: {
//         Authorization: "token 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",
//       },
//     }
//   );
//   return await response.json();
// }
// fetchGH();
// let p = fetch(`https://api.github.com/users/pranjalgupta4`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log("Error:", error));

// input.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     console.log(input.value);
//     console.log(p);
//   }
// });

// const APIURL = "https://api.github.com/users/";
// const main = document.querySelector("#main");
// const getUser = async (username) => {
//   const response = await fetch(APIURL + username);
//   const data = await response.json();
//   console.log(data);
// };
// getUser("pranjalgupta4");

axios
  .get("https://api.github.com/users/pranjalgupta4", {
    auth: "pranjalgupta4",
    Password: "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",
  })
  .then((res) => {
    console.log(res.data);
  });

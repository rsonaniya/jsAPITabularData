var tbody = document.querySelector(".tbody");

var iHtml = "";
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach((user, index) => {
      iHtml += `<tr><td>${index + 1}</td><td>${user.name}</td><td>${
        user.email
      }</td><td>${user.phone}</td></tr>`;
    });
    tbody.innerHTML = iHtml;
  });

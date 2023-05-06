const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const getUserProfile = async () => {
  const response = await fetch(apiUrl);
  // console.log(response);
  const data = await response.json();
  console.log(data);


  let userData = "";

  data.map((d) => {
    userData += `
    <tr>
      <td>${d.id}</td>
      <td>${d.username}</td>
      <td>${d.name}</td>
      <td>${d.email}</td>
      <td>${d.address.city}</td>
      <td>${d.phone}</td>
      <td>${d.website}</td>
      <td>${d.company.name}</td>

   </tr>
    `
  })


document.getElementById('user-data').innerHTML = userData;

};
getUserProfile();

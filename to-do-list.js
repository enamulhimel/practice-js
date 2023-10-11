let count = 0;

document.getElementById('input-btn').addEventListener('click', function () {
  count++;
  const inputValue = document.getElementById('input-value').value;
  //   console.log(inputValue);

  const mainContainer = document.getElementById('content-container');
  const tableContainer = document.createElement('tr');
  tableContainer.innerHTML = `
  <th scope="row">${count}</th>
  <td>${inputValue}</td>
  <td><button class="btn btn-primary delete-btn">Delete</button>
  <button class="btn btn-secondary edit-btn">Edit</button></td>
  `;
  mainContainer.appendChild(tableContainer);
  document.getElementById('input-value').value = ' ';

  const deletebtn = document.getElementsByClassName('delete-btn');
  for (let button of deletebtn) {
    button.addEventListener('click', function (event) {
      event.target.parentNode.parentNode.style.display = 'none';
    });
  }

  const editbtn = document.getElementsByClassName('edit-btn');
  for (let button of editbtn) {
    button.addEventListener('click', function (event) {
      event.target.parentNode.parentNode.style.line - through;
    });
  }
});

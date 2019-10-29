document.addEventListener("DOMContentLoaded", () => {
    const formSelector = document.querySelector('form');
    formSelector.addEventListener('submit', function(e) {
      e.preventDefault();
      const taskName = document.querySelector('input[placeholder="description"]').value;
      const newToDo = document.createElement('li');
      newToDo.innerText = `${taskName}`;
      document.querySelector('#tasks').appendChild(newToDo);
      // debugger
    });
    const deleteButton = document.querySelector("button");
    deleteButton.addEventListener('click', function(e) {
      e.preventDefault;
      const done = document.getElementById('tasks');
      done.remove('li');
    })
});

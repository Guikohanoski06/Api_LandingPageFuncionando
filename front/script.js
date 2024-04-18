let button = document.getElementById("handleSubmit");

button.onclick = async function () {
  let title = document.getElementById("title").value;
  let description = document.getElementById("password").value;
  let text_area = document.getElementById("text_area").value;
  let data = { title, description, text_area };

  const response = await fetch('http://localhost:3003/api/store/task', {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data)
  });

  let content = await response.json();

  if (content.success) {
    alert("Sucesso");
  } else {
    alert("Não");
  }
}
import { getUser } from "../scripts/services/user.js";
import { getRepository } from "../scripts/services/repositories.js";
import { user } from "../scripts/objects/user.js";
import { screen } from "../scripts/objects/screen.js";

document.getElementById('btn-search').addEventListener('click', () => {
  const userName = document.getElementById('input-search').value;
  if(validadeEmptyInput(userName)) return;
  getUserData(userName);
});
document.getElementById('input-search').addEventListener('keyup', (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;
  if (isEnterKeyPressed) { 
      if(validadeEmptyInput(userName)) return;
      getUserData(userName);
  }
});


async function getUserData(userName){
  const userResponse = await getUser(userName);
  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }
  const repositoriesResponse = await getRepository(userName);
  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);
  screen.renderUser(user);
}

function validadeEmptyInput(userName){
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuário.");
    return true;
  }
}





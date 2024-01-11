
const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user){
    this.userProfile.innerHTML = `<div class="info">
                      <img src="${user.avatarUrl}" alt="Foto perfil do usuário"/>
                        <div class="data">
                           <h1>${user.name ?? "Não possui nome cadastrado."}</h1>
                           <p>${user.bios ?? "Não possui bios cadastrada."}</p>
                            <div class="imgFollowers">
                              <p><img src="./src/image/seguidores.png"/>Seguidores: ${user.seguidores}</p>
                              <p><img src="./src/image/seguidores.png"/>Seguindo: ${user.seguindo}</p>
                            </div>
                        </div>
                    </div>`

    let repositoriesItens = "";
    user.repositories.forEach(repo => repositoriesItens += `<div>
                                                              <li><a href="${repo.html_url}" 
                                                              target="_blank">${repo.name}</a></li>
                                                              <span> <img src="./src/image/forks.png">${repo.forks}</span> 
                                                              <span> <img src="./src/image/linguagem-de-programacao.png">${repo.language}</span>
                                                              <span><img src="./src/image/watchers.png">${repo.watchers}</span>
                                                            </div>`)
    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                      <h2>Repositórios</h2>
                                      <ul>${repositoriesItens}</ul>
                                    </div>`
    }
  },
  renderNotFound(){
    this.userProfile.innerHTML = "<h2>Usuario não encontrado!</h2>"
  }
}

export {screen}

const user = {
  avatarUrl: "",
  name: "",
  bios: "",
  userName: "",
  seguidores: 0,
  seguindo: 0,
  repositories: [],
  setInfo(gitHubUser){
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bios = gitHubUser.bios;
    this.userName = gitHubUser.login;
    this.seguidores = gitHubUser.followers;
    this.seguindo = gitHubUser.following;
  },
  setRepositories(repositories){
    this.repositories = repositories;
  }
}

export {user}
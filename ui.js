class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}">
    <a href="${user.html_url}" target="_black" class="btn btn-primary btn-block">View Profile</a>
    </div>
    <div class="col-md-9">
    <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
    <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
    <span class="badge bg-success">Public Followers: ${user.followers}</span>
    <span class="badge bg-info">Public Following: ${user.following}</span>
    <br><br>
    <ul class="list-group">
    <li class="list-group-item">Company: ${user.company}</li>
    <li class="list-group-item">Website/Blog: ${user.blog}</li>
    <li class="list-group-item">Location: ${user.location}</li>
    <li class="list-group-item">Member Since: ${user.created_at}</li>
    </ul>
    </div>
    </div>
    </div>

    <h3 class="pahe-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  //   Show user repos
  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
        <div class="row">
        <div class="col-md-6">
        <a href="${repo.html_url}" target="_blank">${repo.name}
        </div>
        <div class="col-md-6">
        <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge bg-secondary">Watchers: ${repo.watcher_count}</span>
        <span class="badge bg-success">Forks: ${repo.forms_count}</span>
    
        </div>
        </div>
        </div>
        `;
    });

    // output repos
    document.getElementById("repos").innerHTML = output;
  }

  //   Show alert message
  showAlert(message, className) {
    // clear any remaining alerts
    this.clearAlert();
    // create div
    const div = document.createElement("div");
    // add class name
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector("searchContainer");
    // get search box
    const search = document.querySelector(".search");
    // insert the alert
    container.insertBefore(div, search);
    //   Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //   clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
  //   clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}

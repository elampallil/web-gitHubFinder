class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }

    showProfile(data){
        this.profile.innerHTML =`
        <h4>profile details</h4>
        <div class="card card-body mb-3">
           <div class="row">
             <div class="col-md-3">
                  <img src="${data.avatar_url}" class="img-fluid rounded-circle mb-2">
                   <a href ="${data.html_url}" target = "_blank" class="btn btn-block btn-primary mb-3">View More</a>
             </div>
              <div class="col-md-9">
                 <span  class="badge badge-primary">public repos : ${data.public_repos}</span>
                 <span  class="badge badge-secondary">followers : ${data.followers}</span>
                 <span  class="badge badge-success">following : ${data.following}</span>
                 <span  class="badge badge-info">public Gists : ${data.public_gists}</span>
                 <br><br>
                 <ul class="list-group">
                  <li class="list-group-item">Company: ${data.company}</li>
                  <li class="list-group-item">Website/Blog: ${data.blog}</li>
                  <li class="list-group-item">Location: ${data.location}</li>
                  <li class="list-group-item">Member Since: ${data.created_at}</li>
                 </ul>
                </div> 
              </div>
           
           </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>

        `
    } 
   clearProfile(){
       this.profile.innerHTML =''
   }

   showAlert(){
      this.clearAlert()
       const searchParent = document.getElementById('search')
       const head = document.getElementById('head')
    
       const div = document.createElement('div')
       div.className ="alert alert-danger alert-dismissible fade show"
       div.appendChild(document.createTextNode('no matched'))
       searchParent.insertBefore(div,head)
       setTimeout(this.clearAlert,2000)
   }
   
   clearAlert(){
      var pendingAlert =  document.querySelector('.alert')
      if(pendingAlert){
        document.querySelector('.alert').remove()
      }
   }
   showRepos(repos) {
       console.log(repos)
    let output = '';
    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `
    })

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }
}
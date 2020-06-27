
const github = new GitHub;
const ui = new UI;


const serachInput = document.getElementById('search-user')
console.log('hi')

serachInput.addEventListener('keyup',(e)=>{
var userText = e.target.value
if(userText !=''){
 github.getUser(userText).then( data =>{ 
     
   if(data.profile.message === 'Not Found'){
         ui.showAlert()
     }
   else{
    ui.showProfile(data.profile)
    ui.showRepos(data.repos)
      }
 })
}
else{
  ui.clearProfile()
}
})
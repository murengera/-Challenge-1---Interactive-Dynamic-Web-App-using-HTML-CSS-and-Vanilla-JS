// variable declaration
let html = "";
const userList = document.getElementById('user');
const userDetailsContent = document.querySelector('.user-details-content');
const userCloseBtn = document.getElementById('user-close-btn');




//variable assignements

userList.addEventListener('click', getUserPost);
userCloseBtn.addEventListener('click', () => {
  userDetailsContent.parentElement.classList.remove('showUser');
})




// function of getting user information(name,email only)
function getUserList() {

  fetch(`https://jsonplaceholder.typicode.com/users`).then(response => {

    if (!response.ok) {
      throw Error('ERROR');
    }
    return response.json();
  })
    .then(data => {

      if (data) {
        data.forEach(user => {

          html += `
             <div class = "user-item" data-id="${user.id}">
             
             <div class = "user-name">
               <h3> ${user.name}</h3>
               <h2>${user.email}</h2>
               <a href = "#" class = "user-btn">User post</a>
             </div>
           </div> `
            ;
        });
      }
      userList.innerHTML = html
    }).catch(error => {
      alert("Please check your internet connection")
    }


    )
}




// function for getting posts of every user

function getUserPost(id) {
  id.preventDefault();
  if (id.target.classList.contains('user-btn')) {
    let userPost = id.target.parentElement.parentElement;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userPost.dataset.id}`)
      .then(response => {


        if (!response) {
          throw Error("ERROR")
        }


        return response.json();
      }).then(data => {


        const html = data

          .map(user => {

            return `

               <div class = "user-post">
               <p  id="title"> ${user.title} </p>

               <span id="body">   ${user.body}</span>
           
               </div> 

              
              `;
          }).join("");

        userDetailsContent.innerHTML = html;
        userDetailsContent.parentElement.classList.add('showUser')

      }).
      catch(error => {
        alert("please check your connection")
      });

  }

}

// callling function of getting information of user including user name and email only
getUserList();
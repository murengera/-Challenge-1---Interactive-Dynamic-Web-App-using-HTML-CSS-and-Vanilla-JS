let html="";
const userList=document.getElementById('user');
const userDetailsContent=document.querySelector('.user-details-content');
const userCloseBtn=document.getElementById('user-close-btn');
// event listners
//user details
userList.addEventListener('click',getUserDetails);
userCloseBtn.addEventListener('click',()=>{
    userDetailsContent.parentElement.classList.remove('showUser');
})

// get user list from api
function getUserList(){
  
   fetch(`https://jsonplaceholder.typicode.com/users`).then(response=>response.json())
   .then(data=>{
   
     if(data){
         data.forEach(user=> {

             html+=`
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
     userList.innerHTML=html
   })
}


// function for getting posts of every user

function getUserDetails(e){
    e.preventDefault();
    if(e.target.classList.contains('user-btn')){
        let userItem=e.target.parentElement.parentElement;
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userItem.dataset.id}`)
        .then(response=>{
            if(!response){
                throw Error("ERROR")
            }
            return response.json();
        }).then(data=>{
            console.log(data)
        const html=data
        .map(user=>{
          
               return `

               <div class = "user-post">
               
               <p  id="title1"style="color:black"> title</p>
               
               <p  id="title"> ${user.title} </p>

               <p id="body1"> body</p>
               <span id="body">   ${user.body}</span>
           
               </div>
              
              






          
          
          
        
               
            
               
               
               
               

                 
  
  
  
  
  
  
  
  

  

    
    

  

               
               </div>`;
        }).join("");
          userDetailsContent.innerHTML=html;
        userDetailsContent.parentElement.classList.add('showUser')




        
      
        }).
        catch(error=>{console.log(error)});


    }


}









getUserList();
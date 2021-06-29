let html="";
const mealList=document.getElementById('meal');
const mealDetailsContent=document.querySelector('.meal-details-content');
const recipeCloseBtn=document.getElementById('recipe-close-btn');
// event listners
//meal details
mealList.addEventListener('click',getUserDetails);
recipeCloseBtn.addEventListener('click',()=>{
    mealDetailsContent.parentElement.classList.remove('showRecipe');
})

// get meal list that matches with the ingredients
function getUserList(){
  
   fetch(`https://jsonplaceholder.typicode.com/users`).then(response=>response.json())
   .then(data=>{
   
     if(data){
         data.forEach(element=> {

             html+=`
             <div class = "meal-item" data-id="${element.id}">
             
             
            
             
             <div class = "meal-name">
               <h3> ${element.name}</h3>
               <h3>${element.email}</h3>
               <a href = "#" class = "recipe-btn">User post</a>
             </div>
           </div> `
           ;
         });
     }
     mealList.innerHTML=html
   })
}







    




























function getUserDetails(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem=e.target.parentElement.parentElement;
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${mealItem.dataset.id}`)
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
          mealDetailsContent.innerHTML=html;
        mealDetailsContent.parentElement.classList.add('showRecipe')




        
      
        }).
        catch(error=>{console.log(error)});


    }


}









getUserList();
let html="";
const mealList=document.getElementById('meal');
const mealDetailsContent=document.querySelector('.meal-details-content');
const recipeCloseBtn=document.getElementById('recipe-close-btn');
// event listners
//meal details
mealList.addEventListener('click',getMealRecipe);
recipeCloseBtn.addEventListener('click',()=>{
    mealDetailsContent.parentElement.classList.remove('showRecipe');
})

// get meal list that matches with the ingredients
function getMealList(){
  
   fetch(`https://jsonplaceholder.typicode.com/users`).then(response=>response.json())
   .then(data=>{
   
     if(data){
         data.forEach(element=> {

             html+=`
             <div class = "meal-item" data-id="${element.id}">
             <div class = "meal-img">
             <img src="user.jpg" alt="${element.name}">
            
             </div>
             <div class = "meal-name">
               <h3>${element.name}</h3>
               <a href = "#" class = "recipe-btn">Get Recipe</a>
             </div>
           </div> `
           ;
         });
     }
     mealList.innerHTML=html
   })
}

// function getMealRecipe(e){
    // e.preventDefault();
    // if(e.target.classList.contains('recipe-btn')){
        // let mealItem=e.target.parentElement.parentElement;
        // fetch(`https://jsonplaceholder.typicode.com/posts?userId=${mealItem.dataset.id}`).then(response=>response.json()).then(data=>mealRecipeModal(data));
// 
// 
    // }
// 
// 
// }
// 
// function mealRecipeModal(meal){
    // console.log("data",meal)

    // meal.forEach(element=>{
        // let html=`
        // <h2 class = "recipe-title"> title :${element.title}</h2>
        // 
        // <div class = "recipe-instruct">
        //   <h3>userId   ${element.userId}</h3>
        //   <p> body ${element.body}</p>
        // 
        // </div>
        // `;
        // mealDetailsContent.innerHTML=html;
        // mealDetailsContent.parentElement.classList.add('showRecipe')
    // })
//   


//   
//   
//   
//   
//   
//   
//  
//  

// }























function getMealRecipe(e){
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
               
            
               
               
               
               

                 <table>
  
  
  
  <tr> 
  <td> title</td>
  <td> title</td>
  <td> title</td>
  </tr>
  
  <tr>

    <td> ${user.title}</td>
    <td>${user.body}</td>
  </tr>
  
</table>

               
               </div>`;
        }).join("");
          mealDetailsContent.innerHTML=html;
        mealDetailsContent.parentElement.classList.add('showRecipe')




        
      
        }).
        catch(error=>{console.log(error)});


    }


}









getMealList();
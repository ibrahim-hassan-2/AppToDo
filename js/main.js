let sInput = document.querySelectorAll('#sInput');
let addBtn = document.getElementById('addBtn');
let noData = document.getElementById('noData');
let allData = document.getElementById('allData');
let emptyAlert = document.getElementById('emptyAlert');
let closeBtn = document.getElementById('closeBtn');
let survayModel = document.getElementById('survayModel');
let Model = document.getElementById('Model');


let survay =[];
let addData = ( username , email , phone) => {
   
      

        if (sInput[0,1,2].value.trim() == ""){
               alert("Please enter data");
        
        }
        else{
            noData.classList.add('none');
            allData.innerHTML += `
            <div class="card col-lg-3 col-md-4">
            <div class="card-body">
          <h5> Username: ${username}</h5>
          <h5>Email: ${email}</h5>
          <h5>Phone: ${phone}</h5>
            </div>
            <a class="deleteBtn">Delete</a>  
            </div>
            `;
            sInput.value ="";
        }

    
};

let renderSurvay = () =>{
pUsername = sInput[0].value;
pEmail = sInput[1].value;
pPhone = sInput[2].value;
   let person ={
       username : pUsername,
       email : pEmail,
       phone : pPhone
   }


   addData(person.username, person.email, person.phone);

}


let closeAlertFuncation = function(){
    emptyAlert.classList.remove('none');
}

addBtn.addEventListener('click' ,renderSurvay); 
closeBtn.addEventListener('click' ,closeAlertFuncation );
emptyAlert.addEventListener('click',function(e){
    if(e.target.classList.contains('deleteIcon')){
        e.target.parentElement.classList.add('none');
    }
})


let noDataShow = () => {
    if(allData.childElementCount == 0){
       noData.classList.remove('none');
    }
}

document.addEventListener('click', function(h){
    if(h.target.classList.contains('deleteBtn')){
        h.target.parentElement.remove();
        noDataShow();
    }
})
let showSurvay =() => {
    Model.classList.toggle('block');
}
survayModel.addEventListener('click', showSurvay)
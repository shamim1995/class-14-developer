
const addmeBtn = document.getElementById("addmeBtn");
const dev_list = document.querySelector(".dev_list");


addmeBtn.addEventListener("click", function(e){
    
    e.preventDefault();

let developer_name = document.getElementById("developer_name").value;
let photo = document.getElementById("photo").value;
let gender = document.querySelector("input[name='gender']:checked").value;
let skill = document.querySelectorAll("input[type='checkbox']:checked");

let skill_arr = [];

for (let i = 0; i < skill.length; i++) {
    
   skill_arr.push(skill[i].value);
    
}

let developer_arr;

if(getData('team')){

    developer_arr = getData('team')

}else{
    developer_arr = [];
}

developer_arr.push({
    developer_name  : developer_name,
    photo           : photo,
    gender          : gender,
    skill           : skill_arr
})

setData('team', developer_arr)

developers();

});


developers();

 function developers() {

 let dev_team = getData ('team');

 let developer_data = ' ';
 
 dev_team.map(developer=>{

    let developer_skills = ' ';
    developer.skill.map(devSkills=>{

       developer_skills += `<li class="list-group-item">${devSkills}</li>`
    });

developer_data += `
    <div class="col-md-4 mt-4">
                        <div class="card">
                            <img class="card-img" style="object-fit: cover; width: 250px; height: 300px;"
                                src="${developer.photo}"
                                alt="">
                            <div class="card-body">
                                <h2>${developer.developer_name}</h2>
                                <p>Gender:${developer.gender}</p>
                                <hr>
                                <h6>Skill</h6>
                                <hr>
                                <ul class="list-group">
                                    ${ developer_skills }
                                </ul>
                            </div>
                        </div>
                    </div>`
 });

 dev_list.innerHTML = developer_data;
    
 };
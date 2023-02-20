    var courseName = document.getElementById("courseName");
    var courseCat = document.getElementById("courseCat");
    var coursePrice = document.getElementById("coursePrice");
    var courseDesc = document.getElementById("courseDesc");
    var addBtn = document.getElementById("click");
    var courses;
    var data = document.getElementById("data");
    if(localStorage.getItem("coursesList") == null){
        var courses = [];
    }else{
        courses = JSON.parse(localStorage.getItem("coursesList"));
    }
    
    displayData();
    // clean code...
    addBtn.onclick = function(){
        addCourse();
        displayData();
        clear();
     }

    function addCourse(){
        var course = {
            name:courseName.value,
            cat:courseCat.value,
            price:coursePrice.value,
            desc:courseDesc.value
           }
           courses.push(course); 
           localStorage.setItem("coursesList",JSON.stringify(courses));
    }

    function displayData(){
        var result = "";
        for(var i=0;i<courses.length;i++){
         result+=`<tr>
             <td>${i}</td>
             <td>${courses[i].name}</td>
             <td>${courses[i].cat}</td>
             <td>${courses[i].price}</td>
             <td>${courses[i].desc}</td>
             <td><button type="button" class="btn btn-outline-info">Update</button>
             <button onclick="deleteCourse(${i})" type="button" class="btn btn-outline-danger">Delete</button>
             </td>
         </tr>`;
        }
        data.innerHTML=result;
    }
    function deleteCourse(index){
        courses.splice(index,1);
        localStorage.setItem("coursesList",JSON.stringify(courses));
        displayData();
    }

    function clear(){
        courseName.value = " ";
        courseCat.value = " ";
        coursePrice.value = " ";
        courseDesc.value = " ";
    }
    deleteBtn.onclick = function(){
        localStorage.removeItem('coursesList');
        courses = [];
        data.innerHTML= "";
    }

   



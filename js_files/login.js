// login page checkbox format

let loginCheckbox=document.querySelector('.checkbox_parent');
let checkMark=document.querySelector('.check');
let checkMarkState=0;

loginCheckbox.addEventListener('click',function(){
     if(checkMarkState===0){
          checkMark.style.cssText='display:block';
          checkMarkState=1;
     }
     else{
          checkMark.style.cssText='display:none';
          checkMarkState=0;
     }

})

// login page input field js format code

let eye_icons=document.querySelectorAll('.eye_shape_container');
let eye_lines=document.querySelectorAll('.eye_line');
let loginInputSection=document.querySelectorAll('.inp_section input');
let eye_icon_converter=0;



eye_icons.forEach((icon , index)=>{
     icon.addEventListener('click',function(){
          if(index===0){
               let inputField=icon.parentElement.children[1];
               if(eye_icon_converter===0){
                    icon.children[1].style.cssText="display:none";
                    inputField.type="text";
                    eye_icon_converter=1;
               }
               else{
                     icon.children[1].style.cssText="display:block";
                     inputField=icon.parentElement.children[1];
                     inputField.type="password";
                     eye_icon_converter=0;
               }
         }
          else{
               let inputField=icon.parentElement.children[1];
             if(eye_icon_converter===0){
                    icon.children[1].style.cssText="display:none";
                    inputField.type="text";
                    eye_icon_converter=1;
               }
               else{
                     icon.children[1].style.cssText="display:block";
                     inputField=icon.parentElement.children[1];
                     inputField.type="password";
                     eye_icon_converter=0;
               }
         
                }
          })
     })




const form =document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault();
   const height= parseInt(document.querySelector("#height").value)
   const weight=  parseInt(document.querySelector("#weight").value)
   const results=document.querySelector("#results")

   if(height==='' || height <0 || isNaN(height)){
      results.innerHTML=`please give me valid number ${height}`
   }else if(weight==='' || weight <0 || isNaN(weight)){
      results.innerHTML=`please give me valid number ${weight}`
   }
   else{
     const BMI= (weight/((height*height)/10000)).toFixed(2)

      // results.innerHTML=`<span>${BMI}</span>`
     if(BMI<18.6){
       results.innerHTML=`<span>${BMI}  Under Weight</span>`
     }if(BMI>18.6 &&BMI<24.9){
      results.innerHTML=`<span>${BMI}  normal</span>`
     }else{
        results.innerHTML=`<span>${BMI}  Overweight</span>`
     }
   }
})


//your JS code here. If required.
let text=document.querySelector("#text");
let num=document.querySelector("#delay");
let btn=document.querySelector("#btn");
let output=document.querySelector("#output")


btn.addEventListener("click",handleclick)

  async function handleclick(){
	       let resolve= await new Promise((resolve,reject)=>{
			   setTimeout(()=>{
				   resolve(text.value)
			   },num.value)
		   })
	  output.innerText=resolve;
	 
	  text.value="";
	  num.value="";

	  
}
output.innerText=""
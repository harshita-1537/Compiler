var id1=document.getElementById("code");  
var id2=document.getElementById("output"); 
var id3=document.getElementById("btn");  

function compile()  
{
 const code1=id1.value; 
 const id=document.getElementById("languages").value;  value
     console.log(id);
    
 var request=new XMLHttpRequest();
 request.open("POST"," https://codequotient.com/api/executeCode");
 request.setRequestHeader("Content-Type","application/json");
 request.send(JSON.stringify({ "code" : code1 , langId : id})); 
 
 request.onreadystatechange=function(){

     if(request.readyState==4) 
     {
         const code=JSON.parse(request.responseText).codeId;
             console.log(code);
         var result= setTimeout(myfxn,2000);
         
          function myfxn()
          {
               var request2 =new XMLHttpRequest();
          request2.open("GET","https://codequotient.com/api/codeResult/"+code);
          request2.send();


          request2.onreadystatechange=function()
          {
              if(request2.readyState==4)
              {
                  var data=JSON.parse(JSON.parse(request2.responseText).data);
                  console.log(data);

                  let output=data.output;

                  if(output)
                  {
                      id2.innerHTML=output;
                  }
                  else{
                      let error=data.errors;
                      id2.innerHTML=error;
                      }

              }
          }
        
      }
         
     }
 }

}
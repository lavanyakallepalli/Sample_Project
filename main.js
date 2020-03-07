function loadjson(file,callback) {
   var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
    	if (xhr.readyState===4 && xhr.status===200) {
    		callback(xhr.responseText);
    	}
        };
        xhr.send(null);
}
loadjson("data.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	basics(data.details);
  careerinfo(data.career);
})
/*
function loadjson(file){
    return new Promise((resolve,reject)=>{
        return fetch(file).then(response=>{
            if(response.ok){
                resolve(response.json());
            }
            else{
                reject(new Error ('error'));
            }
        })
    })
}
var newfile=loadjson("data.json");
newfile.then(data=>{
    console.log(data);
})*/
var ch=document.querySelector(".child1");
function basics(det){
	var img=document.createElement("img");
	img.src=det.image;
	img.alt="Picture";
	ch.appendChild(img);

    var s=document.createElement("h2");
    s.textContent=det.name;
    ch.appendChild(s);

   var email=document.createElement("a");
    email.href="mailto:lavanya.kallepalli98@gmail.com";
    email.textContent="lavanya.kallepalli98@gmail.com";
    ch.appendChild(email); 

    var number=document.createElement("h3");
    number.textContent=det.number;
    ch.appendChild(number);

   var ad=document.createElement("p");
   ad.textContent=det.address;
   ch.appendChild(ad);
   
   var ds=document.createElement("h4");
   ds.textContent=det.rollno;
   ch.appendChild(ds);

   var d=document.createElement("h5");
   d.textContent=det.favcolor;
   ch.appendChild(d);

}
var ch2=document.querySelector(".child2");
function careerinfo(infodata){
    var h1=document.createElement("h2");
    h1.textContent=infodata.info;
    ch2.appendChild(h1)
}
function educationdetails(edu){
  var table1=document.createElement("table");
  table1.border="1";
  ch2.appendChild(table1);

  tabledata="";
  for (var i = 0; i edu[i].length; i++) {
    tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].passoutyear+</td><td>;
  }
  table1.innerHTML=tabledata;
}

/*function add(first,second)
{
	 var result=first+second;
	 if(result>100)
	 {
         alert(result);
	 }
	 else
	 {
          alert("your result "+result+" not greter than 100") 
	 }	
	 
}*/

/*function add(T,T)
{
	 var result=T+T;
	 if(result>100)
	 {
         alert(result+"not square free");
	 }
	 else
	 {
          alert("your result "+result+" is square free") 
	 }	
	 
}*/

/*function add(T1,T2)
	{
	var T3=T1+T2;
	var T4=T1;
	if(T3>2)
	{
		alert("not square free");
	}
	else
	{
		 alert("square free")
	}
}*/

function myFunction() 
{
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 18) {
        alert(greeting = "Good day");
    } else {
        alert(greeting = "Good evening");
    }
    document.getElementById("demo").innerHTML = greeting;
}
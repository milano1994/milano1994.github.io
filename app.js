var flag = true;
document.getElementById('chg').addEventListener('click',function(){
	if(flag){
     document.querySelector('header ul').style.display="block";
     flag=!flag;
	}else{
		document.querySelector('header ul').style.display="none";
     flag=!flag;
	}
});
function checkBox(name){
	var j=0;
	var checkbox=document.getElementByName(name);
	for(var i=0;i<checkbox.length;i++){
		if(checkbox[i].checked){
			j++;
			break;
		}
	}
	if(j==0)return false;
	return true;
}
function check(){
	var q4=checkBox("q4");
	if(q4==false){
		alert("第四题起码要选择一个选项");
		return false;
	}
	var q5=checkBox("q5");
	if(q5==false){
		alert("第五题起码要选择一个选项");
		return false;
	}
	return true;
}

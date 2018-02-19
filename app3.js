function searchfromJSON()
{
	var flag = 0;


	var repo1 = document.getElementById("printrepo");
	var repourl= document.getElementById("repourl").value;
	var check = new RegExp('^(https:\/\/github.com\/)(.*)$');
	if(check.test(repourl) == false)
	{
		repo1.innerHTML = "INVALID URL";
		flag = 1;
		var repo1 = document.getElementById("printrepo");
	}
	
	mybody = document.getElementsByTagName("body")[0];
	mytable = mybody.getElementsByTagName("table")[0];
	mytablebody = mytable.getElementsByTagName("tbody")[0];
	myrow = mytablebody.getElementsByTagName("tr");
	
	for(var i=1;i<myrow.length;i++)
	{
		mycell = myrow[i].getElementsByTagName("td");
		if(mycell[0].innerText == repourl)
		{
			flag = 1;
			repo1.style.color = "black";
			if(document.getElementById("count").selected == true)
			{
				repo1.innerHTML = "Count: ";
				repo1.innerHTML += mycell[1].innerText;
			}
			else if(document.getElementById("branches").selected == true)
			{
				repo1.innerHTML = "Branches: ";
				repo1.innerHTML += mycell[2].innerText;
			}
			else if(document.getElementById("contributors").selected == true)
			{
				repo1.innerHTML = "Contributors: ";
				repo1.innerHTML += mycell[3].innerText;
			}
			else if(document.getElementById("star").selected == true)
			{
				repo1.innerHTML = "Stars: ";
				repo1.innerHTML += mycell[4].innerText;
			}
			else if(document.getElementById("commit").selected == true)
			{
				repo1.innerHTML = "Commits: ";
				repo1.innerHTML += mycell[5].innerText;
			}
			else if(document.getElementById("trackers").selected == true)
			{
				repo1.innerHTML = "Trackers: ";
				repo1.innerHTML += mycell[6].innerText;
			}
		}
	}
	if(flag == 0)
	{	
		repo1.innerHTML = "NO SUCH REPOSITORY EXISTS";
		repo1.style.color = "red";
	}
}
function createoptions()
{
	var x = document.getElementById("options");

    var option1 = document.createElement("option");
    option1.text = "Issue_count";
    x.add(option1, x[0]);
    option1.setAttribute("id","count");

    var option2 = document.createElement("option");
    option2.text = "Branches";
    x.add(option2, x[1]);
    option2.setAttribute("id","branches");

    var option3 = document.createElement("option");
    option3.text = "Contributors";
    x.add(option3, x[2]);
    option3.setAttribute("id","contributors");

    var option4 = document.createElement("option");
    option4.text = "Star";
    x.add(option4, x[3]);
    option4.setAttribute("id","star");

    var option5 = document.createElement("option");
    option5.text = "Commits";
    x.add(option5, x[4]);
    option5.setAttribute("id","commit");

    var option6 = document.createElement("option");
    option6.text = "Trackers";
    x.add(option6, x[5]);
    option6.setAttribute("id","trackers");
}
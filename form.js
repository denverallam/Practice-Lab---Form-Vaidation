function verify(){

    var dateFrom = document.getElementById("startDate").value;
    var dateTo = document.getElementById("endDate").value;
    var postDate = document.getElementById("postDate").value;
    var eventTitle = document.getElementById("eventTitle").value;
    var eventType = document.getElementById("eventType").value;

    if(eventType == "none"){
        alert("Select Event Type!");
    }
    else if(eventTitle == ""){
        alert("Enter Event Title!");
    }
    else if(dateFrom== "" || dateTo== "" || postDate == ""){
        alert("Enter Date!")
    }
    else if(dateFrom>dateTo){
        alert("The Starting Date of the Event must not be later than the Ending Date!");
    }
    else if(postDate>dateFrom){
        alert("The Posting Date must not be later than the Event!");
    }
    else{
        alert("Event Created!")
    }

    
}

function reset(){
    document.getElementById("forms").defaultValue;
}
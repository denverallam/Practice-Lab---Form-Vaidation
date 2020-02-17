function verify(){
    let eType = document.getElementById("eventTitle").value;
    let eTitle = document.getElementById("eventType").value;
    let sDate = document.getElementById("startDate").value;
    let eDate = document.getElementById("endDate").value;
    let pDate = document.getElementById("postDate").value;

    
    if(sDate>eDate){
        alert("Starting Date must not be later than the end of the Event.");
    }
    else if(pDate>sDate){
        alert("Posting Date must be earlier than the event.");
    }
    else if(eType == "" || eTitle == "" || sDate == "" || eDate == "" || pDate==""){
        alert("Complete the form before Submitting")
    }
    else{
        alert("Event Created!")
    }
}
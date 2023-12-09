function calc() {
    if (studentName.value == "" || bio.value=="" || phy.value=="" || chem.value=="" || eng.value=="" || math.value=="" || geo.value=="" || studentID.value=="") {
        err.style.display = "block"
    }else {
        err.style.display = "none"
        var confirmation =confirm("Are you sure you want to proceed")
        if (confirmation == true) {
            var sum =Number(bio.value) + Number(phy.value) + Number(chem.value) + Number(eng.value) + Number(math.value) + Number(geo.value)
            var theResult =((sum/600)*100).toFixed(2)
  
            if (bio.value >100 || phy.value>100 || chem.value>100 || eng.value>100 || math.value>100 || geo.value>100) {
                alert("Haba, is that not to much, fear God o")
            } else {
                intro.innerHTML = "Welcome " + document.getElementById('studentName').value
                note.innerHTML = "It is my utmost pleasure to sincerely appreciate your efforts for this semester. Please, find below how you have performed. Best regards👋."
                if (theResult >0 && theResult <40) {
                    result.innerHTML = "Welldone, Your score is " + theResult + "%. Unfortunately, you will not be promoting to the next level, We suggest you to reconsider your intent to study in our noble institution as we do not condole failure. Thank you and best wishes."
                    result.style.color="Red"
                }else if (theResult >40 && theResult <60) {
                    result.innerHTML = "Welldone" +studentName.value + ", Your score is " + theResult + "%. Well done, however, this is not good enough. Please try harder next year, " + studentName.value
                    result.style.color="Orange"
                }else if (theResult >60 && theResult <75) {
                    result.innerHTML = "Welldone" + studentName.value + ", Your score is " +theResult + "%. con gratulations to you as you have overcome the battle of your current level eventhough it seems tough, you turned out to be more tough than it, but NOTE, you were able to scape through does'nt mean you did really well, read more next year"
                    result.style.color = "greenyellow"
                }else if (theResult >=75 && theResult <=100) {
                    result.innerHTML = "Wow!!!, welldone, "+studentName.value+ ", Your score is "+theResult + "%, congratulations to you, you've successfully tackled the battle and you've won, it's a cause for celebration, therefore i will advice you to take a moment of your time to celebrate your wins, buy things for yourself and enjoy, Note:- Don't be too joyous and forget you're been promoted and you need to buckle up more. Thanks, best wishes, see you next year!"
                    result.style.color = "green"
                }else if (theResult >100 && theResult <0) {
                    result.innerHTML ="Don't try me, is that whining, abeg input the correct value olodo"
                }  
            }
            
            document.getElementById('bio').value = ""
            document.getElementById('studentName').value = ""
            document.getElementById('phy').value = ""
            document.getElementById('chem').value = ""
            document.getElementById('math').value = ""
            document.getElementById('geo').value = ""
            document.getElementById('eng').value = ""
            document.getElementById('studentID').value = ""
        } else{
            result.innerHTML = "Check Inputs again"
        }
    }
}

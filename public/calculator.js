// ***** Funcs *****

// func to round to 2 decimal places, found at:
// https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
function roundDecs(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function meanResult() {
    let res = 0;
    let numGrades = 0;
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    let a4 = 0;

    // a1 values
    const a1Num = document.getElementById("a1Num").value;
    const a1Den = document.getElementById("a1Den").value;

    // a2 values
    const a2Num = document.getElementById("a2Num").value;
    const a2Den = document.getElementById("a2Den").value;

    // a2 values
    const a3Num = document.getElementById("a3Num").value;
    const a3Den = document.getElementById("a3Den").value;

    // a4 values
    const a4Num = document.getElementById("a4Num").value;
    const a4Den = document.getElementById("a4Den").value;


    if(a1Num != "" && a1Den != "") {
        a1 = a1Num / a1Den;
        numGrades++;
        document.getElementById("a1Percentage").innerHTML = roundDecs(a1 * 100) + "%";
    }

    if(a2Num != "" && a2Den != "") {
        a2 = a2Num / a2Den;
        numGrades++;
        document.getElementById("a2Percentage").innerHTML = roundDecs(a2 * 100) + "%";
    }

    if(a3Num != "" && a3Den != "") {
        a3 = a3Num / a3Den;
        numGrades++;
        document.getElementById("a3Percentage").innerHTML = roundDecs(a3 * 100) + "%";
    }

    if(a4Num != "" && a4Den != "") {
        a4 = a4Num / a4Den;
        numGrades++;
        document.getElementById("a4Percentage").innerHTML = roundDecs(a4 * 100) + "%";
    }

    res = (a1 + a2 + a3 + a4) / numGrades;
    document.getElementById("result").innerHTML = roundDecs(res * 100) + "/100";
    updateHistory(roundDecs(res * 100));
    displayEmoji(roundDecs(res * 100));

}

function weightedResult() {
    let res = 0;
    let weight = 0;
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    let a4 = 0;

    // a1 values
    const a1Num = document.getElementById("a1Num").value;
    const a1Den = document.getElementById("a1Den").value;

    // a2 values
    const a2Num = document.getElementById("a2Num").value;
    const a2Den = document.getElementById("a2Den").value;

    // a2 values
    const a3Num = document.getElementById("a3Num").value;
    const a3Den = document.getElementById("a3Den").value;

    // a4 values
    const a4Num = document.getElementById("a4Num").value;
    const a4Den = document.getElementById("a4Den").value;

    // weights
    let a1Weight = parseFloat(document.getElementById("a1Weight").value);
    let a2Weight = parseFloat(document.getElementById("a2Weight").value);
    let a3Weight = parseFloat(document.getElementById("a3Weight").value);
    let a4Weight = parseFloat(document.getElementById("a4Weight").value);

    if(a1Num != "" && a1Den != "" && a1Weight != "") {
        a1 = (a1Num / a1Den) * a1Weight;
        weight += a1Weight;
        res += a1;
        document.getElementById("a1Percentage").innerHTML = roundDecs(a1/a1Weight * 100) + "%";
    } 

    if(a2Num != "" && a2Den != "" && a2Weight != "") {
        a2 = (a2Num / a2Den) * a2Weight;
        weight += a2Weight;
        res += a2;
        document.getElementById("a2Percentage").innerHTML = roundDecs(a2/a2Weight * 100) + "%";
    }

    if(a3Num != "" && a3Den != "" && a3Weight != "") {
        a3 = (a3Num / a3Den) * a3Weight;
        weight += a3Weight;
        res += a3;
        document.getElementById("a3Percentage").innerHTML = roundDecs(a3/a3Weight * 100) + "%";
    }

    if(a4Num != "" && a4Den != "" && a4Weight != "") {
        a4 = (a4Num / a4Den) * a4Weight;
        weight += a4Weight;
        res += a4;
        document.getElementById("a4Percentage").innerHTML = roundDecs(a4/a4Weight * 100) + "%";
    }

    res /= weight;
    document.getElementById("result").innerHTML = roundDecs(res * 100) + "/100";
    updateHistory(roundDecs(res * 100));
    displayEmoji(roundDecs(res * 100));
}


// ***** ADDITIONAL FEATURES *****

// history of results 
function updateHistory(res) {
    let node = document.createElement("li");
    let text = document.createTextNode(res + "%");
    node.appendChild(text);
    document.getElementById("resultHistory").appendChild(node); 
}

function deleteHistory() {
    document.getElementById("resultHistory").innerHTML = "";
}

// emoji based on results
function displayEmoji(res) {
    if(res >= 0 && res < 20) {
        document.getElementById("emoji").src = "http://icons.veryicon.com/256/Emoticon/Emoji/Emoji%20Anger.png"
    } else if(res >= 20 && res < 40) {
        document.getElementById("emoji").src = "https://cdn.shopify.com/s/files/1/1061/1924/files/Eye_Roll_Emoji_large.png?v=1541768914";
    } else if(res >= 40 && res < 60) {
        document.getElementById("emoji").src = "https://images.vexels.com/media/users/3/134884/isolated/lists/48e6880a62eaa4c1da1cbbc0880804ec-worry-sad-emoji-emoticon.png";
    } else if(res >= 60 && res < 80) {
        document.getElementById("emoji").src = "https://images.vexels.com/media/users/3/134436/isolated/lists/2e785703627785742a3e2afe96e9e07c-calm-emoji-emoticon.png"
    } else if(res >= 80) {
        document.getElementById("emoji").src = "https://images.vexels.com/media/users/3/134603/isolated/lists/2dd101be195b2560fd452658bbdb259f-in-love-emoji-emoticon.png";
    }
}
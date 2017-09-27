function setup_songs() {
    var songs = {
        1 : {"Name" : "Piece 1", "Size" : "4.4", "Description" : "A nice continental piece."},
        2 : {"Name" : "Piece 2", "Size" : "1.7", "Description" : "A piece originally made for a game backing."},
        3 : {"Name" : "Piece 3", "Size" : "11.3", "Description" : "A long 7 minute piece."},
        4 : {"Name" : "Piece 4", "Size" : "2.4", "Description" : "An old classic"}
    }
    var all = 4;

    var text = "";
    for (i = 1; i <= all; i += 2) {
        text += "<tr>";
        text += "<th id='Size'><p>" + songs[i]["Size"] + " Megabytes </p></th>";
        text += "<th id='Name'><h2>" + songs[i]["Name"] + "</h2></th>";
        text += "<th id='Description'><p>" + songs[i]["Description"] + "</p></th>";
        text += "<th class='download-button'><a href='Music/" + songs[i]["Name"] + ".m4a' download>" + "Download" + "</a></th>";
        text += "</tr>";
        text += "<tr>";
        text += "<th class='download-button'><a href='Music/" + songs[i + 1]["Name"] + ".m4a' download>" + "Download" + "</a></th>";
        text += "<th id='Description'><p>" + songs[i + 1]["Description"] + "</p></th>";
        text += "<th id='Name'><h2>" + songs[i + 1]["Name"] + "</h2></th>";
        text += "<th id='Size'><p>" + songs[i + 1]["Size"] + " Megabytes </p></th>";
        text += "</tr>";
        console.log(songs[i]);
    }
    console.log(text);

    document.getElementById("table").innerHTML = text;
}
$(function(){
    var audioCounts = 0;
    var songs = ["music的副本.mp3",
                "Yanni-河西走廊之梦.mp3"];
    var audioSrcFile = "../audio/";
    var player = document.getElementsByTagName("audio")[0];
    var audioCounts;

    $("#rightChange").click(function next (){

        player.pause();

        if(audioCounts == 3){
            audioCounts = 0;
        }else{
            audioCounts++;
        }
        var audioSrc = audioSrcFile + songs[audioCounts];
        console.log(audioSrc);
        document.getElementsByTagName("source")[0].setAttribute("src",audioSrc);
        player.load();
        player.play();
        $("#audioTitle").text(songs[audioCounts].slice(0,-4));
    });

    $("#leftChange").click(function(){
        player.pause();

        if(audioCounts == 0){
            audioCounts = 3;
        }else{
            audioCounts--;
        }
        console.log(audioCounts);
        var audioSrc = audioSrcFile + songs[audioCounts];
        console.log(audioSrc);
        document.getElementsByTagName("source")[0].setAttribute("src",audioSrc);
        player.load();
        player.play();
        $("#audioTitle").text(songs[audioCounts].slice(0,-4));
    });

    $("#closeBtn").click(function(){
        player.pause();
        $("#container").hide();
        $(".showPlayer").show();
    });

    player.onended = function(){
            if(audioCounts == 3){
               audioCounts = 0;
           }else{
               audioCounts++;
           }
var audioSrc = audioSrcFile + songs[audioCounts];
        console.log(audioSrc);
        document.getElementsByTagName("source")[0].setAttribute("src",audioSrc);
        player.load();
        player.play();
        $("#audioTitle").text(songs[audioCounts].slice(0,-4));
    };

   
  })
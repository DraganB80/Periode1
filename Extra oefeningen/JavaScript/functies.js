function toonPrompt() {
    var code = prompt('vul uw promotiecode in','uw code');
    var tekst = 'De code die u invoerde was: ' + code;
    document.getElementById('divResult').innerHTML=tekst; 
}
function checkForSpam(message){
    const lowCaseMesg = message.toLowerCase();

    if(lowCaseMesg.includes("spam") || lowCaseMesg.includes("sale")){
        return true;
    }

    return false;
}
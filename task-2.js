function formatMessage(message, maxLength){
    if (message <= maxLength){
        return message;
    }
    else{
        return message.slice(0, maxLength) + "...";
    }
}
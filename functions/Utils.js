export function ConvertTime(time){
    const actualDate = new Date();
    const actualTimestamp = (actualDate.getTime()/1000).toFixed(0);

    const chatDate = new Date(time);
    const chatTimestamp = (chatDate.getTime()/1000).toFixed(0);

    const secondesBetWeen = (actualTimestamp-chatTimestamp).toFixed(0);
    const minutesBetween = ((actualTimestamp/60)-(chatTimestamp/60)).toFixed(0);
    const hoursBetween = ((actualTimestamp/3600)-(chatTimestamp/3600)).toFixed(0);

    if (secondesBetWeen <= 15){
        return "À l'instant";
    }
    else if (minutesBetween < 1){
        return "Il y a moins d'une minute";
    }
    else if (minutesBetween < 60){
        return `Il y a ${minutesBetween} min`;
    }
    else if (hoursBetween < 24){
        return `Il y a ${hoursBetween}h`;
    }
    else{
        return `${chatDate.getDate()}/${chatDate.getMonth()+1}/${chatDate.getFullYear()}`;
    }
}
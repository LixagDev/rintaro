import {toast} from "sonner";

 function ConvertTime(time){
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

export function GetRintaroJoinDate(userJoinDate){
    const date = new Date(userJoinDate);
    let month = date.getMonth();
    switch (month){
        case 0: month = "janvier"; break;
        case 1: month = "février"; break;
        case 2: month = "mars"; break;
        case 3: month = "avril"; break;
        case 4: month = "mai"; break;
        case 5: month = "juin"; break;
        case 6: month = "juillet"; break;
        case 7: month = "août"; break;
        case 8: month = "septembre"; break;
        case 9: month = "octobre"; break;
        case 10: month = "novembre"; break;
        case 11: month = "décembre"; break;
    }

    const year = date.getFullYear();

    return `${month} ${year}`;
}

export function Toast({title, description}){
    toast(title, {
        description: description,
        action: {
            label: "Ok",
            onClick: () => null,
        },
    })
}
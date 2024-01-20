"use client"

export default function WelcomeText({...props}){
    const session = props.session;
    const getTime = () => {
        const today = new Date();
        const hour = today.getHours();
        return hour < 18;
    }
    const isDay = getTime();

    return(
        <div className={"flex flex-col justify-center items-center gap-1"}>
            <h2 className={"font-bold text-5xl"}>{isDay ? "Bonjour" : "Bonsoir"} {session.user.name} !</h2>
            <h3 className={"font-medium text-xl"}>On fait quoi {isDay ? "aujourd'hui" : "ce soir"} ?</h3>
        </div>
    );
}
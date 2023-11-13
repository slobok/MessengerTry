import { Timestamp } from "firebase/firestore";

// Mozda i ne treba
export class Message{
    sender?: string;
    text?: string;
    date?:  any;
    replayToMessage?: string;
    fire_id?: string;

    convTimestampTODate():Date{
         return new Date(this.date.seconds * 1000 +
                         this.date.nanoseconds / 1000000);
    }
    constructor(){
        this.date = this.convTimestampTODate();
    }
}


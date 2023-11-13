import { Timestamp } from "firebase/firestore";

export class Message{
    sender?: string;
    text?: string;
    date?: Date | Timestamp;
    replayToMessage?: string;
    fire_id?: string;
    deleted?:boolean;
    // Test kad dovlacim iz base
}
    

function convDate (a: Timestamp){
    const b =  a.toJSON();
    const fireBaseTime = new Date(
        b.seconds * 1000 + b.nanoseconds / 1000000,
      );
    return fireBaseTime;
}


import { Timestamp } from "firebase/firestore";
import { Message } from "./Message";

export interface Chatroom{
    name?: string;
    dateCreated?: Date;
    members?: any[];
    Message?: Message[];
    fire_id?: string;
}
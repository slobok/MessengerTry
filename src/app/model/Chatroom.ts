import { Message } from "./Message";

export interface Chatroom{
    name?: string;
    date_created?: string;
    members?: any[];
    Message?: Message[];
    fire_id?: string;

}
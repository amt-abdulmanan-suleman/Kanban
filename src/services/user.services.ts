import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    users: any[] = []

    addUser(user: {}){
        this.users = [...this.users, user]
    }
    removeUser(userId: string){
        const updatedUsers = this.users.filter(user=> userId !== user.id)
        this.users = updatedUsers;
    }
}
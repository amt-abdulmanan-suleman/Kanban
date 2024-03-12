import { Injectable, inject } from "@angular/core";
import { UtilsService } from "./utils.service";

@Injectable()
export class UserService {
    utilsService = inject(UtilsService)
    users: any[] = []

    addUser(user: {}){
        this.users = [...this.users, user]
    }
    removeUser(userId: string){
        const updatedUsers = this.users.filter(user=> userId !== user.id)
        this.users = updatedUsers;
    }
    getUsernames(){
        return this.utilsService.pluck(this.users, 'name')
    }
}
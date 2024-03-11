import 'zone.js';
import 'zone.js/testing';
import { UserService } from "./user.services";
import {TestBed} from '@angular/core/testing'
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())

describe('UserService', ()=>{
    let userService: UserService;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers: [UserService]
        })
        userService = TestBed.inject(UserService)
    })
    it('create a service', ()=>{
        expect(userService).toBeTruthy()
    })
})
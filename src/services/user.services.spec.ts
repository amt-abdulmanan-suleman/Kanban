import 'zone.js';
import 'zone.js/testing';
import { UserService } from "./user.service";
import { TestBed } from '@angular/core/testing'
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { UtilsService } from './utils.service';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())

describe('UserService', () => {
    let userService: UserService;
    const utilsServiceMock = {
        pluck: jest.fn()
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService, {provide: UtilsService, useValue: utilsServiceMock}]
        })
        userService = TestBed.inject(UserService)
    })
    it('create a service', () => {
        expect(userService).toBeTruthy()
    })
    describe('addUser', () => {
        it('should add a user', () => {
            const user = {
                id: '2',
                name: 'foo'
            }
            userService.addUser(user);
            expect(userService.users).toEqual([{ id: '2', name: 'foo' }])
        })
    })
    describe('remove user', () => {
        it('should remove a user', () => {
            userService.users = [{
                id: '2',
                name: 'foo'
            }]
            userService.removeUser('2')
            expect(userService.users).toEqual([])
        })
    })
})
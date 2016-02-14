import {Http} from 'angular2/http';
import {Component, View, Inject} from 'angular2/core';
let baseUrl: string = '/api';
export const _Settings = {
    baseUrl: baseUrl,
    url: {
        login: baseUrl + '/login',
        developer: baseUrl + '/developer',
        project: baseUrl + '/project',
        task: baseUrl + '/task',
        leave: baseUrl + '/leave',
    }
}


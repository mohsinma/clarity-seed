import { PeopleService } from './../people.service';
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { State } from '@clr/angular';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [PeopleService]
})
export class HomeComponent {
    // users = [
    //     {id: 1, name: 'Alice1'},
    //     {id: 2, name: 'Alice2'},
    //     {id: 3, name: 'Alice3'},
    //     {id: 4, name: 'Alice4'}
    // ];
    currentPage = 1;
    totalItems = 0;
    people = [];
    loading = true;

    constructor(private peopleService: PeopleService) {
    }

    refresh(state: State) {
        console.log(state);
        this.loading = true;
        this.peopleService.get(this.currentPage).subscribe(data => {
            this.people =  data.results;
            this.totalItems = data.count;
            this.loading = false;
        });
    }

}


import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PersonListDto, PersonServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
    templateUrl: './phonebook.component.html',
    animations: [appModuleAnimation()],
    styleUrls: ['./phonebook.component.css']
})

export class PhonebookComponent extends AppComponentBase implements OnInit {
    people: PersonListDto[] = [];
    filter: string = '';

    constructor(
        injector: Injector,
        private _personService: PersonServiceProxy
    ) {
        super(injector);
    }

    ngOnInit(): void {
        this.getPeople();
    }

    getPeople(): void {
        this._personService.getPeople(this.filter).subscribe((result) => {
            this.people = result.items;
        });
    }

  }
    



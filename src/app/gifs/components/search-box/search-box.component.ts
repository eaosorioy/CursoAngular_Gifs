import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar:</h5>
    <input type= "text"
    class= "form-control"
    placeholder= "Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput>
    `
})

export class SearchBoxComponent implements OnInit {
    @ViewChild('txtTagInput')
    tagInput!: ElementRef<HTMLInputElement>


    constructor( private _gifsService : GifsService) { }

    ngOnInit() { }

    searchTag() {
        const newTag = this.tagInput.nativeElement.value;
        this._gifsService.searchTag(newTag);
        console.log("🚀 ~ file: search-box.component.ts:28 ~ SearchBoxComponent ~ searchTag ~ newTag:", newTag)
        this.tagInput.nativeElement.value = '';
    }
}





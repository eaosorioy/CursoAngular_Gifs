import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
    constructor() { }

    ngOnInit() { }

    searchTag() {
        const newTag = this.tagInput.nativeElement.value
        console.log("🚀 ~ file: search-box.component.ts:24 ~ SearchBoxComponent ~ searchTag ~ newTag:", newTag)
    }
}





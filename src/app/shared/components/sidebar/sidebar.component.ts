import { Component, inject } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

  constructor( private _gifsService : GifsService) { }

  get tags() {
    return this._gifsService.tagsHistory;
  }

  SearchTag(newTag: string) {
    this._gifsService.searchTag(newTag);
  }
  
}

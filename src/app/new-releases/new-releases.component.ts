import { Component, OnInit } from '@angular/core';
import * as data from '../data/newReleasesAlbums.json';


@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  public releases: any;

  constructor() { }

  ngOnInit(): void {
    this.releases = data.albums.items;
  }

}

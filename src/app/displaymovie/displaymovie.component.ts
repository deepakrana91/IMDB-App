import { Collection } from './../shared/collection.model';
import { CollectionService } from 'app/shared/collection.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-displaymovie',
  templateUrl: './displaymovie.component.html',
  styleUrls: ['./displaymovie.component.css']
})
export class DisplaymovieComponent implements OnInit {

  collection:Collection[]=[];
  
  constructor(private collectionservice:CollectionService) { }

  ngOnInit() {

    this.collection= this.collectionservice.getCollectables();
  }

}

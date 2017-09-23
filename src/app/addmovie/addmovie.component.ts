import { Collection } from './../shared/collection.model';
import { CollectionService } from 'app/shared/collection.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

 movie:Collection[]=[];
  constructor( private collectionservice:CollectionService) { }

  ngOnInit() {
   
    
  }
  onSubmit(form:NgForm){
  
   let model:Collection = {

    name:form.value.name,
    description:form.value.description,
    Date:form.value.Date,
    rating:form.value.rating
   }
   form.reset();
   this.collectionservice.addCollectables(model);
  }
      
           
         
    
  

  
}

import { Collection } from 'app/shared/collection.model';


export class CollectionService {

private collectables: Collection[] = [
    new Collection('Bahubali','When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom',new Date(2017, 11, 20),8.5),
    new Collection('The Shawshank Redemption','Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',new Date(1994, 11, 20),9.2),
    new Collection('Annabelle: Creation ','12 years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they soon become the target of the dollmakers possessed creation, Annabelle.',new Date(2017, 9, 12),7)
    

    ];

    getCollectables() {

        return this.collectables;
    }

    addCollectables(item:Collection){
     this.collectables.unshift(new Collection(item.name,item.description,new Date(item.Date),item.rating));
    }


}
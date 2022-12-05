import { Injectable } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  
    faceSnaps: FaceSnap[] = [
        // vos FaceSnap ici
        faceSnaps: FaceSnap[] = [
            {
              id:1, 
              title: 'Archibald',
              description: 'Mon meilleur ami depuis tout petit !',
              createdDate: new Date(),
              snaps: 10,
              imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
              location: 'Londres'
            },
            {
              id:2,
              title: 'Mountain',
              description: 'sympa',
              createdDate: new Date(),
              snaps: 15,
              imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            }]
    ];


    getFaceSnapById(faceSnapId: number) : FaceSnap {
        const faceSnap = this.faceSnaps.find(FaceSnap => faceSnap.id = faceSnapId); 
        if(faceSnap) {  
            faceSnap.snaps++;
        } else{
            return faceSnap; 
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId); 
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap. snaps--;  
    }


}
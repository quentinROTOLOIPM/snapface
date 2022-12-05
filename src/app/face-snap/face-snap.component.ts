import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {


  @Input() faceSnap!:FaceSnap; 
  textButton!:string;  // 
  
  constructor(private faceSnapsService: FaceSnapsService) {

  }


  ngOnInit() {
    this.textButton = 'Oh Snap!'; 
  }

  snap(){
    
  }
  
  
  onClickSnap () {
    if(this.textButton == 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap'); 
      this.textButton = 'OOps, Unsnap!'; 
    }
    else{

      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.textButton = 'Oh Snap!'; 
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {


  
  textButton!:string;  // 
  
  constructor(private faceSnapsService: FaceSnapsService,
              private route:ActivatedRoute) {

  }


  ngOnInit() {
    this.textButton = 'Oh Snap!'; 
    const faceSnapId = this.route.snapshot.params['id'];
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

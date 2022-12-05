export class FaceSnap {

    // ? allows u to add an optional property, in this situation it is the location of the picture

    id!: number; 
    title!:string; 
    description!: string;
    createdDate!: Date; 
    snaps!: number;
    imageUrl!: string;
    location?: string; 

  }
export class Movies {
         public name: string;
         public year: number;
         public description: string;
         public imagePath: string;
         public starCount: number;

         constructor(
           name: string,
           yr: number,
           desc: string,
           imgPath: string,
           starCount: number
         ) {
           this.name = name;
           this.year = yr;
           this.description = desc;
           this.imagePath = imgPath;
           this.starCount = starCount;
         }
       }

import { Movies } from '../models/movies.model';

export class MoviesService {
         private moviesList: Movies[] = [
           new Movies(
             "Avengers: Endgame",
             2019,
             // tslint:disable-next-line:max-line-length
             "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos's actions and restore order to the universe.",
             "../../assets/images/Avenger_Endgame.jpg", 5
           ),
           new Movies(
             "Once Upon a Time in Hollywood",
             2019,
             // tslint:disable-next-line:max-line-length
             "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
             "../../assets/images/OUATIH.jpg", 5
           ),
           new Movies(
             "The Shawshank Redemption",
             1994,
             // tslint:disable-next-line:max-line-length
             "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
             "../../assets/images/TSR.jpg", 5
           )
         ];

         getMovies() {
           return this.moviesList.slice();
         }
       }

       /*
       ,
           
           new Movies(
             "The Silence of the Lambs ",
             1991,
             // tslint:disable-next-line:max-line-length
             "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
             "../../assets/images/TSOTL.jpg"
           ),
           new Movies(
             "Moneyball",
             2011,
             // tslint:disable-next-line:max-line-length
             "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
             "../../assets/images/Moneyball.jpg"
           ),
           new Movies(
             "The Wolf of Wall Street",
             2013,
             // tslint:disable-next-line:max-line-length
             "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
             "../../assets/images/WOWS.jpg"
           ),
           new Movies(
             "Interstellar",
             2014,
             // tslint:disable-next-line:max-line-length
             "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
             "../../assets/images/Interstellar.jpg"
           ),
           new Movies(
             "Fight Club",
             1999,
             // tslint:disable-next-line:max-line-length
             "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
             "../../assets/images/FightClub.jpg"
           )
       */
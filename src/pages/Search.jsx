import React, { useState } from "react";
import Nav from '../Nav';
import Movie from '../components/Movie';
import TVlist from '../components/TVlist';
import { Navigate } from "react-router-dom";

// import { movieList } from "../movieList";
// import { seriesList } from "../seriesList";
const IMG_BASE_URLM ="https://image.tmdb.org/t/p/w1280/"


// import { IMG_BASE_URL } from '../../../src/components/Movie';
// Define movieList and seriesList as arrays of objects
const movieList = [{"adult":false,"backdrop_path":"/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg","genre_ids":[16,35,10751],"id":1075794,"original_language":"en","original_title":"Leo","overview":"Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.","popularity":1508.996,"poster_path":"/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg","release_date":"2023-11-17","title":"Leo","video":false,"vote_average":7.507,"vote_count":423},
{"adult":false,"backdrop_path":"/xgGGinKRL8xeRkaAR9RMbtyk60y.jpg","genre_ids":[16,10751,10402,14,35],"id":901362,"original_language":"en","original_title":"Trolls Band Together","overview":"When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.","popularity":1710.225,"poster_path":"/qV4fdXXUm5xNlEJ2jw7af3XxuQB.jpg","release_date":"2023-10-12","title":"Trolls Band Together","video":false,"vote_average":7.183,"vote_count":276},
{"adult":false,"backdrop_path":"/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg","genre_ids":[18,36],"id":872585,"original_language":"en","original_title":"Oppenheimer","overview":"The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.","popularity":988.331,"poster_path":"/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg","release_date":"2023-07-19","title":"Oppenheimer","video":false,"vote_average":8.146,"vote_count":5192},
{"adult":false,"backdrop_path":"/4MUfDtBqUFqotGF5RJOfNfoBTLo.jpg","genre_ids":[28,27,14],"id":951546,"original_language":"en","original_title":"Reign of Chaos","overview":"When the world is gripped by a plague unleashed by the evil lord Chaos, and humans are turned into rabid creatures, mankind can only be saved by three young women, descendants of a Goddess, with the power to stop Chaos' evil.","popularity":832.011,"poster_path":"/nTMmpvR9TyV631tpFr4FtYxG0FC.jpg","release_date":"2022-04-12","title":"Reign of Chaos","video":false,"vote_average":5.885,"vote_count":13},
{"adult":false,"backdrop_path":"/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg","genre_ids":[27,9648],"id":507089,"original_language":"en","original_title":"Five Nights at Freddy's","overview":"Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.","popularity":693.595,"poster_path":"/j9mH1pr3IahtraTWxVEMANmPSGR.jpg","release_date":"2023-10-25","title":"Five Nights at Freddy's","video":false,"vote_average":7.841,"vote_count":2667},
{"adult":false,"backdrop_path":"/j9LX1sF7WSXmJlnhf0RGpWzEC0i.jpg","genre_ids":[28,12,53],"id":299054,"original_language":"en","original_title":"Expend4bles","overview":"Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.","popularity":601.4,"poster_path":"/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg","release_date":"2023-09-15","title":"Expend4bles","video":false,"vote_average":6.429,"vote_count":856},
{"adult":false,"backdrop_path":"/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg","genre_ids":[28,80,53],"id":385687,"original_language":"en","original_title":"Fast X","overview":"Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.","popularity":574.012,"poster_path":"/fiVW06jE7z9YnO4trhaMEdclSiC.jpg","release_date":"2023-05-17","title":"Fast X","video":false,"vote_average":7.198,"vote_count":4394},
{"adult":false,"backdrop_path":"/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg","genre_ids":[878,28,53],"id":670292,"original_language":"en","original_title":"The Creator","overview":"Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.","popularity":676.101,"poster_path":"/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg","release_date":"2023-09-27","title":"The Creator","video":false,"vote_average":7.131,"vote_count":1302},
{"adult":false,"backdrop_path":"/qX0HHTH4i8joKfYsVJTGu8ebBMZ.jpg","genre_ids":[28,12,878],"id":775244,"original_language":"ar","original_title":"موسى","overview":"An engineering college student invents the first of its kind robot in the Middle East, in an attempt to avenge his father's death and achieve justice, which gets him pursued by the authorities.","popularity":563.797,"poster_path":"/voo0uaAVCGYgAAeJEf5peFNPOAI.jpg","release_date":"2021-08-11","title":"Mousa","video":false,"vote_average":6.474,"vote_count":19},
{"adult":false,"backdrop_path":"/vRx6kzCItpqwnYCcj2z8qf70gv3.jpg","genre_ids":[28,18,10749],"id":10908,"original_language":"en","original_title":"Inferno","overview":"Eddie Lomax (Jean-Claude Van Damme) is a drifter who has been in a suicidal funk since the death of his close friend Johnny (Danny Trejo). Riding his motorcycle into a small desert town where Johnny once lived, Lomax is confronted by a gang of toughs, who beat him and steal his bike. However, Lomax is not a man to take an injustice lying down, and soon he begins exacting a violent revenge on the men who stole his motorcycle, with local handyman Jubal Early (Pat Morita) lending a hand and several area ladies offering aid and comfort.","popularity":563.504,"poster_path":"/dFlI0Vb4JOsRXG1JSS2Ufs6Sp8k.jpg","release_date":"1999-09-25","title":"Inferno","video":false,"vote_average":6.104,"vote_count":275},
{"adult":false,"backdrop_path":"/8WBh82iOYRykS3C05RipWTX70xh.jpg","genre_ids":[35,14,10751,80],"id":798021,"original_language":"en","original_title":"Family Switch","overview":"When the Walker family members switch bodies with each other during a rare planetary alignment, their hilarious journey to find their way back to normal will bring them closer together than they ever thought possible.","popularity":607.817,"poster_path":"/fnRUCA0fjEb3kuIaTGogL7425IC.jpg","release_date":"2023-11-30","title":"Family Switch","video":false,"vote_average":6.353,"vote_count":160},
{"adult":false,"backdrop_path":"/wurJckmxIzn2GrJcPDuNFFy1gWx.jpg","genre_ids":[878],"id":920258,"original_language":"en","original_title":"The Immortal Wars: Rebirth","overview":"Rebirth takes place during the early brutal stages of Dominion Industries. In this story watch Olive and other deviants undergo a series of deadly experiments lead by Laurie Harvey and her team.","popularity":498.152,"poster_path":"/sp0fISNTyzttKfE0PB4ObG5ZRzC.jpg","release_date":"2021-11-02","title":"The Immortal Wars: Rebirth","video":false,"vote_average":3.5,"vote_count":2},
{"adult":false,"backdrop_path":"/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg","genre_ids":[28,35],"id":897087,"original_language":"en","original_title":"Freelance","overview":"An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.","popularity":789.043,"poster_path":"/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg","release_date":"2023-10-05","title":"Freelance","video":false,"vote_average":6.436,"vote_count":140},
{"adult":false,"backdrop_path":"/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg","genre_ids":[18,878,28],"id":940721,"original_language":"ja","original_title":"ゴジラ-1.0","overview":"In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?","popularity":505.278,"poster_path":"/fk62hm95sVNHy5Lkx3d18wj1v19.jpg","release_date":"2023-11-03","title":"Godzilla Minus One","video":false,"vote_average":8.449,"vote_count":49},
{"adult":false,"backdrop_path":"/iaMIylLoN7Y3CvrA0pg2ZFKjk26.jpg","genre_ids":[10752,18,28],"id":1047925,"original_language":"en","original_title":"Come Out Fighting","overview":"In WWII, a squad of U.S. African-American soldiers are sent on a rescue mission behind enemy lines to locate their lost commanding officer and a downed fighter pilot.","popularity":623.644,"poster_path":"/sERwJxz0sqsbcUoTm66l9pI6HcH.jpg","release_date":"2023-05-19","title":"Come Out Fighting","video":false,"vote_average":4.7,"vote_count":22},
{"adult":false,"backdrop_path":"/EEASOZj5Mm2u6G3K4HS4pKIlfC.jpg","genre_ids":[27,9648],"id":1035982,"original_language":"en","original_title":"Hell House LLC Origins: The Carmichael Manor","overview":"A group of cold case investigators stay at the Carmichael Manor, site of the grisly and unsolved murders of the Carmichael family back in the eighties. After four nights, the group was never heard from again. What is discovered on their footage is even more disturbing than anything found on the Hell House tapes.","popularity":426.536,"poster_path":"/9YlsIwWATGwT6LL5UZVF5xoBTcC.jpg","release_date":"2023-10-24","title":"Hell House LLC Origins: The Carmichael Manor","video":false,"vote_average":6.243,"vote_count":37},
{"adult":false,"backdrop_path":"/awWppR6CmJ6gqM6UjMz5DJ4zZaP.jpg","genre_ids":[36,28,18],"id":960481,"original_language":"mn","original_title":"Хотулун гүнж: Алтан судрын эрэлд","overview":"Princess Khotulun is the daughter of Haidu Khan of the Ugudei dynasty. The film tells the story of Princess Khotulun, the son of Kublai Khan, known in Western and Eastern history as a wrestling princess, and her struggle to reclaim her Golden Sutra.","popularity":448.128,"poster_path":"/dhD4QNmZwfh88y4Dm5XsX7dWFVf.jpg","release_date":"2021-12-03","title":"Princess Khutulun","video":false,"vote_average":7.073,"vote_count":41},
{"adult":false,"backdrop_path":"/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg","genre_ids":[16,10751,12,14,35],"id":502356,"original_language":"en","original_title":"The Super Mario Bros. Movie","overview":"While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.","popularity":420.342,"poster_path":"/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg","release_date":"2023-04-05","title":"The Super Mario Bros. Movie","video":false,"vote_average":7.741,"vote_count":7339}
];
const seriesList = [ {"backdrop_path":"/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg","first_air_date":"1952-12-26","genre_ids":[10763],"id":94722,"name":"Tagesschau","origin_country":["DE"],"original_language":"de","original_name":"Tagesschau","overview":"German daily news program, the oldest still existing program on German television.","popularity":3363.623,"poster_path":"/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg","vote_average":6.9,"vote_count":184},
{"backdrop_path":"/218ZehBKlH8efPRRccmB7bu0oLQ.jpg","first_air_date":"2023-09-25","genre_ids":[35,9648,10766,18],"id":219109,"name":"Elas por Elas","origin_country":["BR"],"original_language":"pt","original_name":"Elas por Elas","overview":"Seven friends who met in their youth at an English course meet again 25 years later; Lara, Taís, Helena, Adriana, Renée, Natália and Carol, each of them has a different personality and origin, but they share a deep affection.","popularity":3240.031,"poster_path":"/m0cvvnhnRXdQhLARx7qt9lz7hTE.jpg","vote_average":5.4,"vote_count":28},
{"backdrop_path":"/oOce9hLMVFubjAJliau4kiSNPnW.jpg","first_air_date":"1990-09-13","genre_ids":[80,18],"id":549,"name":"Law & Order","origin_country":["US"],"original_language":"en","original_name":"Law & Order","overview":"In cases ripped from the headlines, police investigate serious and often deadly crimes, weighing the evidence and questioning the suspects until someone is taken into custody. The district attorney's office then builds a case to convict the perpetrator by proving the person guilty beyond a reasonable doubt. Working together, these expert teams navigate all sides of the complex criminal justice system to make New York a safer place.","popularity":3202.067,"poster_path":"/77OPlbsvX3pzoFbyfpcE3GXMCod.jpg","vote_average":7.5,"vote_count":475},
{"backdrop_path":"/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg","first_air_date":"2023-01-09","genre_ids":[10751,35],"id":218145,"name":"Mom for rent","origin_country":["SK"],"original_language":"sk","original_name":"Mama na prenájom","overview":"Abandoned by his wife, Martin is lying to his daughter not to be upset. But as Hanka grows, these lies become unbearable. Martin meets Nada unexpectedly, asked her to be a rent-a-mother and all lives are completely changed.","popularity":3175.144,"poster_path":"/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg","vote_average":5.2,"vote_count":24},
{"backdrop_path":"/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg","first_air_date":"2017-07-17","genre_ids":[80,18],"id":72879,"name":"Tomorrow is Ours","origin_country":["FR"],"original_language":"fr","original_name":"Demain nous appartient","overview":"The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.","popularity":2780.296,"poster_path":"/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg","vote_average":6.1,"vote_count":47},
{"backdrop_path":"/2GflJk6Hm1L3FFVWIvnuOskDFGv.jpg","first_air_date":"2023-08-28","genre_ids":[18,9648],"id":226773,"name":"Senior High","origin_country":["PH"],"original_language":"tl","original_name":"Senior High","overview":"A student’s death causes a scandal at the prestigious Northford High. Investigations conclude it was a suicide. The victim’s twin sister thinks otherwise. As she searches for truth, she will unravel secrets that are far more shocking and dangerous.","popularity":2452.276,"poster_path":"/k285iD6gZIoLsVSczSjc4WIXkdc.jpg","vote_average":7.2,"vote_count":6},
{"backdrop_path":"/zKBkTNmsNdUjkW4mBBDEh1WwBPP.jpg","first_air_date":"2023-08-07","genre_ids":[18,9648],"id":229947,"name":"The Elegant Empire","origin_country":["KR"],"original_language":"ko","original_name":"우아한 제국","overview":"A man and a woman take revenge desperately yet elegantly after being trampled on by enormous power.","popularity":2248.129,"poster_path":"/w4HHWY2sZrwPvvA9qy4dpYPSVPp.jpg","vote_average":7.3,"vote_count":6},
{"backdrop_path":"/4W2sH4CXzJ98ScuLGRij1KakzSv.jpg","first_air_date":"2023-09-18","genre_ids":[10751,35],"id":230525,"name":"Unpredictable Family","origin_country":["KR"],"original_language":"ko","original_name":"우당탕탕 패밀리","overview":"A romantic family drama about a divorced couple who broke up 30 years ago out of hate, reuniting as in-laws through their children and overcoming long overdue conflicts and enmity.","popularity":2212.145,"poster_path":"/goMzJ6rxTndGki2pKpyAKuKNXHY.jpg","vote_average":7,"vote_count":4},
{"backdrop_path":"/rj3jBAZwPiOgkwAy1205MAgLahj.jpg","first_air_date":"2018-08-27","genre_ids":[10766],"id":81329,"name":"Chronicles of the Sun","origin_country":["FR"],"original_language":"fr","original_name":"Un si grand soleil","overview":"","popularity":2190.727,"poster_path":"/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg","vote_average":7.4,"vote_count":52},
{"backdrop_path":"/46PJ9taXITt1aXPZTMJXpBw5MlU.jpg","first_air_date":"2023-08-21","genre_ids":[],"id":232937,"name":"Minas de Pasión","origin_country":["MX"],"original_language":"es","original_name":"Minas de Pasión","overview":"Emilia a single mother who works in a mine fall in love with Leonardo the son of Roberta Castro the most powerful of the people. Roberta will seek revenge on Emilia by making her life miserable.","popularity":2176.737,"poster_path":"/lLJBisfhikqTD0Cj9a2ZJw5kyOe.jpg","vote_average":7.6,"vote_count":30},
{"backdrop_path":"/hwUQsL1cWt0bmbTxzCompqqvTH9.jpg","first_air_date":"2004-01-22","genre_ids":[10764],"id":82250,"name":"Gran hermano VIP","origin_country":["ES"],"original_language":"es","original_name":"Gran hermano VIP","overview":"","popularity":2168.253,"poster_path":"/9269PATr0bmEXKjkpR88mzGmNYI.jpg","vote_average":4.1,"vote_count":16},
{"backdrop_path":"/xYhbLfLbamisMHCTrb7yqdYuYCw.jpg","first_air_date":"2001-10-22","genre_ids":[10764],"id":12513,"name":"Operación triunfo","origin_country":["ES"],"original_language":"es","original_name":"Operación triunfo","overview":"Reality-show talent contest aimed to find the country's next solo singing sensation, putting a selection of hopefuls through their paces by getting them to sing a variety of cover versions of popular songs, with tutoring from various professionals.","popularity":2143.441,"poster_path":"/2OHQg65fxUlAGpAJxDs3dafbJsB.jpg","vote_average":5.7,"vote_count":12},
{ "backdrop_path":"/eWF3oRyL4QWaidN9F4uvM7cBJUV.jpg","first_air_date":"2005-10-13","genre_ids":[10766],"id":206559,"name":"Binnelanders","origin_country":["ZA"],"original_language":"af","original_name":"Binnelanders","overview":"A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.","popularity":2077.059,"poster_path":"/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg","vote_average":5.4,"vote_count":19},
{"backdrop_path":"/qZ7CdO7rkH0KyCxvZBoP4Mm2cQL.jpg","first_air_date":"2021-08-30","genre_ids":[10767,99],"id":132544,"name":"Great Minds","origin_country":["KR"],"original_language":"ko","original_name":"위대한 수업, 그레이트 마인즈","overview":"","popularity":2051.248,"poster_path":"/lj46PSaBziqCqbGXlmnXN325biA.jpg","vote_average":4.3,"vote_count":8},
{"backdrop_path":null,"first_air_date":"2005-09-05","genre_ids":[18,35],"id":36361,"name":"Ulice","origin_country":["CZ"],"original_language":"cs","original_name":"Ulice","overview":"Ulice is a Czech soap opera produced and broadcast by Nova. In the Czech language Ulice means street.\n\nThe show describes the lives of the Farský, Jordán, Boháč, Nikl, and Liška families and many other people that live in Prague. Their daily battle against real problems of living in a modern world like divorce, love, betrayal and illness or disease. Ulice often shows crime.","popularity":2035.504,"poster_path":"/3ayWL13P1HeRnyVL9lU9flOdZjq.jpg","vote_average":2.5,"vote_count":16},
{"backdrop_path":"/yYNa1nqvNK94xZz3eKyfvZdAvPi.jpg","first_air_date":"2020-11-02","genre_ids":[10766],"id":112470,"name":"Here it all begins","origin_country":["FR"],"original_language":"fr","original_name":"Ici tout commence","overview":"","popularity":1993.631,"poster_path":"/60cqjI590JKXCAABqCStVmSBGET.jpg","vote_average":6.8,"vote_count":30},
{"backdrop_path":"/aWPhMZ0P2DyfWB7k5NXhGHSZHGC.jpg","first_air_date":"2023-05-08","genre_ids":[18,80,10766],"id":209265,"name":"Land of Desire","origin_country":["BR"],"original_language":"pt","original_name":"Terra e Paixão","overview":"When her husband is killed in a land grabbing attempt, Aline takes charge of cultivating his land and protecting his family. Facing the powerful Antonio La Selva, responsible for the death of her husband and the largest landowner in the region, Aline is determined to keep possession of her land and invest in its production. However, she didn't expect that she would fall in love with Daniel, son of her rival, who is at odds with his rebellious half-brother, Caio, who, in turn, also falls in love with the girl. In the interior of Brazil, Aline will have to fight two battles: the dispute for her lands and for her heart.","popularity":1986.78,"poster_path":"/33HrrOZQKRp7W3dNXPmKB0udA2m.jpg","vote_average":6.5,"vote_count":133},
{ "backdrop_path":"/d4uBYX4ssmzyR8E2Nvc7O4ZjulR.jpg","first_air_date":"2023-06-18","genre_ids":[10764],"id":225553,"name":"Gran hermano","origin_country":["CL"],"original_language":"es","original_name":"Gran hermano","overview":"","popularity":1981.385,"poster_path":"/A4MmFM6NlrsexPccslCZzqv8HsD.jpg","vote_average":0,"vote_count":0},
{"backdrop_path":"/i8iqYtAy9qcO5RSrA1f6fY1n6SN.jpg","first_air_date":"2015-11-16","genre_ids":[10766],"id":235484,"name":"Suidooster","origin_country":["ZA"],"original_language":"af","original_name":"Suidooster","overview":"Suidooster is a South African television soap opera produced by Suidooster Films which revolves around a matriarch, her family, friends and the people of Suidooster, a small shopping and business centre in the fictional Cape Town suburb of Ruiterbosch.","popularity":1929.555,"poster_path":"/u4tPY6df9atOne5soyW7vUyRgvD.jpg","vote_average":8.7,"vote_count":3},
    
]; 

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState({ movies: [], series: [] });

  const onChange = (e) => {
    const userInput = e.target.value;
    setSearchInput(userInput);

  const onClick = () => {
    Navigate(`/Movie/`, {})
 }

    // Filter movies based on user input
    const filteredMovies = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(userInput.toLowerCase())
    );

    // Filter series based on user input
    const filteredSeries = seriesList.filter((series) =>
      series.name.toLowerCase().includes(userInput.toLowerCase())
    );

    // Update the results state
    setSearchResults({ movies: filteredMovies, series: filteredSeries });
  };


  return (
    <div className="Search" style={{ backgroundColor: "black" }}>
      <Nav />
      <div className="input-group">
        <input
          className="SearchForm"
          type="text"
          placeholder="Search Titles of Movies, Sports, etc.,"
          onChange={onChange}
          value={searchInput}
        />
      </div>
      <div className="searchResult" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Display movie results */}
        <h2>Movies</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', marginLeft: '40px'}}>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
          {searchResults.movies.map((movie) => (
            <div key={movie.id}>
              <Movie 
                title={movie.original_title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                overview={movie.overview}
              />
              {movie.poster_path && (
                <div>
                  {/* Create the full path for the movie poster */}
                </div>
              )}
            </div>
          ))}
          </div>
        </div>

        {/* Display series results */}
        <h2>Series</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', marginLeft: '40px'}}>
          {searchResults.series.map((series) => (
            
            <div key={series.id}>

            <TVlist
              name={series.name}
              poster_path={series.poster_path}
              vote_average={series.vote_average}
              overview={series.overview} 
              />

                {series.poster_path && (
            <div>
            </div>
    )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

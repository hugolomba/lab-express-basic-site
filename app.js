const express = require("express");

const app = express();

// deixar o express disponibilizar o que tem na pasta public
app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  response.send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Lady Gaga's Page</title>
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <body>
    <div class= container>
      <h1>Welcome to Lady Gaga's Page</h1>
      <p>This is a page with some basic informations about Lady Gaga</p>

      <ul>
      <li><a href=/home>Home</a></li>
      <li><a href=/about>About</a></li>
      <li><a href=/works>Works</a></li>
      </ul>
  
      </div>
    </body>
  </html>
`);
});

app.get("/about", (request, response, next) => {
  console.log(request);
  response.send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>About</title>
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <body>
    <div class=container>
      <h2>About</h2>
      <ul>
      <li><a href=/home>Home</a></li>
      <li><a href=/about>About</a></li>
      <li><a href=/works>Works</a></li>
      </ul>
      <p> <strong>Stefani Joanne Angelina Germanotta</strong>, known professionally as Lady Gaga, is an American singer, songwriter, and actress. She is known for her image reinventions and musical versatility. Gaga began performing as a teenager, singing at open mic nights and acting in school plays. She studied at Collaborative Arts Project 21, through the New York University Tisch School of the Arts, before dropping out to pursue a career in music. After Def Jam Recordings canceled her contract, she worked as a songwriter for Sony/ATV Music Publishing, where she signed a joint deal with Interscope Records and KonLive Distribution, in 2007. Gaga had her breakthrough the following year with her debut studio album, The Fame, and its chart-topping singles "Just Dance" and "Poker Face". The album was later reissued to include the extended play The Fame Monster (2009), which yielded the successful singles "Bad Romance", "Telephone", and "Alejandro".
      Gaga's five succeeding studio albums all debuted atop the US Billboard 200. Her second full-length album, Born This Way (2011), explored electronic rock and techno-pop and sold more than one million copies in its first week. The title track became the fastest-selling song on the iTunes Store, with over one million downloads in less than a week. Following her EDM-influenced third album, Artpop (2013), and its lead single "Applause", Gaga released the jazz album Cheek to Cheek (2014) with Tony Bennett, and the soft rock album Joanne (2016). She ventured into acting, winning awards for her leading roles in the miniseries American Horror Story: Hotel (2015–2016) and the musical film A Star Is Born (2018). Her contributions to the latter's soundtrack, which spawned the chart-topping single "Shallow", made her the first woman to win an Academy Award, BAFTA Award, Golden Globe Award, and Grammy Award in one year. Gaga returned to dance-pop with her sixth studio album, Chromatica (2020), which yielded the number-one single "Rain on Me". She followed this with her second collaborative album with Bennett, Love for Sale, and a starring role in the biopic House of Gucci, both in 2021.
      
      Having sold an estimated 170 million records, Gaga is one of the world's best-selling music artists and the only female artist to achieve four singles that each sold at least 10 million copies globally. Her accolades include 13 Grammy Awards, two Golden Globe Awards, 18 MTV Video Music Awards, awards from the Songwriters Hall of Fame and the Council of Fashion Designers of America, and recognition as Billboard's Artist of the Year (2010) and Woman of the Year (2015). She has also been included in several Forbes' power rankings and ranked fourth on VH1's Greatest Women in Music (2012). Time magazine named her one of the 100 most influential people in the world in 2010 and 2019 and placed her on their All-Time 100 Fashion Icons list. Her philanthropy and activism focus on mental health awareness and LGBT rights; she has her own non-profit organization, the Born This Way Foundation, which supports the wellness of young people. Gaga's business ventures include Haus Labs, a vegan cosmetics brand launched in 2019.</p>
      <img src="/images/lady-gaga.jpeg" />
    </body>
    </div>
  </html>
`);
});

app.get("/works", (request, response, next) => {
  console.log(request);
  response.send("<h1>Welcome to Lady Gaga's Page :) </h1>");
});
app.listen(3000, () => {});

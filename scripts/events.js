const eventsList = [
    {
      "date": "1st August 2020",
      "title": "Armoured Flu Unit, Local Mad Man, The Werecats",
      "venue": "The Queen's Head Pub - Brixton"
    },
    {
      "date": "9th May 2020",
      "title": "Local Mad Man, DSA, Prang, Copywronged",
      "venue": "The Chelsea Inn - Bristol"
    },
    {
      "date": "15th Feb 2020",
      "title": "Torque Armada, Local Madman, Sayonara Suckers",
      "venue": "The Carlisle - Hastings"
    },
    {
      "date": "17th Nov 2019",
      "title": "Good-Will Gesture",
      "venue": "The New Cross Inn - London"
    },
    {
      "date": "26th October 2019",
      "title": "Local Mad Man, Lesser Known Character, Tenplusone",
      "venue": "The Chelsea Inn - Bristol"
    },
    {
      "date": "7th Sep 2019",
      "title": "Don't Believe the Hype Fest 3",
      "venue": "The Fighting Cocks - Kingston"
    },
    {
      "date": "23rd August 2019",
      "title": "Peter And The Test Tube Babies, Rats Nest, Local Mad Man",
      "venue": "Elephant & Castle - Ramsgate"
    },
    {
      "date": "16th August 2019",
      "title": "Manifestation (Ger) BUH. Local Mad Man",
      "venue": "The Bird's Nest - Deptford"
    },
    {
      "date": "11th August 2019",
      "title": "Sunday Tea Time Hardcore (All Dayer)",
      "venue": "The Holroyd Arms - Guildford"
    },
    {
      "date": "31st May 2019",
      "title": "Grand Collapse, Rotten Foxes, Local Mad Man",
      "venue": "The Pipeline - Brighton"
    },
    {
      "date": "25th May 2019",
      "title": "Punk At The Star",
      "venue": "The Shooting Star - Southampton"
    },
    {
      "date": "7th March 2019",
      "title": "Thursday Night Hardcore",
      "venue": "The Fighting Cocks - Kingston"
    },
    {
      "date": "2nd March 2019",
      "title": "Extreme Noise Terror + Eat Dirt, Local Mad Man, BKS, Canavar",
      "venue": "The New Cross Inn - London"
    },
    {
      "date": "5th January 2019",
      "title": "Overload, Dub Righters, Do One, Local Mad Man, Röadkïll, B.U.H.",
      "venue": "The Bird's Nest - Deptford"
    }
  ];


function events() {
    var gigList = "";
    
    for (let i = 0; i < eventsList.length; i++) {
        gigList += `<div class="row gig-date"><div class="col-lg-2">${eventsList[i].date}</div><div class="col-lg">${eventsList[i].title}</div><div class="col-md-auto">${eventsList[i].venue}</div></div>`;
    };
    return gigList;
};

var eventsElement = document.getElementById("events-list");

eventsElement.innerHTML = events();
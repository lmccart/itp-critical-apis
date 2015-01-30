Critical APIs
=================

**NYU ITP, Spring 2015**

* Lauren McCarthy [laurmccarthy@gmail.com](mailto:laurmccarthy@gmail.com)
* Wednesdays 12:10-2:40, Room 445
* [Office hours signup](http://bit.ly/1hECzFK), Room 455
* [Resident office hours signup](https://itp.nyu.edu/inwiki/)

# Overview
An API allows a connection between two different applications. It can pass data and information, or provide access to modify or control the application itself. Though APIs are often thought of in terms of their functionality, they are never neutral. Expectations about why and how it might be used and who should be able to use it are embedded in the infrastructure of the system. This course will look critically at the structures of power and control inherent in APIs, and explore possibilities to subvert ideologies imposed by the technology. We will build applications that access various APIs, as well as design APIs of our own. Students will use Processing, as well as JavaScript for both server-side and client-side programming, covering tools such as JSON, OAuth, AJAX, node.js, p5.js, jQuery.

Central to the class is the idea that APIs are by nature future-oriented, providing an access point where we may reimagine and renegotiate the world we live in. The course will be project-based, complemented by shorter technical exercises, readings, and research. Experience with JavaScript is highly recommended.	

# Evaluation

Grades will be determined according to the following breakdown:
* Project 1 25%
* Project 2 25%
* Final Project 25%
* Participation and attendance 25%

Please see ITP's statement on [Pass/Fail](http://help.itp.nyu.edu/academic-policies/pass-fail) which states that a "Pass" is equivalent to an "A" or a "B" while anything less would be considered a "Fail".

The class will be a mix of seminar and studio:

### Discussion

There will be a number of readings for this course. Each reading will be prepared by one pair of students, who will read in depth and present and lead a discussion around the ideas in it. The goal is not to just give a report, but to engage the class in an interesting and provocative discussion. Things to include in your planning / presentation include:

* Summary of main ideas.
* Links, images, or video of projects / products / things referenced in the reading.
* Other relevant things you've read, heard, or seen.
* Personal experiences.
* Questions for the class related to the reading.
* Questions for the class that relate all three of the readings together.

On the days you are not presenting, you do not need to read all of each reading, but you need to read/scan enough to be able to participate in the class discussion.

Sign up for the reading you'd like to present on by putting your name next to it in the syllabus. ([instructions for modifying README.md](https://gist.github.com/lmccart/ee86d58f2c012145215a))

### Projects

There will be three projects during the class. The first two will have more specific guidelines, and the final project will be open. For the first two projects, you may actually implement something, or you may present a conceptual mock-up of an idea. The final project must be something you actually create, not just a concept. It may expand on one of the earlier projects.

The technical workshops in the class will use JavaScript. You are welcome to use any language or tool for your work.


# Syllabus

## Part 1: Protocol and control

### Week 1 (1/28, 3/25)
* Intro and syllabus
* History of APIs
  * [IBM System/360](http://www.beagle-ears.com/lars/engineer/comphist/c20-1684/fig001.jpg) (1964) 
  * [salesforce.com](https://raw.githubusercontent.com/lmccart/itp-critical-apis/master/images/salesforce-2000.png) (2000) 
  * [ebay](http://kinlane-productions.s3.amazonaws.com/ebay/ebay-developer-program-history.png) (2000)
  * [AWS](http://kinlane-productions.s3.amazonaws.com/amazon/Amazon-Web-Services-News-Release.png) (2002)
  * del.icio.us (2003)
  * flickr (2004)
  * [Facebook API](https://www.facebook.com/notes/facebook/facebook-development-platform-launches/2207512130) (2006)
  * [Twitter API](https://blog.twitter.com/2006/introducing-twitter-api) (2006) 
  * [Google Maps API](http://googleblog.blogspot.com/2005/06/world-is-your-javascript-enabled_29.html) (2006)
  * Amazon [S3](http://aws.amazon.com/about-aws/whats-new/2006/03/13/announcing-amazon-s3---simple-storage-service/) and [EC2](http://aws.amazon.com/about-aws/whats-new/2006/08/24/announcing-amazon-elastic-compute-cloud-amazon-ec2---beta/) (2006)
  * [programmableweb.com](http://www.programmableweb.com/news/web-platform/2005/08/20) (2005)
  * [mashery.com](http://techcrunch.com/2006/11/06/mashery-api-management-service-is-open-for-business/) (2006)
  * [twilio](http://dovetailsoftware.com/wp-content/uploads/MTE5Ni1pbWFnZV8yMjgwQjE1Ni5wbmc=.png) (2007)
  * [foursquare](http://venturebeat.com/2009/03/10/dodgeball-founder-pegs-google-in-the-face-with-foursquare/) (2009)
  * [Oracle vs Google](https://www.eff.org/deeplinks/2014/05/dangerous-ruling-oracle-v-google-federal-circuit-reverses-sensible-lower-court) (2014)
  * Instagram [unofficial API](http://www.programmableweb.com/news/full-featured-unpublished-instagram-api/2010/12/15) (2010) and [official API](http://blog.instagram.com/post/8756150468/a-real-time-api-for-next-generation-apps) (2011)
* Politics of APIs
  * ["Politics of APIs" diagram](https://d262ilb51hltx0.cloudfront.net/max/1448/1*B-pvEvv5tTMZdu7Kfk7Efg.png), Kin Lane
  * [Medium: Politics of APIs](https://medium.com/politics-of-apis/the-politics-of-apis-3a29b8dfee64), Tyler Singletary
  * [5 Things to Understand About Open APIs](http://www.mashery.com/blog/5-things-understand-about-successful-open-apis), Chuck Freedman
* Survey
  * [Life Sharing](http://0100101110101101.org/life-sharing/), Eva and Franco Mattes
  * Revealing metadata
    * [Floodwatch](http://floodwatch.o-c-r.org/), Ashkan Soltani, The Office for Creative Research - [You are not your browser history](https://medium.com/backchannel/you-are-not-your-browser-history-cdff623a3b24)
    * [Internet Illuminator](http://blog.allisonburtch.net/post/86472605463/internet-illuminator), Allison Burtch
    * [Trackography](https://trackography.org/)
    * [commodify.us](https://commodify.us/)
    * [RealCosts](http://therealcosts.com/)
    * [Harlo Holmes on Activism and Metadata](https://vimeo.com/114175594), Deep Lab
  * Resistance
    * [GWEI](http://www.paolocirio.net/work/gwei/), Paolo Cirio, Alessandro Ludovico, Ubermorgen
    * [web2.0 suicide machine](http://suicidemachine.org/), moddr_, Fresco Gamba
    * [Punk Rock 101](http://www.coryarcangel.com/things-i-made/punkrock101), Cory Arcangel
  * Automation
    * [Random Darknet Shopper](http://hyperallergic.com/174827/art-bot-buys-drugs-tests-the-bounds-of-consciousness/), !Mediengruppe Bitnik
    * [Amazon Random Shopper](http://boingboing.net/2012/12/26/if-you-give-a-bot-a-gift-card.html), Darius     Kazemi
  * Visualization
    * [Prison Map](http://prisonmap.com/about), Josh Begley
    * [Directions to Last Visitor](http://directionstolastvisitor.com/)
    * [Hit Counter](https://www.youtube.com/watch?v=_pxrrTNDV4g), Jonah Brucker-Cohen
    * [America's Got No Talent](http://www.americasgot-notalent.com/), Katherine Moriwaki, Jonah Brucker-Cohen
    * [Drones](http://drones.pitchinteractive.com/), Pitch Interactive
    * [The Refugee Project](http://www.therefugeeproject.org/), Hyperakt
    * [Critical Network Mapping](http://burak-arikan.com/works), Burak Arikan - [Eyeo](https://vimeo.com/117422191)
    * [Selfie City](http://selfiecity.net/), Lev Manovich, Moritz Stefaner, et al
    * [Data](http://www.stfj.net/data2010/works.html), Zach Gage
* Technical workshop: API shortcuts and alternatives
  * [IFTTT](https://ifttt.com/)
  * [Zapier](https://zapier.com)
  * [import.io](https://import.io/)
  * [itDuzzit](http://cloud.itduzzit.com/)
  * [Yahoo pipes](https://pipes.yahoo.com/pipes/)
  * [Temboo](https://www.temboo.com/)
  * [Kimono](https://www.kimonolabs.com/) - turn websites into structured APIs
* **[Project 1 (DUE 2/11)](https://github.com/lmccart/itp-critical-apis/wiki/Assignments#project-1-due-211)**

### Week 2 (2/4, 4/1)
* **Discussion: protocol and control**
  * Tania Bucher, [Objects of Intense Feeling: The Case of the Twitter] (Renata Kuba) API](http://computationalculture.net/article/objects-of-intense-feeling-the-case-of-the-twitter-api)
  * Alexander Galloway, [Protocol](http://mitpress.mit.edu/books/protocol) - Introduction
  * [The Anxieties of Big Data](http://thenewinquiry.com/essays/the-anxieties-of-big-data/), Kate Crawford (Tanya Campbell, Pat Shiu)
* Technical workshop
  * JS basics
  * REST, JSON
  * Server side / OAuth


### Week 3 (2/11, 4/8)
* Review Project 1
* Part 2 intro / survey
* [The Internet's Own Boy: The Story of Aaron Swartz](https://www.youtube.com/watch?v=vXr-2hwTk58)
* **[Project 2 (DUE 2/11)](https://github.com/lmccart/itp-critical-apis/wiki/Assignments#project-2-due-225)**

## Part 2: Response and freedom

### Week 4 (2/18, 4/15)
* **Guest workshop [Sam Slover](http://samslover.com/)**
  * Create your own API with node.js.
  * Model and collect data.
  * Create and serve-up API endpoints in a RESTful style (responding with JSON).
* **Discussion: open web / access, tactical media, exploits, hacking**
  * [Critical Art Engineering](http://www.critical-art.net/books/ecd/ecd2.pdf), Electronic Civil Disobedience
  * Manifestos
    * [UBERMORGEN.COM](http://www.ubermorgen.com/manifesto/)
    * [Critical Engineering](http://criticalengineering.org/), Julian Oliver, Gordan Savičić, Danja Vasiliev
    * [A Hacker Manifesto](http://subsol.c3.hu/subsol_2/contributors0/warktext.html), McKenzie Wark
  * [The ABC of Tactical Media](http://subsol.c3.hu/subsol_2/contributors2/garcia-lovinktext.html), David Garcia, Geert Lovink and [The Exploit: A Theory of Networks](http://lab404.com/379/galloway_thacker_exploit.pdf), Alexander Galloway, Eugene Thacker
  
  
### Week 5 (2/25, 4/22)
* **Guest lecture [Kawandeep Virdee](http://blog.whichlight.com/)** (2/25)
* Review Project 2
* Part 3 intro / survey
* **[Final Project (DUE 3/11)](https://github.com/lmccart/itp-critical-apis/wiki/Assignments#final-project-due-311)** 


## Part 3: Networks

### Week 6 (3/4, 4/29)
* Technical workshop
  * Hardware / device APIs
  * Arduino Yun
* **Discussion: The Internet of Things and People** 
  * [A Design Methodology for Deconstructing Networks](http://conceptlab.com/criticalmaking/PDFs/CriticalMaking2012Hertz-Manifestos-pp33to38-BruckerCohen-ADesignMethodologyForDeconstructingNetworks.pdf), Jonah Brucker-Cohen and [Impersonating the Machine](http://booktwo.org/notebook/impersonating-the-machine/), James Bridle
  * [The Cult of Sharing](http://www.mrteacup.org/post/the-cult-of-sharing.html), Mike Bulajewski (Luke Kao, Xi Liu)
  * [The Epic Struggle for the Internet of Things](http://www.strelka.com/en/press/books/the-epic-struggle-for-the-internet-of-things), Bruce Sterling (Soni Hahn)


### Week 7 (3/11, 5/6)
* Review Final Projects
* Wrap-up


# Resources

### JS basics - tutorial
* [CodeAcademy: JavaScript](http://www.codecademy.com/tracks/javascript)
* [How to learn JavaScript properly](http://javascriptissexy.com/how-to-learn-javascript-properly/)
* [JavaScript the right way](http://www.jstherightway.org/)
* [Code School](https://www.codeschool.com/paths/javascript)
* [JavaScript garden](http://bonsaiden.github.io/JavaScript-Garden/)
* [A re-introduction to JS by Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [JavaScript 101 from JQuery](https://learn.jquery.com/javascript-101/)
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596000486.do)
* [Eloquent JavaScript](http://eloquentjavascript.net/contents.html), Marijn Haverbeke
* [Beginning JavaScript](http://www.amazon.com/Beginning-JavaScript-Paul-Wilton/dp/0470525932), Paul Wilton and Jeremy McPeak
* [Learn-JS.org](http://www.learn-js.org/) - especially the sections on [functions](http://www.learn-js.org/en/Functions), [objects](http://www.learn-js.org/en/Objects), and [callbacks](http://www.learn-js.org/en/Callbacks)
* [Learning Advanced JavaScript](http://ejohn.org/apps/learn/)
* http://www.nyu.edu/lynda - lots of great tutorials here. Log in with your normal nyu net-id/password for full access.
* [CodeAcademy](http://www.codecademy.com/)
* [Flat Iron School](http://prework.flatironschool.com/web-development/)
* [HTML & CSS book](http://www.htmlandcssbook.com/)
* [JavaScript book](http://www.javascriptbook.com/)

### APIs - tutorial
* [APIs: Strategy Guide (O'Reilly)](http://www.amazon.com/APIs-Strategy-Guide-Daniel-Jacobson/dp/1449308929/)
* [RESTful Web APIs (O'Reilly)](http://www.amazon.com/RESTful-Web-APIs-Leonard-Richardson/dp/1449358063)
* [codecademy APIs tutorials](http://www.codecademy.com/learn)
* [lynda.com: Effective Design of RESTful APIs](http://www.lynda.com/API-tutorials/Effective-Design-RESTful-APIs/166777-2.html)
* [lynda.com: Up and Running with Cloud Service APIs](http://www.lynda.com/API-tutorials/Up-Running-Cloud-Service-APIs/151707-2.html)
* [Scraping the web with node.js](https://scotch.io/tutorials/scraping-the-web-with-node-js)

### Visualization tools
* [d3.js](http://d3js.org/) - JS library for manipulating documents based on data, using HTML, SVG, and CSS
* [p5.js](http://p5js.org/) - Processing reinterpreted for the web
* [raphael.js](http://raphaeljs.com/) - JS library for manipulating vector graphics for charts and viz
* [dygraphs](http://dygraphs.com/) - JS charting library
* [Vega](https://github.com/trifacta/vega) - describe data visualizations in a JSON format, and generate interactive views using either HTML5 Canvas or SVG
* [Gephi](https://gephi.github.io/) - interactive visualization and exploration platform for networks and complex systems

### General tools
* [Github student developer pack](https://education.github.com/pack) - includes Digital Ocean $100 credit and more!
* [Basic unix commands](http://www.webmonkey.com/2010/02/learn_enough_unix_for_your_resume/#Basic_Commands) - We'll be using the command line regularly in this class. Nothing too fancy; just the basics. Get familiar, at the very least, with the commands `ls`, `cd`, and `mkdir`. 
* Checking code: [JSLint](http://www.jslint.com/) / [JSHint](http://www.jshint.com)
* Browser debugging: Chrome Developer Tools ([tutorial](https://developer.chrome.com/extensions/tut_debugging)) / Firebug ([tutorial](http://www.developerfusion.com/article/139949/debugging-javascript-with-firebug/))
* Mobile debugging [jsconsole.com](http://jsconsole.com)
* Sharing code snippets (useful for asking questions): [gist.github.com](http://gist.github.com)
* [Critical Making](http://conceptlab.com/criticalmaking/), Garnet Hertz

### APIs
* [ProgrammableWeb](http://www.programmableweb.com/)
* http://en.wikipedia.org/wiki/List_of_open_APIs
* https://gist.github.com/afeld/4952991
* OpenWeatherMap - http://openweathermap.org/API
* NYTimes - http://developer.nytimes.com/
* The Guardian - http://www.theguardian.com/open-platform
* flickr - https://www.flickr.com/services/api/
* MTA - http://web.mta.info/developers/developer-data-terms.html#data
* Foursquare - https://developer.foursquare.com/
* Sunlight Foundation - http://sunlightfoundation.com/api/
* [apievangelist.com/](http://apievangelist.com/)
* [Museum APIs list](http://museum-api.pbworks.com/w/page/21933420/Museum%C2%A0APIs)

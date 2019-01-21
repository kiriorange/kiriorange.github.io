import React from 'react';

const net = ".NET",
  java = "Java",
  js = "JavaScript",
  vue = "VueJS",
  azure = "Microsoft Azure",
  bulma = "Bulma",
  node = "NodeJS",
  heroku = "Heroku",
  mongo = "MongoDB",
  unity = "Unity3D",
  csharp = "C#",
  android = "Android Studio";

var projectData = []

projectData.push({
  title: "Discord Sticker Bot",
  thumbnailurl: "./images/sticker_site.png",
  shortdesc: "A discord bot that posts images in response to other user's messages with an accompanying site as a gallery.",
  techs: [js, node, vue, mongo, heroku, azure, bulma],
  github: "https://github.com/maikgr/repulsion-stickers",
  long:
  <div class="desc">
  <p>As most Discord users know, one of the biggest limits in using it,
  is that there's a limit of 50 custom emojis per server. I noticed that to get around this,
  many users in my Discord server used custom images for emojis that were not available in the server.
  However, I felt that this was pretty troublesome for them, as to use a custom image, it meant that
  they would have to open the folder on their pc, search for the image and paste it into Discord
  every time they wanted to use it.</p>
  <p>To save them the trouble, I came up with the idea of building a sticker bot.
  The idea was to save all the commonly used images that didn't make the 50 custom emojis in a database
  with a corresponding keyword. Whenever a user posts a message, the bot will parse the message. If the message
  contains a keyword from the sticker database, the bot will post the sticker in response.
  Users will also be able to search and add stickers to the bot's sticker database.</p>
  <p>I succesfully built the bot using NodeJS with DiscordJS framework.
  I also used NodeJS with ExpressJS framework as backend to handle API requests from both
  and store data into MongoDB. Both bot and backend run on Heroku.</p>
  <img src="https://thumbs.gfycat.com/HappygoluckyAcclaimedHermitcrab-size_restricted.gif" alt="Posting, searching for and adding stickers"/>
  <p>In addition, I also built an accompanying <a href="https://varuzu.azurewebsites.net/" target="_blank" rel="noopener noreferrer">site</a> that
  acts as a gallery for users to browse through
  the available stickers and search for them in a more convenient way. The site was built using VueJS
  with Bulma as the CSS framework and hosted on Microsoft Azure.</p>
  <strong>Add img here</strong>
  </div>
})

projectData.push({
  title: "Wiki Web Crawler",
  thumbnailurl: "https://maikgr.github.io/images/crawler2.png",
  shortdesc: "A discord bot that stores and retrieves wiki data for quicker access and editing.",
  techs: [js, node, mongo],
  github: "https://github.com/maikgr/PriconneScrapper",
  long:
  <div class="desc">
  <p>I built a web crawler with NodeJS and DiscordJS that crawls through all the pages of a particular Japanese wiki site, parse the content
  and save it into a database based on MongoDB. I then added a Discord bot to a Discord server, where the users can use commands
  to retrieve those stored wiki entries. When the bot posts the entries in Discord, it will also automatically
  translate Japanese terms into English.</p>
  <img src="https://kiriorange.github.io/images/wiki_thumbnail.png" />
  <p>The purpose of this bot is to ??</p>
  </div>
})

projectData.push({
  title: "Space Crafters",
  thumbnailurl: "https://img.itch.zone/aW1hZ2UvMjUyMjA1LzEyMDY2MDEucG5n/794x1000/ypWXjb.png",
  shortdesc: "A 2D space-shooter game built for a 9-day game jam with the theme the theme 'WorkShop'. Was nominated for Best Game.",
  techs: [csharp, unity],
  github: "https://github.com/maikgr/project-spaceshooter",
  long:
  <div class="desc">
  <p>I took part in the <a href="https://itch.io/jam/dogpit-jam-2018" target="_blank" rel="noopener noreferrer">Dogpit Jam 2018</a>.
  It was a 9-day game jam, and the theme 'workshop' was announced on the first day of the game jam.
  I entered the game jam with one other teammate, and we spent the first day brainstorming ideas and scoping the game.
  We finally decided on a space shooter, where the player could pick up items to customise their ship.</p>
  <p>My job was mainly to draw the art assets for the game, which I made in Clip Studio Paint. I was
  also in charge of level design, and spent a lot of time researching
  popuplar shooter games and studied their gameplay to adapt into my game. I drew several mockups on inVision.</p>
  <p>I also coded the Workshop in the game, implementing the drag and drop system, and also worked on the special effects,
  using Unity's partical system, creating the feeling of moving through space.</p>
  <p>The game received positive feedback from the judges and was nominated for Best Game in the whole game jam</p>
  </div>
})

projectData.push({
  title: "The Rogue Gem",
  thumbnailurl: "https://img.itch.zone/aW1hZ2UvMjMzNTg2LzExMDkxNTUucG5n/315x250%23c/2eWndE.png",
  shortdesc: "My take on a roguelike genre game, featuring a cute slime with the power to absorb enemy's abilities as he tries to escape the forest. Made for the 7DRL Challenge 2018.",
  techs: [csharp, unity],
  github: "https://github.com/maikgr/project-spaceshooter",
  long:
  <div class="desc">
  <p>I built this game for the <a href="https://itch.io/jam/7drl-challenge-2018" target="_blank" rel="noopener noreferrer">7DRL Challenge 2018</a>.
  </p>
  </div>
})

projectData.push({
  title: "Guess the Card",
  thumbnailurl: "https://maikgr.github.io/images/crawler2.png",
  shortdesc: "An Android version of Guess Who.",
  techs: [java, android],
  github: "https://github.com/maikgr/project-spaceshooter",
  long:
  <div class="desc">
  </div>
})


projectData.push({
  title: "Ensquare",
  thumbnailurl: "https://maikgr.github.io/images/crawler2.png",
  shortdesc: "My first big project: a local multiplayer game, where players take turn moving around the board, battling each other and gaining points.",
  techs: [csharp, unity],
  github: "https://github.com/maikgr/repulsion-stickers",
  long:
  <div class="desc">
  <p>This was my first project built using Unity3D and also the first project of such size.
  I built this game from scratch: brainstormed the idea, drew the art, made the mock ups, and coded everything.
  As it was my first time using Unity3D, I spent a lot of time watching Unity videos and learning the basics.</p>
  <iframe src='https://gfycat.com/ifr/CarelessScholarlyLeonberger' frameborder='0' scrolling='no' allowfullscreen width='640' height='439'></iframe>
  <p>Looking at this project now a few years later, there's quite a few things that I can definitely improve
  on, but it was a great learning experience.</p>
  </div>
})


export default projectData;

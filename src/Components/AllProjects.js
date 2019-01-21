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
  <p>Here's an example of how the bot works. This clip also shows how you can search for
  stickers and add new stickers on Discord itself.</p>
  <img src="https://thumbs.gfycat.com/HappygoluckyAcclaimedHermitcrab-size_restricted.gif" alt="Posting, searching for and adding stickers"/>
  <p>In addition, I also built an accompanying <a href="https://varuzu.azurewebsites.net/" target="_blank" rel="noopener noreferrer">site</a> that
  acts as a gallery for users to browse through
  the available stickers and search for them in a more convenient way. The site was built using VueJS
  with Bulma as the CSS framework and hosted on Microsoft Azure.</p>
  <img src="/images/sticker_site.png" />
  </div>
})

projectData.push({
  title: "Wiki Web Crawler",
  thumbnailurl: "/images/wiki_thumbnail.png",
  shortdesc: "A discord bot that stores and retrieves wiki data for quicker access and editing.",
  techs: [js, node, mongo],
  github: "https://github.com/maikgr/PriconneScrapper",
  long:
  <div class="desc">
  <p>I built a web crawler with NodeJS and DiscordJS that crawls through all the pages of a particular Japanese wiki site, parse the content
  and save it into a database based on MongoDB. I then added a Discord bot to a Discord server, where the users can use commands
  to retrieve those stored wiki entries. When the bot posts the entries in Discord, it will also automatically
  translate Japanese terms into English.</p>
  <img src="/images/wiki_thumbnail.png" />
  <p>The purpose of this bot is to improve the quality of translations on the wiki site, as
  users can collaborate within Discord itself before using the bot to submit new entries.</p>
  </div>
})

projectData.push({
  title: "Space Crafters",
  thumbnailurl: "/images/space_thumbnail.png",
  shortdesc: "A 2D space-shooter game built for a 9-day game jam with the theme the theme 'WorkShop'. Was nominated for Best Game.",
  techs: [csharp, unity],
  github: "https://github.com/maikgr/project-spaceshooter",
  download: "https://varz.itch.io/space-crafters",
  long:
  <div class="desc">
  <p>I took part in the <a href="https://itch.io/jam/dogpit-jam-2018" target="_blank" rel="noopener noreferrer">Dogpit Jam 2018</a>.
  It was a 9-day game jam, and the theme 'workshop' was announced on the first day of the game jam.
  I entered the game jam with one other teammate, and we spent the first day brainstorming ideas and scoping the game.
  We finally decided on a space shooter, where the player could pick up items to customise their ship.</p>
  <p>My job was mainly to draw the art assets for the game, which I made in Clip Studio Paint. I was
  also in charge of level design, and spent a lot of time researching
  popuplar shooter games and studied their gameplay to adapt into my game. I drew several mockups on inVision.</p>
  <p>Here are some of the boss patterns that I designed</p>
  <img src="https://thumbs.gfycat.com/FreshThoseLeopardseal-size_restricted.gif" />
  <img src="https://thumbs.gfycat.com/FluffyHandyDrever-size_restricted.gif" />
  <p>I also coded the Workshop in the game, implementing the drag and drop system, and also worked on the special effects,
  using Unity's partical system, creating the feeling of moving through space.</p>
  <img src="/images/space_craft2.jpg" />
  <p>The clip below shows the general gameplay (sped up).</p>
  <img src="https://thumbs.gfycat.com/NeighboringScaredFiddlercrab-size_restricted.gif" />
  <p>The game received positive feedback from the judges and was nominated for Best Game in the whole game jam</p>
  </div>
})

projectData.push({
  title: "The Rogue Gem",
  thumbnailurl: "/images/rogue_thumbnail.png",
  shortdesc: "My take on a roguelike genre game, featuring a cute slime with the power to absorb enemy's abilities as he tries to escape the forest. Made for the 7DRL Challenge 2018.",
  techs: [csharp, unity],
  github: "https://github.com/maikgr/project-spaceshooter",
  download: "https://varz.itch.io/theroguegem",
  long:
  <div class="desc">
  <p>I built this game for the <a href="https://itch.io/jam/7drl-challenge-2018" target="_blank" rel="noopener noreferrer">7DRL Challenge 2018</a>.
  It was my first game jam ever so I was pretty new to the idea of coming up with an idea and scoping it
  to ensure it's doable within 7 days. My final idea was a game that feature a slime
  who can absorb the power of enemies it faces.
  </p>
  <img src="/images/rogue_gem1.png" />
  <p>I wrote all of the code for this project except for the world generation.
  One of the hardest things I had to implement was the pathfinding algorithm,
  such that every time the player moved, other randomly spawned enemies would take
  a step towards the the player. After some research, I finally implemented an A* pathfinding algorithm.
  Here's an example of the pathfinding algorithm where enemies walk around obstacles to get to the player.</p>
  <img src="https://thumbs.gfycat.com/MinorSpiffyAustraliansilkyterrier-size_restricted.gif" />
  <p>Asides from being algorithmically challenging, another hard part of implementing the game was
  desiging the architecture. I had to put my software design skills to use, to design the enemies and
  their abilities in a clean way so that I could implement the power-absorbing skill.</p>
  <p>Overall, it was a pretty fun experience and I learned a lot from this project.</p>
  </div>
})

projectData.push({
  title: "Guess the Card",
  thumbnailurl: "/images/guess_thumbnail.png",
  shortdesc: "An Android version of Guess Who.",
  techs: [java, android],
  github: "https://github.com/maikgr/guessthecard",
  long:
  <div class="desc">
  <p>Guess Who is a classic game, but it's limited by the fact that it requires the board to play.
  I decided to make a mobile adaptation of the game.</p>
  <p>The idea is pretty simple. One player can create a game lobby with a room code, and another
  person can join them using that same room code. Once 2 players have entered the game lobby,
  the game starts! Here's a demo of how it works.</p>
  <p><iframe src='https://gfycat.com/ifr/ImportantAcademicBighorn' frameborder='0' scrolling='no' allowfullscreen width='100%' height='400'></iframe></p>
  <p>There's an Android and a server component to this app. I built the Android part,
  using <strong>butterknife</strong> for binding Android Views and <strong>socket.io</strong> to connect to the server.</p>
  <p>There still a couple more things that I'd like to work on to complete this game. Such as:
  <ol>
  <li>Implement a message box so people can use it to type and questions and play without needing face to face discussion</li>
  <li>Allow users to upload their own images to use as cards</li>
  <li>Add a play again button</li>
  </ol>
  Overall, it was a pretty fun project and I learned a lot about RecyleView from doing it!
  </p>
  </div>
})


projectData.push({
  title: "Ensquare",
  thumbnailurl: "/images/ensquare_thumbnail.png",
  shortdesc: "My first big project: a local multiplayer game, where players take turn moving around the board, battling each other and gaining points.",
  techs: [csharp, unity],
  github: "https://github.com/maikgr/repulsion-stickers",
  long:
  <div class="desc">
  <p>This was my first project built using Unity3D and also the first project of such size.
  I built this game from scratch: brainstormed the idea, drew the art, made the mock ups, and coded everything.
  As it was my first time using Unity3D, I spent a lot of time watching Unity videos and learning the basics.</p>
  <p>Here's the character selection screen, where each player takes a turn to choose their own character.</p>
  <img src="https://thumbs.gfycat.com/CapitalDistortedHarborporpoise-size_restricted.gif" />
  <p>Once the game starts, each player takes turns rolling a dice and their character will automatically
  move the said number of steps. There are a number of Event Tiles on the board, which can trigger different
  events.</p>
  <img src="https://thumbs.gfycat.com/PalatableBossyKrill-size_restricted.gif" />
  <p>If players step on a Duel Tile, they'll have to "duel" another random player.
  In this clip, the duel results in a draw, so nothing happens, but if someone lost
  they would lose a point!</p>
  <img src="https://thumbs.gfycat.com/SeveralPolishedAmericanbadger-size_restricted.gif" />
  <p>Looking at this project now a few years later, there's quite a few things that I can definitely improve
  on, but it was a great learning experience.</p>
  </div>
})


export default projectData;

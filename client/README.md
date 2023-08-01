Zemoga Front End Development - Moises David Plata :)
==================================================

|** 📝Resume of my experience **|

In overall was an excellent test, love to work with a really good design as template,
was a challenge the time since I was able to work by some hours through the day. 

Hope that you could find this code clear and understandable as I tried to did it.


"|** 🛠️ TechStack Used 🚀**|"

--FrontEnd:
 -TypeScript
 -React
 -CSS / HTML
 -React-Icons / React-Slick

--BackEnd:
 -TypeScript
 -ExpressJS
 -Mongoose

--DB:
 -MongoDB

** And a little from google when I forgot the media queries format, and to find the picture of   each famous.

|** 🚀 Steps to run 🏃**|

1. This project was developed with NodeJS v18.12.0 and Git 2.34, an older version of this
   could generate some issues.

2. Once this is cloned Run "npm install" on ./client folder

3. Once everything was installed you can run: "npm run dev" and this will start the project on
   host:5173

4. This project does not need any .env file since the backend url and else are directly on
   code (For sure I know this isn't the ideal but was to make the thing easier for you).

5. Take a look :) 


      If by any chance there is a problem starting in local, I deployed de project as extra:

       🚀 https://zemoga-fd-moises.vercel.app/

      I hope there is no problem to have it public, if it's please tell me to remove the website. Thanks.
      
|** 🔖 How is this divided 🔖**|

This project was made with React running on vite and typescript, to give a brief overall,
you could find that I mix the template provided and the react app. All my work is inside the 
./src folder, and this is divided with the .src/main.tsx that is the connection between the public html and my react code. 

- ./src/components where resides the Body and Card folder, both functional components 
  to render the cards requested, more documentation will be found there, also you will find
  the css here, divided by each component Card and Body.

- ./src/services there is just the logic where I created controllers to post the votes and get
  the cards from MongoDB, there is a little more info on the API documentation.



|** 🌟 Opportunities to Improve according to me 🚀**|

Since I don't have more time to make it perfect, I want to say that I would have make a better planeation from beggining, since at the middle of the project I found that I could be doing the things a little different, this to have a simplest and better CSS and less code, and also an eaisest way to set the Grid and List differences.

Also I missed to add the unit test with Jest this because the time, this to verify pure function components and to verify controllers and utils.

I was trying to change the "px" to "rem" but I found that with the default root (16px) the size was different from the template, I left at the end to change it and fix it but now Im running out of time.

And at the end, you will find that the api is a little slow this is because this is just the default Railway and MongoDB plan where is hosted the server, so you'll find that will take a little more time to update the percentage and bring the cards.

But even taking into acccount this, Im really proud of the result :). Anything else to add, thank you for the opportunity and have a great day.


-------------------------------------------------------------------------------------------------
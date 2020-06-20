# Music Full Stack Application
This application will mimic a music streaming website; unsure if I will integrate actual mp4 files but abilities I would like to create are:<br>

- Admin page(s) that has the ability to create, remove, and update data on the website

- User Interface(s)
    - a page to see and search through songs
    - ability to view a songs information on it's own page, info like
        - artist(s)
        - lyrics
        - release year
    - a download song mimic

## Technologies
- NodeJS
- JavaScript
- Express
- Pug
- CSS
- Mongoose/MongoDB
- Dotenv
- Morgan

## Project Timeline
#### June 20, 2020
##### 2:20pm - 5:00pm
Began creating a homepage for the website using the template engine Pug ([home view](https://github.com/ChristianPari/Music-FS-App/tree/master/views/home.pug)). I created a heading and then a search bar that will allow the user to search for artists albums and songs that will be displayed on the homepage in a div below the search bar. I tried working at getting the filtering system to work but was unable to, will spend the majority of my time on that next session. I used HTML's table tag to create the display of songs on the homepage, not sure if this was the best option as of now but it seemed like it would give the best structure. As of now the songs are displayed with the artist name, song name, and a mp3 preview of the song using HTML's audio tag.

#### June 19, 2020
##### 9:30pm - 11:15pm
Spent this time creating the middleware (database connection JS file), ensuring my DB connects to my server. Also, spent this time filling my DB with data, I created a single use fetch request to retrieve data from another API ([Deezer](https://rapidapi.com/deezerdevs/api/deezer-1?endpoint=53aa5087e4b0a798dbd1a615)) to make my life a little easier when filling the DB; I pulled the song titles, artists names, release year, song preivew in .mp3 format, album name, and specific track id for rapidAPI just incase it's needed later. I then grabbed the lyrics from another API ([Canarado](https://rapidapi.com/canarado/api/canarado-lyrics)) and added those to the DB manually.

#### June 18, 2020
##### 7:30pm
Installed neccessary dependencies and created starting files and folders 
# TempoRun Song Finder Application

## Description

As a runner training for a marathon, I want to be able to set my pace as I train, with a song playlist. Our team decided to create an application that allows the user to search for a specified BPM (beats per minute), and save songs from the search results to a playlist.

We were able to leverage as well as build upon the skills we have learned so far. A few examples are:
- Planning and delegating tasks for application development
- Creating a smooth and interactive user experience
- Learning how to use new third-party APIs
- Managing GitHub branches with commits and pull request made by more than one user

## Installation

N/A

## Technologies

This project is created with the following:

- Bulma version 0.9.4
- JQuery version 3.4.1
- Font Awesome version 5.11.2
- SweetAlert version 1

## Usage

Link to deployed application can be found [here](https://amaragh.github.io/tempo-run-songfinder/).

This application allows the user to search for songs by beats per minute (BPM). The allowed BPM range is 40-220 and the input element will validate against any value entered in this field. When the user submits the search, information for 10 songs is displayed below the hero element. The user can then add a song to their playlist by clicking the plus icon. TO access the playlist, click on the Playlist link in the nav bar. 

`ALSO NEED TO ADD INFO ABOUT NAVIGATING THE PLAYLIST PAGE`

## Credits

This project was completed by the following collaborators and their contributions are also noted below:

| [Camden Barnard](https://github.com/chikn4theWIN) | [Fidel Deaquino](https://github.com/fdeaquino) | [Patrick Duffy](https://github.com/Patrick-Duffy202) | [Alecia Maragh](https://github.com/amaragh) |
| --- | --- | --- |--- |
|Playlist HTML page | General display responsiveness | Homepage HTML skeleton |GetSongBPM API call|
| |Overall Bulma styling |Overall Bulma styling |Homepage song display|
| |Mobile responsiveness |Hero styling |Homepage song styling|
| | | |Homepage song mobile responsiveness|

The [GetSongBPM API](https://getsongbpm.com/) was used to retrieve the list of songs returned by the search on the homepage.

## License

Please see repo for license information
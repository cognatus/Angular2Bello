import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { Song } from './song';

@Component({
	selector: 'spotify-component',
	templateUrl: './spotify.component.html',
	styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent {

	songs: Song[];
	songAudio = new Audio;
	rola = null;

	constructor (private spotifyService:SpotifyService){}

	search(song){
		this.spotifyService.getSong(song)
			.subscribe(songs => this.songs = songs)
	}

	play(song){
		this.rola = song;
		this.songAudio.pause();
		this.songAudio.src = song.preview_url;
		this.songAudio.play();
	}

}

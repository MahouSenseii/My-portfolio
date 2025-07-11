import { Component } from '@angular/core';

interface Program {
  title: string;
  team: string;
  engine: string;
  tenure: string;
  genre: string;
  platform: string;
  description: string;
  route: string;
  image: string;
  video?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  programs: Program[] = [
    {
      title: 'First Five',
      team: 'Solo Developer',
      engine: 'Pixi.js',
      tenure: 'Jan 2017 - Nov 2017',
      genre: 'Dating Sim',
      platform: 'Web Browser',
      description: `Introducing First Five, a passion project that showcases the fundamentals of a dating sim game. Developed from scratch, this game allows players to dive into various levels, while interacting with the main heroine, Karen. As the developer, I designed and developed every aspect of this game to showcase the immersive experience that players engage in while playing a dating sim game.`,
      route: '/firstFive',
      image: '/assets/Images/FirstFive.png'
    },
    {
      title: 'Portfolio',
      team: 'Solo Developer',
      engine: 'Visual Studio Code',
      tenure: 'Feb 2023 - March 2023',
      genre: 'Website',
      platform: 'Web Browser',
      description: `Built a responsive website using HTML, CSS, and JavaScript that allows users to easily browse online. Implemented a user-friendly interface that features intuitive navigation. Included an interactive 3D rotation to showcase multiple projects that I've worked on.`,
      route: '/portfolio',
      image: '/assets/Images/Website.png'
    },
    {
      title: 'Project Hunter',
      team: 'Solo Developer',
      engine: 'Unreal Engine',
      tenure: 'Jan 2022 - Present',
      genre: 'ARPG',
      platform: 'PC/Console',
      description: `Project Hunter is an exciting in-development game that I have been working on, which combines seamless ARPG features with innovative game mechanics.`,
      route: '/projectHunter',
      image: '/assets/Images/Interaction.png',
      video: '/assets/Images/RandomLoot.mp4'
    }
  ];
}

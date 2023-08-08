import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  unrealSkills = ['Gameplay Programming', 'Game Development', 'AI Development', 'Niagara VFX', 'Optimization', 'Blueprints'];
  applications = ['Structured Query Language(SQL)', 'Github', 'Microsoft Office', 'Adobe Photoshop', 'Clip Studio', 'Blender', 'Unity'];
  programming = ['Object-oriented programming','HyperText Markup Language(HTML)','JavaScript', 'Visual Studio','Visual Code','C#','C++'];
}

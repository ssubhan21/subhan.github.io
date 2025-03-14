  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Flight Management App',
      description: [
        'This is a simple and efficient flight - hotel- car booking management app that focuses on making tasks like booking and managing of flights, cars and hotels.',
        'This project has various interfaces to manage multiple tasks. This was build as a fun project using JAVA.'
      ],
      techStack: ['C#', 'ASP.NET Framework'],
      image: '/assets/media-management-platform.webp',
      aosImage: 'fade-right',
      link: 'https://github.com/ssubhan21/COMP-2139-Assignments-W2024/tree/main/Assignment1'
    },
    {
      title: 'Simple Employee Management Web Application',
      description: [
        'Developed a simple employee management application using multiple techonolgies ',
        'Designed and implemented a user-friendly interface using react for front-end and node.js for backend and MongoDB for database management.'
      ],
      techStack: ['JavaScript', 'React', 'MongoDB', 'Node JS'],
      image: '/assets/smile-project.webp',
      aosImage: 'fade-left',
      link2: 'https://github.com/ssubhan21/101397394_comp3123_assignment2'
    },
    {
      title: 'Event-Booking App',
      description: [
        'The project involves the implementation of docker in a web application that books and manages event booking.',
        'The system displays how using microservices arhitecture and dockerizing an app helps in smooth and efficient running of a complex app'
      ],
      techStack: ['Java', 'Microservices ', 'Docker', 'MongoDB', '  Postgres'],
      image: '/assets/ai-receptionist.webp',
      aosImage: 'fade-right',
      link3: 'https://github.com/ssubhan21/Event-Booking-App'
    },
    {
      title: 'Realtime Chat-App',
      description: [
        'Developed a real-time chat-app which is similar to whatsapp and has real time chat funtiionality ',
      ],
      techStack: ['Angular', 'Tailwind CSS', 'JavaScript', 'MongoDB', 'Node JS'],
      image: '/assets/chat-app.jpg',
      aosImage: 'fade-left',
      link4: 'https://github.com/ssubhan21/chat-app'
    },
    {
      title: 'HomeEase - In-Home-Services App',
      description: [
        'Developed a App that makes booking At-Home services such as plumbing and carpentry easy. The audience for this app is especially people with disabilities and peopel with old age ',
        'App also helps brings oppurtunities for people such as handymans and people with the skills to the job'
      ],
      techStack: ['HTML','CSS', 'Tailwind CSS', 'JavaScript', 'mySQL','Python','Flask'],
      image: '/assets/home.png',
      aosImage: 'fade-left',
      link5: 'https://github.com/ssubhan21/HomeEase---In-Home-Services'
    }
  ];
}

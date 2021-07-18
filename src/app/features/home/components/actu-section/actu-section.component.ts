import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-actu-section',
  templateUrl: './actu-section.component.html',
  styleUrls: ['./actu-section.component.scss'],
})
export class ActuSectionComponent implements OnInit {
  constructor() {
  }

  public cards = [
    {
      title: 'Vécolo a changé ma manière de jouer à pokemon',
      publishDate: '16 Mars, 2021',
      imgUrl:
        'https://images.unsplash.com/photo-1542887486-c0aeb6d2fc46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      category: 'Article',
      author: 'David lafarge',
      lectureTime: 6,
      content: 'Heeeeeyyy salut à tous les amis ! C\'est David Lafarge pokemon et aujourd\'hui on se retrouve pour une session farming de pokemon en vélo E-LEC-TRIQUE grâce au service Vécolo ! ...',
      profileUrl:
        'https://www.age-anniversaire-celebrites.com/wp-content/uploads/david-lafarge-youtubeur.jpg',
    },
    {
      title: 'Les pires chutes en Vécolo',
      publishDate: '20 Mai, 2022',
      imgUrl:
        'https://images.pexels.com/photos/952895/pexels-photo-952895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'Video',
      author: 'LES PIRES',
      lectureTime: 4,
      content: 'Parce que les chutes c\'est toujours marrant, ça l\'est encore plus quand ça se produit chez nous !',
      profileUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      title: 'Comment Vécolo a changé la vie de Frederic',
      publishDate: '12 Février, 1912',
      imgUrl:
        'https://images.unsplash.com/photo-1456934559919-e9195dd7c553?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Etude de cas',
      author: 'Frédéric Sananes',
      lectureTime: 111,
      content: 'Maintenant que j\'utilise Vécolo, c\'est un gain de temps considérable ! Je peux arriver plus tôt à mon travail et partir le soir encore plus tard, mes étudiants en sont ravis ! Finis les trajets de 260km en vélo mécanique.',
      profileUrl:
        'https://api.vecolo.fr/uploads/sananes.jpg',
    },
  ];

  ngOnInit(): void {
  }
}

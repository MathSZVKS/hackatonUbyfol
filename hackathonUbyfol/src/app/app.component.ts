import { Component, AfterViewInit  } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hackathonUbyfol';
  faCheckCircle = faCheckCircle;
  page = 'mobile'

  selectedDiv: string = '27';
  div27: any;
  div28: any;
  div29: any;
  images = ['../assets/img/ubycover.png','../assets/img/allas.png','../assets/img/vitales.png','../assets/img/moon.png']
  cardBody = ['A mais completa e moderna tecnologia para recobrimento de fertilizantes de solo.<br><br>AntiDusting, anticaking, inibidores de urease aditivados e micros de alta eficiência para o solo. Presente em todo território nacional, Marrocos e Leste Europeu.',

  'Atua como operadora logística de serviços como transporte, armazenagem e assessoria.<br><br>É o transporte rápido e seguro para clientes Ubyfol e Ubycover tornando-se um diferencial competitivo da Uby nos mercados de especialidades onde atua.', 
  'Atua no segmento de controle biológicos para agricultura em todo território nacional', 
  'HUB de inovação para o agronegócio em parceria com AGTech Garage e prefeitura de Uberaba'
  ];

  constructor(  private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      'menu',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/menuIcon.svg")
    )
  }
  ngOnInit() {
    this.hideOrShowPin('27');
    this.div27 = document.getElementById('27');
    this.div28 = document.getElementById('28');
    this.div29 = document.getElementById('29');

    this.div27.style.display = 'none';
    this.div28.style.display = 'none';
    this.div29.style.display = 'none';

  }  

  hideOrShowPin(pin: string) {
    switch (pin) {
      case '27':
        if (this.div27) {
          this.selectedDiv = '27';
          if (this.div27.style.display == 'none') {
            this.div27.style.display = 'block';
            this.div28.style.display = 'none';
            this.div29.style.display = 'none';
          } else {
            this.div27.style.display = 'none';
          }
        }
        break;

      case '28':
        if (this.div28) {
          this.selectedDiv = '28';
          if (this.div28.style.display == 'none') {
            this.div28.style.display = 'block';
            this.div27.style.display = 'none';
            this.div29.style.display = 'none';
          } else {
            this.div28.style.display = 'none';
          }
        }
        break;

      case '29':
        if (this.div29) {
          this.selectedDiv = '29';
          if (this.div29.style.display == 'none') {
            this.div29.style.display = 'block';
            this.div28.style.display = 'none';
            this.div27.style.display = 'none';
          } else {
            this.div29.style.display = 'none';
          }
        }
        break;
    }
  }

  subscribe() {
    window.open(
      'https://www.sympla.com.br/evento/hackathon-ubyfol-apoio-fazu-e-parque-tecnologico/2188683?referrer=www.google.com',
      '_blank'
    );
  }

  redirect(page: string) {
    window.open(page, '_blank');
  }
}

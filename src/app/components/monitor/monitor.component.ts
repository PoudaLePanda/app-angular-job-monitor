import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { fadeIn } from '../../router.animations';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
  animations: [fadeIn],
  host: { '[@fadeIn]': '' }
})
export class MonitorComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private data: DataService
  ) {
  }

  ngOnInit() {
  }


  logOut() {
    this.authService.logOut();
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  addJobsRandom() {
    let statusArray = new Array(
      'Annulée',
      'En attente de validation',
      'En attente affectation PAO',
      'PAO',
      'Pré-production',
      'Impression',
      'Façonnage',
      'Mise sous pli',
      'Expédition',
      'Facturation',
      'Terminée'
    );
    let status = statusArray[Math.floor(Math.random() * statusArray.length)];
    let dateCommande = this.randomDate(new Date(2018, 3, 22), new Date(2018, 3, 24));
    let dateProd = this.randomDate(new Date(2018, 3, 22), new Date(2018, 3, 1));
    let dateDelivery = this.randomDate(new Date(2018, 3, 22), new Date(2018, 3, 24));
    let dateExpedition = this.randomDate(new Date(2018, 3, 22), new Date(2018, 3, 24));
    let quantity: number = Math.floor(Math.random());
    let codeCiscom: number = Math.floor(Math.random());
    let job = {
      "name": "Random job",
      "source": "locahost",
      "site": "site test",
      "campagne": "campagne test",
      "dateCommande": dateCommande,
      "dateProd": dateProd,
      "dateDelivery": dateDelivery,
      "dateExpedition": dateExpedition,
      "client": "client test",
      "graphiste": "graphiste test",
      "formatFini": "format test (A4 etc...)",
      "quantity": quantity,
      "codeCiscom": codeCiscom,
      "status": status
    };
    this.data.sendJob(job);
  }
}

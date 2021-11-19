import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    });

    constructor(private fb: FormBuilder,
      private auth: AuthService,
      public alertCtrl: AlertController,
      private router: Router) { }

  ngOnInit() {

    

  }
  login(){
    this.auth.loginUser(this.usuario.value.email, this.usuario.value.password).then( result => {
    this.router.navigate(['/tabs']);
    }).catch(err=>{
    this.alertCtrl.create({
    header: 'Error',
    subHeader: err.message,
    buttons: ['Aceptar']
    }).then(alert=>{
    alert.present();
    });
    });
    }

  

}

import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  wrongPass: boolean = false;

  public loginForm = this.formBuilder.group({
    password: ["", Validators.required]
  });

  constructor(private afAuth: AngularFireAuth, private router: Router, private formBuilder: FormBuilder) {
  }

  login(_form) {
    console.log(_form);
    this.afAuth.auth.signInWithEmailAndPassword('jill@boodschatten.nl', _form.controls.password.value).then(
      () => {
        this.router.navigate(['/admin']);
      },
      () => {
        this.wrongPass = true;
        setTimeout(() => {
          this.wrongPass = false;
        }, 2000)
      });
  }

  ngOnInit() {
  }

}

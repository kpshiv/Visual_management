import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
})
export class TeachersComponent {
  logoImage: string = '../../assets/icons/logo.png';
  smallLogoImage: string = '../../assets/icons/SmallLogo.png';
  isLogoToggled: boolean = false;

  toggleLogo() {
    this.isLogoToggled = !this.isLogoToggled;
    if (this.isLogoToggled) {
      this.logoImage = this.smallLogoImage;
    } else {
      this.logoImage = '../../assets/icons/logo.png';
    }
  }
}
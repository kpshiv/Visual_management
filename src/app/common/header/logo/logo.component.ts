import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  logoImage: string = '../../../assets/icons/logo.png';
  smallLogoImage: string = '../../../assets/icons/SmallLogo.png';
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
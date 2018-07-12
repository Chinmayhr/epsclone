import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public dropdownDisplay :any = 'none';
  public overlayDisplay :any = 'none';
  public hDropdownDisplay :any = 'none';
  public dropdownWidth :any = '150px';

  

  showDropdown(){
  	this.dropdownDisplay = 'flex';
  	this.overlayDisplay = 'block';
  	this.hDropdownDisplay = 'none';
  	this.dropdownWidth = '150px';

  }

  removeOverlay(){
  		this.dropdownDisplay = 'none';
  		this.overlayDisplay = 'none';
  		this.hDropdownDisplay = 'none';
  		this.dropdownWidth = '150px'
  }

  showHorizontalDropdown(){
  	this.hDropdownDisplay = 'block';
  	this.dropdownWidth = '700px'
  }

}

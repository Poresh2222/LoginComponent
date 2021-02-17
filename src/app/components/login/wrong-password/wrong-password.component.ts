import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BasePageComponent } from 'src/app/components/base-page/base-page.component';
import { lostPasswordTrx } from 'src/app/router-translation.labels';
import { TranslationConfig } from 'src/app/utils/translate-config';

@Component({
  selector: 'app-wrong-password',
  templateUrl: './wrong-password.component.html',
  styleUrls: ['./wrong-password.component.scss']
})
export class WrongPasswordComponent extends BasePageComponent {
  

  constructor(
    protected translationConfig: TranslationConfig
  ) { super() }

  @Output() closeEvent = new EventEmitter();


  ngOnInit(): void {
  }

  lostPassword(){
    this.closeEvent.next('/'+this.translationConfig.getTranslation(lostPasswordTrx));
  }


}

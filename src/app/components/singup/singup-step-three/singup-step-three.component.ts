import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
//import { SYSTEM_PAGE_CONTENT_QUERY } from 'src/app/apollo/static-page';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, takeUntil } from 'rxjs/operators';
//import { AnimationOptions } from 'ngx-lottie';
//import { Apollo } from 'apollo-angular';
//import { SystemPageResponse, SystemPage } from 'src/app/apollo/models/base-models';
import { BasePageComponent } from 'src/app/components/base-page/base-page.component';
//import { loginTrx } from 'src/app/router-translation.labels';
//import { TranslationConfig } from 'src/app/utils/translate-config';
//import { AvatarService } from 'src/app/services/profile/avatar.service';

@Component({
  selector: 'app-singup-step-three',
  templateUrl: './singup-step-three.component.html',
  styleUrls: ['./singup-step-three.component.scss']
})
export class SingupStepThreeComponent extends BasePageComponent {


  @Output() isCompleted = new EventEmitter<string>();

  @Input()
  set content(contentInput: SafeHtml) {
    this._content = contentInput;
    console.log(this._content)
  }

  //options: AnimationOptions = {
  //  path: 'assets/animations/succeeded.json',
  //  autoplay: true,
  //  loop: false,
  //};

  get content(): SafeHtml { return this._content; }

  constructor(
    //protected translationConfig: TranslationConfig,
    //protected avatarService: AvatarService
  ) { super() }

  private _content: SafeHtml;

  ngOnInit(): void {
    //this.avatarService.getCMSAvatars().pipe(
    //  map(avatars => {
    //    const avatar = avatars[Math.floor(Math.random() * avatars.length)];
    //    return avatar.thumbnail.url;
    //  }),
    //  map(avatar => {
    //    return this.avatarService.setAvatar(avatar);
    //  }),
    //  takeUntil(this.unsubscribe)
    //).subscribe(() => {

    //})
  }

  deposit() {
    //this.isCompleted.next('/' + this.translationConfig.getTranslation(loginTrx));
  }
  close() {
    this.isCompleted.next('/');
  }

}

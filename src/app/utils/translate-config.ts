import { Route } from '@angular/compiler/src/core';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TRANSLATED_ROUTES } from '../app-routing.module';
import { DetectDeviceService } from '../services/utils/detect-device.service';

@Injectable()
export class TranslationConfig {

    public config: Object = null;

    constructor(private router: Router,
        public detectDeviceService: DetectDeviceService,
        @Inject(TRANSLATED_ROUTES) public tranlatedRoutes: string
    ) {

    }

    /**
     * Use to get the data found in the second file (config file)
     */
    public getTranslation(key: string) {
        const trans = this.config[key];
        if (trans) return trans
        else return key
    }

    public translateUrlEntry(toTranslate:string): string{
        if (!!toTranslate){
            const entries = toTranslate.split('/');
            const result = entries.map(elem=>this.getTranslation(elem)).join("/");
            return result;
        }
        else{
            return toTranslate;
        }
    }

    private translatePathElement(pathElement){
        if (pathElement.children && pathElement.children.length > 0){
            pathElement.children.forEach(child => {
                child.path = this.translatePathElement(child);
            });
        }
        return this.translateUrlEntry(pathElement.path)
    }
    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    public load(mobileRoutes, desktopRoutes) {
        this.config = this.tranlatedRoutes;
        let currentRoutes = this.router.config

        if (mobileRoutes || desktopRoutes) {
            currentRoutes = this.detectDeviceService.isDesktop() ? desktopRoutes : mobileRoutes;
        }
        // console.log("translation callsed", currentRoutes)

        currentRoutes.forEach(entry => {
            entry.path = this.translatePathElement(entry);
            // entry.path = this.translateUrlEntry(entry.path);

            // if (entry.children && entry.children.length > 0){
            //     entry.children.forEach(child => {
            //         child.path = this.translateUrlEntry(child.path);
            //     });
            // }
        })
        this.router.resetConfig(currentRoutes);
    }
}
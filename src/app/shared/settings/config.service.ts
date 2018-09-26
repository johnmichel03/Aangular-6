import { Injectable } from '@angular/core';
import { ConfigSettings } from '../model/config-settings';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

   config: ConfigSettings;
  constructor() {
    this.config = new ConfigSettings();
    this.config.ApiBaseUrl = "http://localhost:8500";
  }

  getConfigs(): ConfigSettings {
    return this.config;
  }
}

import { DefaultSettings, Settings } from "../util/Constants";

/**
 * A direct manager for every setting that's supported by Iolite.
 */
export class SettingsManager {
    private settings: Settings;
    
    constructor() {
        // Assign default settings.
        this.settings = DefaultSettings;
    }
}
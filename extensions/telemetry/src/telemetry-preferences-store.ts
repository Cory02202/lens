import { BaseStore } from "@lens/extensions";
import { toJS } from "mobx"

export type TelemetryPreferencesModel= {
  enabled: boolean;
}

export class TelemetryPreferencesStore extends BaseStore<TelemetryPreferencesModel> {
  private constructor() {
    super({
      // fixme: ${configName}.json possible conflicts from different extensions
      configName: "telemetry-preferences-store",
      defaults: {
        enabled: true
      }
    })
  }

  get enabled() {
    return this.data.enabled
  }

  set enabled(v: boolean) {
    this.data.enabled = v
  }

  toJSON(): TelemetryPreferencesModel {
    return toJS({
      enabled: this.data.enabled
    }, {
      recurseEverything: true
    })
  }
}

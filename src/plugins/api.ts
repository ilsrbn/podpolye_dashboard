import type { App } from "vue";
import { ApiClient as AppClient } from "@client";
import { ApiSymbol } from "@/types/api";

type Config = {
  tokenName: string;
  basePath?: string;
};

export default {
  install: (app: App, config: Config) => {
    const TOKEN = localStorage.getItem(config.tokenName);
    const client = new AppClient({
      BASE: config.basePath || 'http://localhost:3000',
    });

    if (TOKEN) client.request.config.TOKEN = TOKEN;

    app.provide(ApiSymbol, client);
  },
};

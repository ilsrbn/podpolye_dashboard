import type { InjectionKey } from "vue";
import type { ApiClient as AppClient } from "@client";

export const ApiSymbol: InjectionKey<AppClient> = Symbol("$api");

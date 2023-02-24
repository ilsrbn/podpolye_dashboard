import { inject } from "vue";
import { ApiSymbol } from "@/types/api";

const useApi = () => {
  const $api = inject(ApiSymbol);
  if (!$api) throw new Error("API WAS NOT INJECTED");
  return $api;
};

export { useApi };

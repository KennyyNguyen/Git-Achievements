import { Gitlab } from "@gitbeaker/browser";

export const api = (host, token) =>
  new Gitlab({
    host: host,
    token: token,
  });

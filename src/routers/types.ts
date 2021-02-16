import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/detail"?: {};
  "/detail2"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}

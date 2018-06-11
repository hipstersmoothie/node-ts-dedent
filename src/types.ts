export interface Dict<T> {
  [key: string]: T;
}

export interface Response {
  data: Dict<any>;
  status: number;
}

export interface JiraConfig {
  url: string;
  username: string;
  password: string;
  version?: string;
}

export interface Notifiable {
  notifyUsers?: boolean;
}

export interface OverrideEditable {
  overrideEditableFlag?: boolean;
}

export interface OverrideSecurity {
  overrideScreenSecurity?: boolean;
}

export type EditIssueConfig = Notifiable & OverrideEditable & OverrideSecurity

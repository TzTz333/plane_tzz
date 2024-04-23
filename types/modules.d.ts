import type {
  IUser,
  IUserLite,
  IIssue,
  IProject,
  IWorkspace,
  IWorkspaceLite,
  IProjectLite,
} from "types";

export interface IModule {
  backlog_issues: number;
  cancelled_issues: number;
  completed_issues: number;
  created_at: Date;
  created_by: string;
  description: string;
  description_text: any;
  description_html: any;
  id: string;
  lead: string | null;
  lead_detail: IUserLite | null;
  link_module: {
    created_at: Date;
    created_by: string;
    created_by_detail: IUserLite;
    id: string;
    metadata: any;
    title: string;
    url: string;
  }[];
  links_list: ModuleLink[];
  members: string[];
  members_list: string[];
  members_detail: IUserLite[];
  is_favorite: boolean;
  name: string;
  project: string;
  project_detail: IProjectLite;
  start_date: string | null;
  started_issues: number;
  status: "backlog" | "planned" | "in-progress" | "paused" | "completed" | "cancelled" | null;
  target_date: string | null;
  total_issues: number;
  unstarted_issues: number;
  updated_at: Date;
  updated_by: string;
  workspace: string;
  workspace_detail: IWorkspaceLite;
}

export interface ModuleIssueResponse {
  created_at: Date;
  created_by: string;
  id: string;
  issue: string;
  issue_detail: IIssue;
  module: string;
  module_detail: IModule;
  project: string;
  updated_at: Date;
  updated_by: string;
  workspace: string;
  sub_issues_count: number;
}

export type ModuleLink = {
  title: string;
  url: string;
};

export type SelectModuleType =
  | (IModule & { actionType: "edit" | "delete" | "create-issue" })
  | undefined;

export type SelectIssue = (IIssue & { actionType: "edit" | "delete" | "create" }) | undefined;

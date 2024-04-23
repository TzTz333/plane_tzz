import type {
  IState,
  IUser,
  IProject,
  ICycle,
  IModule,
  IUserLite,
  IProjectLite,
  IWorkspaceLite,
} from "types";

export interface IIssueCycle {
  id: string;
  cycle_detail: ICycle;
  created_at: Date;
  updated_at: Date;
  created_by: string;
  updated_by: string;
  project: string;
  workspace: string;
  issue: string;
  cycle: string;
}

export interface IIssueModule {
  created_at: Date;
  created_by: string;
  id: string;
  issue: string;
  module: string;
  module_detail: IModule;
  project: string;
  updated_at: Date;
  updated_by: string;
  workspace: string;
}

export interface IIssueCycle {
  created_at: Date;
  created_by: string;
  cycle: string;
  cycle_detail: ICycle;
  id: string;
  issue: string;
  project: string;
  updated_at: Date;
  updated_by: string;
  workspace: string;
}

export interface IIssueParent {
  description: any;
  id: string;
  name: string;
  priority: string | null;
  sequence_id: number;
  start_date: string | null;
  target_date: string | null;
}

export interface IIssueLink {
  title: string;
  url: string;
}

export interface IIssue {
  assignees: string[];
  assignee_details: IUser[];
  assignees_list: string[];
  attachments: any[];
  blocked_by_issue_details: any[];
  blocked_issue_details: any[];
  blocked_issues: BlockeIssue[];
  blocked_list: string[];
  blocker_issues: BlockeIssue[];
  blockers: any[];
  blockers_list: string[];
  blocks_list: string[];
  bridge_id?: string | null;
  completed_at: Date;
  created_at: Date;
  created_by: string;
  cycle: string | null;
  cycle_id: string | null;
  cycle_detail: ICycle | null;
  description: any;
  description_html: any;
  description_stripped: any;
  id: string;
  issue_cycle: IIssueCycle | null;
  issue_link: {
    created_at: Date;
    created_by: string;
    created_by_detail: IUserLite;
    id: string;
    metadata: any;
    title: string;
    url: string;
  }[];
  issue_module: IIssueModule | null;
  label_details: any[];
  links_list: IIssueLink[];
  module: string | null;
  module_id: string | null;
  name: string;
  parent: string | null;
  parent_detail: IIssueParent | null;
  priority: string | null;
  project: string;
  project_detail: IProjectLite;
  sequence_id: number;
  sort_order: number;
  sprints: string | null;
  start_date: string | null;
  state: string;
  state_detail: IState;
  sub_issues_count: number;
  target_date: string | null;
  updated_at: Date;
  updated_by: string;
  workspace: string;
  workspace_detail: IWorkspaceLite;
  labels: any[];
  labels_list: string[];
}

export interface BlockeIssue {
  id: string;
  blocked_issue_detail?: BlockeIssueDetail;
  created_at: Date;
  updated_at: Date;
  created_by: string;
  updated_by: string;
  project: string;
  workspace: string;
  block: string;
  blocked_by: string;
  blocker_issue_detail?: BlockeIssueDetail;
}

export interface BlockeIssueDetail {
  id: string;
  name: string;
  description: string;
  priority: null;
  start_date: null;
  target_date: null;
}

export interface IIssueComment {
  id: string;
  actor: string;
  actor_detail: IUserLite;
  created_at: Date;
  updated_at: Date;
  comment: string;
  comment_html: string;
  comment_json: any;
  attachments: any[];
  created_by: string;
  updated_by: string;
  project: string;
  workspace: string;
  issue: string;
}

export type IssuePriorities = {
  id: string;
  created_at: Date;
  updated_at: Date;
  uuid: string;
  properties: Properties;
  created_by: number;
  updated_by: number;
  user: string;
};

export type Properties = {
  assignee: boolean;
  due_date: boolean;
  labels: boolean;
  key: boolean;
  priority: boolean;
  state: boolean;
  sub_issue_count: boolean;
};

export interface IIssueLabels {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  description: string;
  color: string;
  created_by: string;
  updated_by: string;
  project: string;
  workspace: string;
  parent: string | null;
}

export interface IIssueActivity {
  id: string;
  actor_detail: IUserLite;
  created_at: Date;
  updated_at: Date;
  verb: string;
  field: string | null;
  old_value: string | null;
  new_value: string | null;
  comment: string;
  attachments: any[];
  old_identifier: string | null;
  new_identifier: string | null;
  created_by: string;
  updated_by: string;
  project: string;
  workspace: string;
  issue: string;
  issue_comment: string | null;
  actor: string;
}

export interface IIssueLite {
  id: string;
  name: string;
  project_id: string;
  target_date: string;
  workspace__slug: string;
}

export interface IIssueFilterOptions {
  type: "active" | "backlog" | null;
  assignees: string[] | null;
  state: string[] | null;
  labels: string[] | null;
  issue__assignees__id: string[] | null;
  issue__labels__id: string[] | null;
  priority: string[] | null;
  created_by: string[] | null;
}

export type TIssueViewOptions = "list" | "kanban" | "calendar";

export type TIssueGroupByOptions = "state" | "priority" | "labels" | "created_by" | null;

export type TIssueOrderByOptions = "-created_at" | "updated_at" | "priority" | "sort_order";

export interface IIssueViewOptions {
  group_by: TIssueGroupByOptions;
  order_by: TIssueOrderByOptions;
  filters: IIssueFilterOptions;
  target_date: string;
}

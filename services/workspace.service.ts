//供了一系列方法来与后端 API 交互，主要用于处理工作空间（workspace）相关的操作。
//这些方法包括获取用户的工作空间、创建、更新、删除工作空间，处理工作空间成员邀请等功能。

// services
import APIService from "services/api.service";
import trackEventServices from "services/track-event.service";

const { NEXT_PUBLIC_API_BASE_URL } = process.env;

// types
import {
  IWorkspace,
  IWorkspaceMember,
  IWorkspaceMemberInvitation,
  ILastActiveWorkspaceDetails,
  IAppIntegrations,
  IWorkspaceIntegrations,
  IWorkspaceSearchResults,
} from "types";

const trackEvent =
  process.env.NEXT_PUBLIC_TRACK_EVENTS === "true" || process.env.NEXT_PUBLIC_TRACK_EVENTS === "1";

//使用给定的基础 URL（从环境变量 NEXT_PUBLIC_API_BASE_URL 获取或默认使用 "http://localhost:8000"）初始化 APIService
class WorkspaceService extends APIService {
  constructor() {
    super(NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000");
  }

  //获取当前用户的所有工作空间信息
  async userWorkspaces(): Promise<IWorkspace[]> {
    return this.get("/api/users/me/workspaces/")
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //根据工作空间的 slug 获取特定工作空间的详情
  async getWorkspace(workspaceSlug: string): Promise<IWorkspace> {
    return this.get(`/api/workspaces/${workspaceSlug}/`)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response;
      });
  }

  //创建新工作空间
  async createWorkspace(data: Partial<IWorkspace>): Promise<IWorkspace> {
    return this.post("/api/workspaces/", data)
      .then((response) => {
        if (trackEvent) trackEventServices.trackWorkspaceEvent(response.data, "CREATE_WORKSPACE");
        return response?.data;
      })
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //更新指定 slug 的工作空间信息
  async updateWorkspace(workspaceSlug: string, data: Partial<IWorkspace>): Promise<IWorkspace> {
    return this.patch(`/api/workspaces/${workspaceSlug}/`, data)
      .then((response) => {
        if (trackEvent) trackEventServices.trackWorkspaceEvent(response.data, "UPDATE_WORKSPACE");
        return response?.data;
      })
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //删除指定 slug 的工作空间
  async deleteWorkspace(workspaceSlug: string): Promise<any> {
    return this.delete(`/api/workspaces/${workspaceSlug}/`)
      .then((response) => {
        if (trackEvent)
          trackEventServices.trackWorkspaceEvent({ workspaceSlug }, "DELETE_WORKSPACE");
        return response?.data;
      })
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //邀请成员加入到指定 slug 的工作空间
  async inviteWorkspace(workspaceSlug: string, data: any): Promise<any> {
    return this.post(`/api/workspaces/${workspaceSlug}/invite/`, data)
      .then((response) => {
        if (trackEvent)
          trackEventServices.trackWorkspaceEvent(response.data, "WORKSPACE_USER_INVITE");
        return response?.data;
      })
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //接受邀请加入到指定 slug 和邀请 ID 的工作空间
  async joinWorkspace(workspaceSlug: string, invitationId: string, data: any): Promise<any> {
    return this.post(
      `/api/users/me/invitations/workspaces/${workspaceSlug}/${invitationId}/join/`,
      data,
      {
        headers: {},
      }
    )
      .then((response) => {
        if (trackEvent)
          trackEventServices.trackWorkspaceEvent(response.data, "WORKSPACE_USER_INVITE_ACCEPT");
        return response?.data;
      })
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //接受邀请加入到指定 slug 和邀请 ID 的工作空间
  async joinWorkspaces(data: any): Promise<any> {
    return this.post("/api/users/me/invitations/workspaces/", data)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //获取用户最后活跃的工作空间及其项目信息
  async getLastActiveWorkspaceAndProjects(): Promise<ILastActiveWorkspaceDetails> {
    return this.get("/api/users/last-visited-workspace/")
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //获取当前用户收到的所有工作空间邀请
  async userWorkspaceInvitations(): Promise<IWorkspaceMemberInvitation[]> {
    return this.get("/api/users/me/invitations/workspaces/")
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //获取指定 slug 的工作空间 所有 成员信息
  async workspaceMembers(workspaceSlug: string): Promise<IWorkspaceMember[]> {
    return this.get(`/api/workspaces/${workspaceSlug}/members/`)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //获取当前用户在指定 slug 的工作空间的成员信息
  async workspaceMemberMe(workspaceSlug: string): Promise<IWorkspaceMember> {
    return this.get(`/api/workspaces/${workspaceSlug}/workspace-members/me/`)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //获取指定 slug 的工作空间成员信息
  async updateWorkspaceMember(
    workspaceSlug: string,
    memberId: string,
    data: Partial<IWorkspaceMember>
  ): Promise<IWorkspaceMember> {
    return this.put(`/api/workspaces/${workspaceSlug}/members/${memberId}/`, data)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //删除指定 slug 的工作空间成员
  async deleteWorkspaceMember(workspaceSlug: string, memberId: string): Promise<any> {
    return this.delete(`/api/workspaces/${workspaceSlug}/members/${memberId}/`)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //获取指定 slug 的工作空间邀请信息
  async workspaceInvitations(workspaceSlug: string): Promise<IWorkspaceMemberInvitation[]> {
    return this.get(`/api/workspaces/${workspaceSlug}/invitations/`)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //  获取指定邀请 ID 的工作空间邀请信息
  async getWorkspaceInvitation(invitationId: string): Promise<IWorkspaceMemberInvitation> {
    return this.get(`/api/users/me/invitations/${invitationId}/`, { headers: {} })
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //更新指定 slug 的工作空间邀请信息
  async deleteWorkspaceInvitations(workspaceSlug: string, invitationId: string): Promise<any> {
    return this.delete(`/api/workspaces/${workspaceSlug}/invitations/${invitationId}/`)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //检查给定的 slug 是否可用
  async workspaceSlugCheck(slug: string): Promise<any> {
    return this.get(`/api/workspace-slug-check/?slug=${slug}`)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //获取所有可用的集成，包括内置和第三方集成
  async getIntegrations(): Promise<IAppIntegrations[]> {
    return this.get(`/api/integrations/`)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //获取指定 slug 的工作空间集成信息
  async getWorkspaceIntegrations(workspaceSlug: string): Promise<IWorkspaceIntegrations[]> {
    return this.get(`/api/workspaces/${workspaceSlug}/workspace-integrations/`)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //创建指定 slug 的工作空间集成
  async deleteWorkspaceIntegration(workspaceSlug: string, integrationId: string): Promise<any> {
    return this.delete(
      `/api/workspaces/${workspaceSlug}/workspace-integrations/${integrationId}/provider/`
    )
      .then((res) => res?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

  //搜索指定 slug 的工作空间下的项目
  async searchWorkspace(
    workspaceSlug: string,
    projectId: string,
    query: string
  ): Promise<IWorkspaceSearchResults> {
    return this.get(
      `/api/workspaces/${workspaceSlug}/projects/${projectId}/search/?search=${query}`
    )
      .then((res) => res?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }
}

//导出 WorkspaceService 的实例
export default new WorkspaceService();

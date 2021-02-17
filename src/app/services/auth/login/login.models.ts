export interface LoginEmailResponse {
    status: string;
    last_site: string;
    user: string;
    language: string;
    country: string;
    firebase_token:string;
  }
  
  export interface LogoutResponse {
    status: string;
  }
  
  export enum LoggedStatus {
    voidState = 0,
    notLogged = -1,
    logged = 1,
    changePassword = 2
  }
  
  export interface UserInfo {
    isLogged: LoggedStatus;
    username?: string;
    language?: string;
    fullInfo?: UserInfoResponse;
    isLoggedFirebase?: LoggedStatus;
  }
  
  export interface UserInfoResponse {
    "status": string,
    "verification_status": string,
    "current_server_time": string,
    "new_paymenticon_connected": boolean
    "terms_version": string,
    "user_type": string,
    "location_blocked_for_deposit": boolean,
    "currency": string,
    "gdpr_agreements": boolean,
    "session": string,
    "country_over_country_ip": boolean,
    "restore_password": boolean,
    "affiliate_id": number,
    "ukgc_restricted_player": boolean,
    "id": number,
    "unlimited_date_range": boolean,
    "is_full_data": boolean,
    "first_name": string,
    "roles": [],
    "parallel_limits_popup": boolean,
    "country": string,
    "last_login_at": string,
    "first_login": boolean,
    "can_verify_age_by_payment": boolean,
    "required_documents": [],
    "location_blocked": boolean,
    "parent_id": boolean,
    "accept_new_terms": boolean,
    "affiliate_client_id": null,
    "version": string,
    "country_ip": string,
    "login": string,
    "confirm_location": boolean,
    "temporary_account": boolean,
    "blocked_reason": string,
    "used_bonuses": []
  }
  
  export type UserFullInfo = {
    country: string
  }
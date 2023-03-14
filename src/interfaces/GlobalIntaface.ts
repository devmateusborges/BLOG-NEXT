export interface AppPost {
  id: string;
  title: string;
  subtitle: string;
  subject: string;
  url_photo: string;
  date_post?: string;
  user_id: string;
  group_id: string;
}

export interface AppGroup {
  id?: string;
  name_group: string;
  description?: string;
  color_hex?: string;
  user_id?: string;
  post: AppPost[];
}

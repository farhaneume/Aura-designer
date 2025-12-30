
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  color: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

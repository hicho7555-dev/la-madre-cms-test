export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  image: string; // Background emoji for the section
}

export interface MenuGroup {
  id: string;
  title: string;
  emoji: string;
  categoryIds: string[]; // References MenuCategory IDs
}
export interface Dragon {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  histories: string[];
}

export interface PostDragon {
  name: string;
  type: string;
  histories?: string[];
}

export interface Map {
  name: string;
  x_range: [number, number];
  y_range: [number, number];
}

export interface Target {
  name: string;
  maps: Map[];
}

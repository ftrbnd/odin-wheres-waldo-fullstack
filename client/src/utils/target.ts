interface Map {
  name: string;
  x_range: [];
  y_range: [];
}

export interface Target {
  name: string;
  maps: Map[];
}

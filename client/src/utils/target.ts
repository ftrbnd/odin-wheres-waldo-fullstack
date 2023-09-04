export interface TargetMap {
  name: string;
  x_range: [number, number];
  y_range: [number, number];
}

export interface Target {
  _id: string;
  name: string;
}

export interface ClickedTarget extends Target {
  found: boolean;
  x: number;
  y: number;
}

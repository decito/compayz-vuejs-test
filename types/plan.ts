export interface PlanContent {
  baseQuantity: number,
  service: string,
  addOnId?: number,
  packageQuantity?: number,
  maxAddOnQuantity: number
}

export interface Plan {
  id: number,
  name: string,
  planBaseAmt: number,
  contents: PlanContent[]
}

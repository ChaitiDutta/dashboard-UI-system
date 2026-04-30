export interface Table_Model{
    name: string,
    product:string,
    amount:number,
    status:StatusData,
    date: Date
}
export enum StatusData{
    Completed = 'Y',
    Pending = 'H',
    Shipped = 'R'
}

export interface ActivityList{
    id: number,
    user: string,
    action: string,
    time: string,
    type : 'purchase'|'signup'|'update'|'refund',
}
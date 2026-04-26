export interface Table_Model{
    name: string,
    product:string,
    amount:number,
    status:StatusData,
    date: Date
}
export interface StatusData{
    completed : 'Y',
    pending : 'H',
    shipped : 'R'
}
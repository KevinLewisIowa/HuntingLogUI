import { Hunt } from '../hunt'

export interface IMainStore {
    userName: string,
    hunts: Array <Hunt>
}

export const MainStore : IMainStore = {
    userName: "",
    hunts: []
}
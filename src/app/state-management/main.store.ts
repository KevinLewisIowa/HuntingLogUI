import { Hunt } from '../hunt'

export interface IMainStore {
    user: IUserStore
}

export interface IUserStore {
    userName: string,
    hunts: Array <Hunt>
}

export const UserStore : IUserStore = {
    userName: "",
    hunts: []
}
import { GET_HUNTS } from './main.actions';
import { CREATE_HUNT } from './main.actions';
import { MainStore, IMainStore } from './main.store';

export function MainReducer (state : IMainStore = MainStore, {type, payload}) {
    switch (type){
        case (GET_HUNTS):
            return Object.assign({}, state, {
                        hunts: payload
                    });
        case (CREATE_HUNT):
            //var theHunts = state.hunts;
            //theHunts.add(payload);
            return Object.assign({}, state, {
                hunts: [...state.hunts, payload]
                //hunts: payload
            })
        default: 
            return state;
    }
}
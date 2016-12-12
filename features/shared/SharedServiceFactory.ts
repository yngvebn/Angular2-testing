import {SharedService} from './SharedService';

window['__instance'] = null;
export function SharedServiceFactory() {
    if(!window['__instance']){
        console.log('new instance')
        window['__instance'] = new SharedService();
    }
    else{
        console.log('existing instance')
    }

    return window['__instance'];
}
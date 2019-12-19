export default class session {

    constructor(STORAGE, LIFE_SESSION, INACTIVITY_SESSION) {
        this.STORAGE = STORAGE;
        this.LIFE_SESSION = LIFE_SESSION;
        this.INACTIVITY_SESSION = INACTIVITY_SESSION;
        this.key = 'nits-session-key';
    }

    start() {
        window.onload = this.resetTimer();
        // DOM Events
        document.onmousemove = this.resetTimer();
        document.onkeypress = this.resetTimer();

        var all = this.getAll() ? this.getAll() : {};
        all['session-id'] = 'sess:'+Date.now();

        this.setAll(all);
    }

    setAll(all) {
        var timelife = new Date().getTime() + this.LIFE_SESSION * 60 * 1000;
        if(Object.keys(all).length > 0) all['timelife'] = timelife
        window[this.STORAGE].setItem(this.key,JSON.stringify(all));
    }

    getAll() {
        var all = JSON.parse(window[this.STORAGE].getItem(this.key)) ? JSON.parse(window[this.STORAGE].getItem(this.key)) : {};

        if(Object.keys(all).length) {
            var life = all['timelife'];
            if(new Date().getTime() < life){
                return all || {};
            }else{
                this.clear() ;
                return {};
            }
        }
        else
            return {};
    }

    set(key, value) {
        if(key == 'session-id') return false;
        var all = this.getAll();

        if(!('session-id' in all)){
            this.start();
            all = this.getAll();
        }

        all[key] = value;

        this.setAll(all);
    }

    get(key) {
        var all = this.getAll();
        return all[key];
    }

    renew(sessionId){
        var all = this.getAll();
        all['session-id'] = 'sess:' + sessionId;
        this.setAll(all);
    }

    exists(){
        var all = this.getAll();
        return 'session-id' in all;
    }

    has(key){
        var all = this.getAll();
        return key in all;
    }

    remove(key){
        var all = this.getAll();
        delete all[key];

        this.setAll(all);
    }

    clear(){
        var all = this.getAll();
        if(Object.keys(all).length)
            this.setAll({'session-id': all['session-id'], 'timelife': all['timelife'] });
        else {
            var all = {};
            all['session-id'] = 'sess:'+Date.now();

            this.setAll(all);
        }
    }

    destroy(){
        this.setAll({});
    }

    id(){
        return this.get('session-id');
    }

    destroy() {
        var all = JSON.parse(window[this.STORAGE].getItem(this.key));
        this.setAll({'session-id': all['session-id'], 'timelife': all['timelife'] });
    }

    refresh() {
        var all = JSON.parse(window[this.STORAGE].getItem(this.key)) ? JSON.parse(window[this.STORAGE].getItem(this.key)) : {};
        var timelife = new Date().getTime() + this.LIFE_SESSION * 60 * 1000;
        all['timelife'] = timelife
        window[this.STORAGE].setItem(this.key,JSON.stringify(all));
    }

    resetTimer() {
        var off = this.INACTIVITY_SESSION * 60 * 1000;
        var t;
        console.log('Timer reset')
        clearTimeout(t);
        this.refresh();
        if(this.INACTIVITY_SESSION!==null) t = setTimeout(this.destroy(), off)
        else t = setInterval(this.refresh(), 1000)
    }
}

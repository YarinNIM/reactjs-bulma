import Helper from './helper';
export default {
    container: (props, ...children) => {
        Helper.className('container', props);
        return e('div',props, ...children);
    },
    level: {},
    mediaObject: {},
    hero: {},
    section: {},
    footer: {},
    tile: {}
}

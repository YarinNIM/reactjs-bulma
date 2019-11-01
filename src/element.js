import Helper from './helper';
import Button from './element/button';
import icon from './element/icon';

export default { 
    box: function(props, ...children) {
        props.className = 'box' + Helper.join(props.className);
        return e('div', props, ...children);
    },

    button: Button.button,
    buttons: Button.buttons,
    content: {},
    icon: icon,
    notification: {},
    progressBar: {},
    table: {},
    tag: {},
    title: {}
};

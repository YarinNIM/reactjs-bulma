import Helper from './helper';
import Button from './button';
import icon from './icon';
import image from './image';
import Tag from './tag';

export default { 
    box: function(props, ...children) {
        props.className = 'box' + Helper.join(props.className);
        return e('div', props, ...children);
    },

    button: Button.button,
    buttons: Button.buttons,
    content: function(props, ...children) {
        props.className = 'content' + Helper.join(props.className);
        return e('div', props, ...children);
    },
    delete: function() {
        return e('a', {href:'#', className:'delete'});
    },
    icon: icon,
    image: image,
    notification: function(props, ...children) {
        Helper.className('notification', props);
        return e('div', props, ...children);
    },
    progressBar: {},
    table: {},
    tag: Tag.tag,
    tags: Tag.tags,
    title: {}
};

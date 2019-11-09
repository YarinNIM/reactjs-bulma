import Helper from './../helper';
const tag = function(props, ...children)
{
    Helper.className('tag', props);
    const dom = props.dom || 'span';
    var children = props.label || children || [];
    children = (typeof(children) == 'string' ? [children] : children);
    Helper.deleteKeys(props, 'dom', 'label');
    return e(dom, props, ...children);
};


const tags = function(props, items = []) {
    var items = items.map(item => tag(item));
    Helper.className('tags', props);
    return e('div', props, ...items);
};

export default {
    tag: tag,
    tags: tags
};

import Helper from './../helper';

function box(props, ...children)
{
    Helper.className('box', props);
    return e('div', props, ...children);
}

function icon(icon, props = {})
{
    if (!(icon || false)) return null;
    Helper.className('icon', props);
    return e('span', props,
        e('i', {className: icon})
    );

}

export default {
    box,
    icon
};


// export default Element;

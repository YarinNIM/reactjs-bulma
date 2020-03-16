import Helper from './../helper';

function box(props, ...children) {
    props = Helper.className('box', props);
    return e('div', props, ...children);
}

export function icon(icon, props = {}) {
    if (!(icon || false)) return null;
    props.className = 'icon ' + (props.className || '');
    return e('span', props,
        e('i', {className: icon})
    );
}

// display icon and form based on stated
export function stateIcon(state, props = {}) {
    const [icn, className] = props[Boolean(state).toString()] || [];
    return icon(icn, {className: className});
}

function image(src, props = {}) {
    const size = 'is-' + (props.size || '64x64');
    const isRounded = (props.isRounded || false) ? ' is-rounded' : null;
    return e('figure', {className: 'image ' + size},
        e('img', {src: src, className: isRounded})
    );
}

export function title(title, subtitle, props = {}) {
    var subtitle = (subtitle || false) ?
        e('p', {className: 'subtitle ' + (props.subtitleClassName || '')}, subtitle) : null;

    return e(React.Fragment, {},
        e('h1', {className: 'title ' + (props.titleClassName || '')}, title),
        subtitle
    );
}

export class Button extends React.Component {
    getProps() {
        return Object.assign({
            leftIcon: false,
            rightIcon: false
        }, this.props);
    }

    render() {
        const props = this.getProps();
        const withIcon = props.leftIcon || props.rightIcon || false;
        const label = withIcon ?
            (this.props.children ? e('span', {}, this.props.children) : null) :
            this.props.children;

        const tmp = Helper.deleteKeys(props, 'leftIcon', 'rightIcon', 'dom');
        tmp.className = 'button ' + (props.className || '');
        return e(props.dom || 'button', tmp,
            icon(props.leftIcon),
            label,
            icon(props.rightIcon)
        );
    }
}

export function figure(imgUrl, props = [])
{
    props.className = 'image ' + (props.className || '');
    return e('figure', props,
        e('img', {src: imgUrl, alt: props.alt})
    );
};



export function Buttons(props, buttons) {
    return e('div', {className: 'buttons ' + (props.className || '')},
        ...buttons.map(function (button) {
            return e(Button, button)
        })
    );
}

export default {
    box,
    icon,
    image,
    title
};


// export default Element;

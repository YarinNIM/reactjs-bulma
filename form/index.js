import Helper from './../../helper';
import selectComp from './select';
import {icon, Button} from './../element';
// import File as file from './file';
//
function label(label) {
    if (label || false) return e('label', {className: 'label'}, label);
    return null;
}

function help(msg, props = {}) {
    if (!(msg || false)) return null;
    return e('p', {className: 'help ' + (props.className || '')}, msg);
}

const Input = function (props) {
    var props = {...props};
    props.className = 'input ' + (props.className || '');
    return e('input', props);
}

export const TextArea = function (props) {
    props.className = 'textarea ' + (props.className || '');
    return e('textarea', props);
}

const selectOption = function (props, type) {
    var props = {...props, type};
    const label = props.label || '';
    Helper.deleteKeys(props, ['label']);
    const labelCss = {className: type};
    (props.disabled || false) && (labelCss.disabled = true);
    return e('label', labelCss,
        e('input', props), ' ', label
    );
}

export const Checkbox = function (props) {
    return selectOption(props, 'checkbox');
}

const Radio = function (props, children) {
    var children = props.children || children;
    return e('div', {className: 'control'},
        ...children.reduce(function (input, item) {
            return [...input, selectOption({
                name: props.name,
                onChange: props.onChange,
                disabled: item.disabled,
                value: item[props.valueField || 'id'],
                label: item[props.textField || 'name']
            }, 'radio')];
        }, [])
    );
}


function getElement(props)
{
    const type = (props.type || 'text').toLowerCase();
    switch(type) {
        case 'button':
            return e(Button, props, props.children);
            break;
        case 'textarea':
            return TextArea(props);
            break;
        default:
            return Input(props);
            break;
    }
}

export function Control(props, isExpanded = false) {
    var props = {
        leftIcon: false,
        rightIcon: false,
        ...props
    };
    const leftIcon = props.leftIcon;
    const rightIcon = props.rightIcon;
    const css = 'control' + (isExpanded ? ' is-expanded' : '') +
        (leftIcon ? ' has-icons-left' : '') +
        (rightIcon ? ' has-icons-right' : '');

    const eProps = Helper.deleteKeys(props, 'leftIcon', 'rightIcon');

    return e('div', {className: css},
        getElement(eProps),
        icon(leftIcon, {className: 'is-left'}),
        icon(rightIcon, {className: 'is-right'}),
    );
}


function fieldControl(props) {
    props.className = (props.className || '');
    (props.classNameOnHelp || false) && (props.help || false) && (props.className += props.classNameOnHelp);
    const ctrProps = Helper.deleteKeys(props, 'label', 'help', 'classNameOnHelp', 'leftAddons', 'rightAddons');
    const hasAddons = props.leftAddons || props.rightAddons || false;

    if (!hasAddons) return Control(ctrProps);
    return e('div', {}, e('div', {className: 'field has-addons'},
        ...(props.leftAddons || []).map(function (addon) {
            return Control(addon);
        }),
        Control(ctrProps, true),
        ...(props.rightAddons || []).map(function (addon) {
            return Control(addon);
        })
    ));
}

export function Field(props = {}) {
    return e('div', {className: 'field'},
        label(props.label),
        fieldControl(props),
        //Control(ctrProps),
        help(props.help, {className: props.className})
    );
}


export const Select = selectComp;
/*export default {
    Input, TextArea, Select, Checkbox, Radio, File,
    Control, Field,
}; */

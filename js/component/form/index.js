import Helper from './../../helper';
import Select from './select';
import File from './file';

const inputCtrl = function(type, props)
{
    Helper.className(type, props);
    return e(type, props);
}

const Input = function(props)
{
    var props = Helper.className('input', props);
    return e('input', props);
}

const TextArea = function(props)
{
    var props = Helper.className('textarea', props);
    return e('textarea', props);
}

const selectOption = function(props, type)
{
    var props = {...props, type};
    const label = props.label || '';
    Helper.deleteKeys(props, ['label']);
    const labelCss = {className: type}; 
    (props.disabled || false) && (labelCss.disabled = true);
    return e('label', labelCss,
        e('input', props), ' ', label
    );
}

const Checkbox = function(props) 
{
    return selectOption(props, 'checkbox');
}

const Radio = function (props, children)
{
    var children = props.children || children;
    return e('div', {className:'control'},
        ...children.reduce(function(input, item) {
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


function Control(props = {})
{
    const leftIcon = props.leftIcon || false;
    const rightIcon = props.rightIcon || false;
    Helper.className('control', props);
    Helper.deleteKeys(props, 'leftIcon', 'rightIcon');

    if (leftIcon) props.className += ' has-icons-left';
    if (rightIcon) props.className += ' has-icons-right';

    return e('div', props,
        props.children,
        Element.icon(leftIcon || false, {className: 'is-left'}),
        Element.icon(rightIcon || false, {className: 'is-right'}),
        e('a', {onClick: props.onTextEnter}, 'fdafda')
    );
}

function Field(props = {})
{
    return e('div', {}, 'field');
}


export default {
    Input, TextArea, Select, Checkbox, Radio, File,
    Control, Field,
};

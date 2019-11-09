/* @author Yarin NIM <yarin.nim@gmail.com>
 * @copyright 2019
 * @desc Button component
 */

import Helper from './../helper';
import icon from './icon';

const Button = function(props, label)
{

    const withIcon = (props.leftIcon || props.rightIcon);
    const leftIcon = props.leftIcon;
    const rightIcon = props.rightIcon;
    var label =  label || props.label || false;
    Helper.deleteKeys(props, 'leftIcon', 'rightIcon', 'label');
    props.className = 'button' + Helper.join(props.className);

    return e(props.dom || 'button', props,
        icon(leftIcon), 
        labelComp(withIcon, label),
        icon(rightIcon)
    );
};


const labelComp  = function(withIcon, label)
{
    if(withIcon) return label ? e('span', {}, label) : '';
    return label ? label : '';
}

const Buttons = function(props, buttons) {
    props.className = 'buttons' + Helper.join(props.className);
    var buttons = buttons.map(button => Button(button));
    return e('div', props, ...buttons);
}

export default {
    button: Button,
    buttons: Buttons
}

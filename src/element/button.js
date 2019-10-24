import Helper from './../helper';
import icon from './icon';

export default function(props, ...children) 
{
    return e(props.dom || 'button',{
        className: 'button' + Helper.join(
            Helper.is(props.color),
            Helper.is(props.size),
            Helper.isOutlined(props.isOutlined),
            Helper.isRounded(props.isRounded),
            props.className
        )
    }, 
        icon(props.leftIcon),
        ...children,
        icon(props.rightIcon)
    );
};

import Helper from './../helper';

export default function(props, ...children)
{
    return e('div', {
        className: 'box' + Helper.join(
            props.className,
            Helper.bgColor(props.color)
        )
    }, ...children);
}

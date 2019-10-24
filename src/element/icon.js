import Helper from './../helper';

export default function(icon, props)
{
    var props =  Object.assign({
        className: false,
        icon: false,
        color: false,
        size: 'normal'
    }, props);

    if (!(icon || false)) return null;

    const cs = Helper.join(
        Helper.textColor(props.color),
        Helper.is(props.size),
        props.className
    );
    return e('span',{ className: 'icon' + cs },
        e('i', {className: icon })
    );
}

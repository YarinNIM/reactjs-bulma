import e from './../e';
export default function(props)
{

    var props =  Object.assign({
        state: false,
        icon: false
    }, props);

    if(!props.icon) return null;

    const state = (props.state || false) ? ' ' + props.state : '';
    const cs = (props.className || false) ? ' ' + props.className : '';
    return _.rDom('span',{ className: "icon" + state + cs },
        _.rDom('i', {className: props.icon })
    );
}

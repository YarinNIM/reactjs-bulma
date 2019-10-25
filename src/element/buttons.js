import button from './button';
import Helper from './../helper';

export default function(props = {}, ...buttons)
{
    const items = buttons.map(function(item) {
        return button(item, item.content || '');
    });
    return e('div', {
        className:'buttons' + Helper.join(
            Helper.hasAddons(props.hasAddons),
            Helper.is(props.align)
        )
    }, ...items);
}



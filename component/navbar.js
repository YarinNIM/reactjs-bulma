/**
 * Navbar component
 * props.children is an object with
 * {brand:[], start: [], end: []}
 */
import {icon} from './../element';
import helper from './../../helper';

export default class Navbar extends React.Component
{
    getProps()
    {
        return {
            role: 'navigation',
            ...this.props
        };
    }

    render()
    {
        const props = this.getProps();
        props.className = 'navbar ' + (props.className || '');
        return e('nav', props,
            brand(props.children.brand),
            e('div', {className: 'navbar-menu'},
                e('div', {className: 'navbar-start'}, ...navbarItems(props.children.start)),
                e('div', {className: 'navbar-end'}, ...navbarItems(props.children.end))
            )
        );
    }
}


function brand(items = [])
{
    if (!items) return null;
    return e('div', {className: 'navbar-brand'},
        ...items.map(function(item) {
            return navbarItem(item)
        })
    );
}

/**
 * Returns the react component of navbar items.
 * @param props: Item properties {label, leftIcon, rightIcon, privilege, items} | '---'
 * @param isLink: If it's navbar-link or navbar-item
 */
function navbarItem(props, isLink = false)
{
    /* the item separator */
    if (props === '---') return e('hr', {className: 'navbar-divider'});
    var props = {...props};

    /* check if the item requires authorization or not */
    if (props.privilege || false) {
        if (!can(props.privilege)) return null;
    }

    /* Item with dropdown items */
    if (props.items || false) {
        const items = props.items;
        props = helper.deleteKeys(props, 'items');
        return e('div', {className: 'navbar-item has-dropdown is-hoverable'},
            navbarItem(props, true),
            e('div', {className: 'navbar-dropdown ' + (props.className || '')},
                ...navbarItems(items)
            )
        );
    }

    /* Single item */
    const withIcon = props.leftIcon || props.rightIcon || false;
    props.className = 'navbar-' + (isLink ? 'link' : 'item') + ' ' + (props.className || '');
    const label = (props.label || false) ? (withIcon ? e('span', {}, props.label) : props.label) : null;
    const itemProps = helper.deleteKeys(props, 'leftIcon', 'rightIcon', 'label', 'privilege');

    return e(props.dom || 'a', itemProps,
        icon(props.leftIcon),
        label,
        icon(props.rightIcon)
    );
}

function navbarItems(items)
{
    if (!items) return [];
    return items.map(function(item) {
        return navbarItem(item);
    });
}

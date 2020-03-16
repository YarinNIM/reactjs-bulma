import {Button, icon} from './../element';
import helper from './../helper';

export default class Dropdown extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    getProps()
    {
        return {
            hideArrow: false,
            triggerIcon: {
                down: 'fas fa-angle-down',
                up: 'fas fa-angle-up'
            },
            ...this.props
        };
    }

    render()
    {
        const props = this.getProps();
        return e('div', {className: 'dropdown is-hoverable ' + (props.className || ''), style: props.style},
            trigger(props),
            e('div', {className: 'dropdown-menu', role: 'menu'},
                e('div', {className: 'dropdown-content'},
                    ...props.children.map(function(child) {
                        return item(child)
                    })
                )
            )
        );
    }
}

function trigger(props)
{
    return e('div', {className: 'dropdown-trigger'},
        e(Button, {
            dom: 'a', className: props.triggerClassName,
            rightIcon: props.hideArrow ? false : props.triggerIcon.down,
            leftIcon: props.icon
        }, (props.label || null))
    )
}

function item(props)
{
    if (props === '---') return e('hr', {className: 'dropdown-divider'});
    const withIcon = props.icon || false;
    const label = withIcon ? e('span', {}, props.label) : props.label;

    if (!can(props.privilege)) return null;

    const itemProps = helper.deleteKeys(props, 'icon', 'label', 'privilege');
    itemProps.className = 'dropdown-item ' + props.className;
    return e(props.dom || 'a', itemProps,
        icon(props.icon),
        label,
    );
}


import {icon} from './../element';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: props.selectedItem
        };
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(item, e) {
        item.onClick && item.onClick(item, e);
        this.setState({selectedItem: item.value});
    }

    label(key, props) {
        return (props.icon || false) ?
            e(React.Fragment, {},
                icon(props.icon),
                e('span', {}, props.label || key)
            ) : props.label || key;
    }

    item(key, props, parent) {
        var props = {...props, ...{}};
        const withPriv = props.privilege || false;
        const next = withPriv ? can(props.privilege) : true;
        if (!next) return null;

        let value = parent + '.' + key;
        let css;
        (this.state.selectedItem === value) && (css = 'is-active');
        return e('li', {}, e('a', {
            onClick: this.onItemClick.bind(null, {...props, value: value}),
            className: css,
            href: props.href,
        }, this.label(key, props)));
    }

    items(key, props) {
        if (!can(props.privilege) || !props.items) return null;
        const items = [];
        const _this = this;
        Object.keys(props.items).forEach(function (itemKey) {
            const itemProps = props.items[itemKey];
            items.push(_this.item(itemKey, itemProps, key));
        });

        return e(React.Fragment, null,
            e('p', {className: 'menu-label'}, props.label || key),
            e('ul', {className: 'menu-list'}, ...items)
        );
    }

    render() {
        const items = this.props.children || {};
        const _this = this;
        const tmp = [];
        Object.keys(items).forEach(function (key) {
            const props = items[key];
            tmp.push(_this.items(key, props));
        });

        return e('aside', {className: 'menu'}, ...tmp);
    }
}

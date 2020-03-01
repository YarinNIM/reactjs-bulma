class TabItem extends React.Component {
    label() {
        const withIcon = this.props.icon || false;
        if (!withIcon) return this.props.label || 'Tab Label';
        return e(React.Fragment, {},
            e('span', { className: 'icon' },
                e('i', { className: this.props.icon, 'aria-hidden': true }),
            ),
            e('span', {}, this.props.label || 'Tab Label')
        )
    }

    render() {
        const props = this.props;
        const css = props.isDefaultTab ? { className: 'is-active' } : {};
        return e('li', css,
            e('a', { onClick: props.onClick }, this.label())
        );
    }
}

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { defaultTab: props.defaultTab };
        this.onTabClick = this.onTabClick.bind(this);
    }

    onTabClick(tab, e) {
        this.setState({ defaultTab: tab.key });
    }

    tabItems() {
        const _this = this;
        const keys = Object.keys(this.props.children);
        return keys.reduce(function(init, key) {
            let item = _this.props.children[key];
            item.isDefaultTab = key === _this.state.defaultTab;
            item.onClick = _this.onTabClick.bind(null, {...item, key: key });
            init.push(e(TabItem, item));
            return init;
        }, [])
    }

    render() {
        const activeContent = this.props.children[this.state.defaultTab];
        return e('div', {},
            e('div', { className: 'tabs is-marginless ' + this.props.className },
                e('ul', {}, ...this.tabItems())
            ),
            e('div', { className: 'card' },
                e('div', { className: ' card-content' },
                    activeContent.content
                )
            )
        );
    }
}

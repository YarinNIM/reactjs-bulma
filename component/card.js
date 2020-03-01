export default class Card extends React.Component {
    cardImage() {
        if (!this.props.image || false) return null;
        return e('div', {className: 'card-image'},
            e('figure', {className: 'image is-4by3'},
                e('img', {src: this.props.image})
            )
        );
    }

    cardFooter() {
        if (!(this.props.footer || false)) return null;
        const footerItems = this.props.footer.reduce(function (init, item) {
            init.push(e('a', {className: 'card-footer-item'},
                item.label
            ));
            return init;
        }, []);

        return e('div', {className: 'card-footer'}, ...footerItems);
    }

    cardHeader() {
        if (!(this.props.title || false)) return null;
        return e('div', {className: "card-header"},
            e('div', {className: 'card-header-title'},
                e('p', {}, this.props.children))
        )
    }

    render() {
        return e('div', {className: 'card'},
            this.cardHeader(),
            this.cardImage(),
            e('div', {className: 'card-content'}, this.props.children),
            this.cardFooter()
        );
    }
}

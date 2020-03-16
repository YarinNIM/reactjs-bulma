export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.onPageClick = this.onPageClick.bind(this);
    }

    getProps() {
        return {
            totalPages: 1,
            ellipsis: 2,
            ...this.props
        };
    }

    onPageClick(page, evt) {
        this.props.onPageClick && this.props.onPageClick(page, evt);
    }

    ellipsises(props) {
        const _this = this;
        let start = props.activePage - props.ellipsis;
        let end = parseInt(props.activePage) + parseInt(props.ellipsis);
        start <= 1 && (start = 1);
        end >= props.totalPages && (end = props.totalPages);
        let range = Array.from({length: (end - start) + 1}, (v, k) => k);
        return range.map(function (i) {
            props.onClick = _this.onPageClick;
            return pageItem(start + i, props);
        });
    }

    render() {
        const props = this.getProps();
        if (props.totalPages <=1 ) return null;
        return e('div', {className: 'pagination'},
            e('ul', {className: 'pagination-list'}, ...this.ellipsises(props)),
            ...((props.totalPages <= 1) ? [] : [
                firstPage(props),
                lastPage(props)
            ])
        );
    }
}

function pageItem(page, props) {
    const itemProps = {
        className: 'pagination-link',
        onClick: props.onClick.bind(null, page)
    };
    page == props.activePage && (itemProps.className += ' is-current');
    return e('li', {},
        e('a', itemProps, page)
    );
}

function firstPage(props) {
    const itemProps = {className: 'pagination-previous'};
    props.activePage == 1 && (itemProps.disabled = true);
    (props.onClick || false) && (itemProps.onClick = props.onClick.bind(null, 1));
    return e('a', itemProps, props.firstText || 'First');
}

function lastPage(props) {
    const itemProps = {className: 'pagination-next'};
    props.activePage == props.totalPages && (itemProps.disabled = true);
    (props.onClick || false) && (itemProps.onClick = props.onClick.bind(null, props.totalPages));
    return e('a', itemProps, props.lastText || 'Last');
}

import Element from './element';
class Layout extends React.Component
{
    render() {
        return e('div', {className:'container'},
            Element.box({ color: 'warning', className: 'has-text-danger', }, 
                e('h1', {}, 'box')
            ), e('hr'),
            Element.button({
                color: 'danger',
                size: 'large',
                isOutlined: true,
                isRounded: true,
                leftIcon: 'fas fa-home'
            },
                e('span', {}, 'welcome'),
                Element.icon('fas fa-check')

            ), e('hr'),
            Element.icon('fas fa-check', {
                color: 'danger',
                size: 'large',
                className:'fa-spin'
            }),
            e('hr')
        );
    }
}

ReactDOM.render(e(Layout), document.getElementById('root'));

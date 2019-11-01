import Element from './element';
class Layout extends React.Component
{
    render() {
        return e('div', {className:'container'},
            Element.icon('fas fa-home'),
            Element.box({ className:'has-background-danger' },'fdafas'),
            Element.button({leftIcon: 'fas fa-check', rightIcon: 'fas fa-home', className:'is-warning', label: 'good'}),
            Element.buttons({className:'are-small'}, [
                {label: 'testing', leftIcon: 'fas fa-download', className:'is-primary'},
                {leftIcon: 'fas fa-check'},
                {label: 'welcome'}
            ])
        );
    }
}

ReactDOM.render(e(Layout), document.getElementById('root'));

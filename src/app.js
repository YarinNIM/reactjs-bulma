import Helper from './helper';
import Element from './element';
import Layout from './layout';

class MainLayout extends React.Component
{
    render() {
        return e('div', {className:'container'},
            Element.icon('fas fa-home'),
            Element.box({ className:'has-background-danger' },'fdafas'),
            Element.button({leftIcon: 'fas fa-check', rightIcon: 'fas fa-home', className:'is-warning', label: 'good'}),
            Element.buttons({className:'are-small has-addons is-right'}, [
                {label: 'testing', leftIcon: 'fas fa-download', className:'is-primary'},
                {leftIcon: 'fas fa-check'},
                {label: 'welcome'}
            ]),
            Element.content({}, 'fdafda', 'fdafdafdas'),
            Element.image('images/test.png',{ className:'is-64x64' }),
            Element.notification({className:'is-primary'}, Element.delete(), 'fdafdsafadsf'),
            Element.tag({className:'is-danger is-medium'}, 'fdafdsa', Element.delete()),
            Element.tag({className: 'is-delete'}),
            Element.tags({className:'has-addons'}, [
                {label: 'godaf', className:'is-primary'},
                {className:'is-delete', dom: 'a',  onClick: function(e) {
                    console.log(e);
                }}
            ]),
            Element.tags({className:'has-addons'} , [
                {label: 'npm', className:'is-dark'},
                {label: '0.7.0', className: 'is-info'}
            ]),

            Layout.container({},
                'fdasfasf'
            )
        );
    }
}

ReactDOM.render(e(MainLayout), document.getElementById('root'));

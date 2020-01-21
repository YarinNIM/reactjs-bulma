import Form from './component/form';

class Layout extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e)
    {
        console.log(e.target);
    }

    render(){
        console.log(this.children);
        return e('div',{className:'container'},
            'Herer isthe layout of login', e('br'),
            'Input: ',
            Form.Input({ placeholder: 'input hook', type:'password'}), '---',
            e(Form.Input, {placeholder:'Input Class'}),
            e('hr'),
            'Textarea:',
            Form.TextArea({
                placeholder: 'this.props.placeholder',
                defaultValue: 'fdasfdasfsa'
            }), '----',

            e(Form.TextArea, {
                placeholder: 'fdafdas',
                defaultValue: 'here is the default'
            }),

            e('hr'),

            'Select: ',
            Form.Select({
                defaultValue: 3,
                className:'is-danger'
            }, {
                1:'dafa',
                2:'fdafdsaf',
                3:'fdafdaf'
            }),

            '---',

            e(Form.Select, {
                defaultValue: 2,
                className: 'is-success',
                name:'testing',
                onChange: this.onClick
            }, {
                1: 'good',
                2: 'welcom',
                3: 'good day'
            }),

            e(Form.Checkbox, {
                label: 'fdafa',
                disabled: true
            }),

            e('hr'),

            Form.Checkbox({
                label: e(React.Fragment, {},
                    locale('Welcome to :me', {me: 'Heng Dara'}), ' ',
                    e('a', {href:'#'}, 'testing')
                ),
                value: 'testin',
                defaultChecked: false,
                onChange: this.onClick
            }),

            '---',
            e(Form.Checkbox, {
                disabled: true,
                label: 'Welcome',
                value: 'hello'
            }),
            e('hr'),

            Form.Radio({
                name:'radion-hook',
                valueField: 'value',
                textField: 'text'
            },[
                {value:'mail', text:'fdafsa'},
                {value: 'testing', text:'welcome', disabled: true}
            ]),

            e(Form.Radio, { 
                name:'fdafa',
                onChange: this.onClick
            }, [
                {id: 'male', name: 'Male', disabled: true},
                {id: 'female', name: 'Female'}
            ]), e('hr'),

            e(Form.File, {
                className:'is-danger',
                filename: '....',
                onChange: function(e) {
                    console.log(e);
                }
            })
        );
    }
}

document.addEventListener('DOMContentLoaded', function(evt) {
    ReactDOM.render(e(Layout, {}), document.getElementById('root'));
});

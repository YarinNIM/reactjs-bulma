/**
 * File input 
 * @exmaple
 * e(File, {
 *  icon: 'fas fa-home',
 *  filename: '...',
 *  hideFilename: boolean,
 *  className: 'is-centered is-right is-success....',
 *  onChange: callback(file, evt),
 * });
 */
export default class File extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { filename: props.filename };
        this.onChange = this.onChange.bind(this);
    }

    fileLabel()
    {
        return e('span', {className: 'file-cta'},
            e('span', {className:'file-icon'}, e('i', {className: this.props.icon || 'fas fa-upload'})),
            e('span', {className: 'file-label'}, this.props.label || 'Chose a file...')
        );
    }

    filename()
    {
        if (this.props.hideFilename || false) return null;
        return e('span', {className:'file-name'}, this.state.filename);
    }

    onChange(e)
    {
        const file = e.target.files[0];
        this.setState({ filename: file.name});
        (this.props.onChange || false) && this.props.onChange(file, e);
    }

    render()
    {
        const hideFN = (this.props.hideFilename || false) ? ' ': ' has-name ';
        return e('div', {className:'file' + hideFN + (this.props.className || '')},
            e('label', {className:'file-label'},
                e('input', {type: 'file', name: this.props.name, className:'file-input', onChange: this.onChange}),
                this.fileLabel(),
                this.filename()
            )
        );
    }
}

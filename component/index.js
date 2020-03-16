import Card from './card';
import Tabs from './tabs';
import Menu from './menu';
import Navbar from './navbar';
import Dropdown from './dropdown';
import {figure} from '../element';
import Pagination from './pagination';

/* Dropdown of more actions */
export class More extends React.Component
{
    getProps()
    {
        return {
            triggerClassName: 'is-small is-light',
            ...this.props,
            hideArrow: true,
            icon: this.props.icon || 'fas fa-ellipsis-h',
        }
    }

    render()
    {
        const props = this.getProps();
        props.className = 'is-more ' + (props.className || '');
        return e(Dropdown, props, this.props.children);
    }
}

export class Media extends React.Component
{
    render()
    {
        const image = this.props.image || {};
        return e('div', {className: 'media ' + (this.props.className || '')},
            e('div', {className: 'media-left'}, figure(image.url, image)),
            e('div', {className: 'media-content'}, this.props.children)
        );
    }
}

export {
    Menu, Card, Tabs, Navbar,
    Dropdown, Pagination
};



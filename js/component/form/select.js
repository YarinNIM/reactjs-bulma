import Helper from './../../helper';

function Select(props, children)
{
    props = Helper.className('select', props);
    const items = props.children || children;
    const css  = props.className;
    Helper.deleteKeys(props, 'className');
    const isMultiple = props.isMultiple || false;
    console.log(items);

    return e('div', {className: css},
        e('select', props, ...Items(items, props)) 
    );
}

function Item(key, value)
{
    let props = { value: key };
    return e('option', props, value);
}

function Items(items)
{
    let res = [];
    for (let key in items) {
        res = [...res, Item(key, items[key])]
    }
    return res;
}

export default Select;

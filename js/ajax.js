function initProps(url, props)
{
    return {
        url: url,
        ...props
    };
}

const initHeader = function(props)
{
    return Object.assign({
        'x-csrf-token': 'CSRF TOKENT',
        'x-csrf-value': 'bearer ZmRhZmpkO2FqZmRqYWZkamFmamRhbGZqZHNhZjE5ODQzMjlqa2ZkZmhkYWYxNjU2dHJldzJmZDVnZmRzZw=='
    }, props.headers || {});
}

window.ajax = function(url, props = {})
{
    props.headers = initHeader(props);
    props = {
        dataType:'json',
        ...props
    };
    return $.ajax(initProps(url, props));
}

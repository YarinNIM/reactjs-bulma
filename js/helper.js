export default {
    className: function(cs, props = {})
    {
        var tmp = {...props};
        tmp.className = cs + this.join(props.className);
        return tmp;
    },

    /* Deletes some keys from object */
    deleteKeys: function(props, ...keys) {
        keys.forEach(function(key) {
            delete props[key];
        });
    },

    /* Joins params into string as className */
    join: function(...params) 
    {
        let res = params.reduce(function(str, param) {
            return (' ' + str.trim() + ' ' + (param || ''));
        }, '').trim();
        return (res  == '') ? '' : (' ' + res);
    }
};

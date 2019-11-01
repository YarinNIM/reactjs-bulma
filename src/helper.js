export default {
    deleteKeys: function(props, ...keys) {
        keys.forEach(function(key) {
            delete props[key];
        });
    },

    join: function(...params) 
    {
        let res = params.reduce(function(str, param) {
            return (' ' + str.trim() + ' ' + (param || ''));
        }, '').trim();
        return (res  == '') ? '' : (' ' + res);
    }
};

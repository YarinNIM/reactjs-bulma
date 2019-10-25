export default {
    eval: function(pre, val) {
        if (!(val || false)) return '';
        return pre + '-' + val;
    },

    bool: function(state, val, pre = 'is') { return this.eval(pre, ( state || false) ? val : false); },
    textColor: function(color) { return this.eval('has-text', color); },
    bgColor: function(color) { return this.eval('has-background', color); },

    has: function(val) { return this.eval('has', val); },
    hasAddons: function(state) { return this.bool(state, 'addons', 'has'); },

    is: function(val) { return this.eval('is', val); },
    isOutlined: function(state) { return this.bool(state, 'outlined'); },
    isRounded: function(state) { return this.bool(state, 'rounded'); },



    join: function(...params) 
    {
        let res = params.reduce(function(str, param) {
            return (' ' + str.trim() + ' ' + (param || ''));
        }, '').trim();
        return (res  == '') ? '' : (' ' + res);
    }
};

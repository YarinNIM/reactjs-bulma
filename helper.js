/* @author Yarin NIM <yarin.nim@gmail.com>
 * @copyright 2019
 * @desc The helper function to support the 
 * library
 */
export default {
    
    /**
     * Generate the new className concaternated with
     * provided classname
     * @param cs string: CSS class name
     * @parmas props 
     * @return object of react properties
     */
    className: function (cs, props = {}) {
        var tmp = {...props};
        tmp.className = cs + this.join(props.className);
        return tmp;
    },

    /**
     * Deletes some keys from object 
     * @param props: Object to delete
     * @param keys list of keys to be deleted
     * @return object with deleted keys
     * */
    deleteKeys: function (props, ...keys) {
        const tmp = {...props};
        keys.forEach(function (key) {
            delete tmp[key];
        });
        return tmp;
    },

    /* Joins params into string as className */
    join: function (...params) {
        let res = params.reduce(function (str, param) {
            return (' ' + str.trim() + ' ' + (param || ''));
        }, '').trim();
        return (res == '') ? '' : (' ' + res);
    }
};

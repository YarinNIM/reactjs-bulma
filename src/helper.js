/* @author Yarin NIM <yarin.nim@gmail.com>
 * @copyright 2019
 * @desc Helper function used in
 * this package.
 */
export default {

    /* Joins a prefix className with 
     * className defined in the props parameter.
     * @param {string} cs Prefix className
     * @param {object} props Dom attribute object
     * @return Dom attibute object
     */
    className: function(cs, props = {})
    {
        props.className = cs + this.join(props.className);
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

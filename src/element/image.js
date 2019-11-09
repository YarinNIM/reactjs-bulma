/* @author Yarin NIM <yarin.nim@gmail.com>
 * @copyright 2019
 * @desc Image component
 *
 * Image Size: 
 * is-16x16, is-24x24, is-32x32, is-48x48, is-64x64, * is-96x96, is-128x128,
 * is-square, is-1by1, is-5by4, is-4by3, is-3by2, is-5by3, is-16by9, is-2by1,
 * is-3by1, is-4by5, is-3by4, is-2by3, is-3by5, is-9by16, is-1by2, is-1by3
 *
 * Img className:
 * is-rounded, 
 */

import Helper from './../helper';
/* @param {string} src Image source
 * @param {object} props DOM attribute
 * @return ReactElement
 */

export default function (src, props = {})
{
    if (!(src || false)) return false;
    Helper.className('image', props);
    const imgCS = props.imgClassName;
    delete props.imgClassName;
    return e('figure', props,
        e('img', {src: src, alt: props.alt, className: imgCS})
    );
}

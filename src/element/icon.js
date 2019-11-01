import Helper from './../helper';

export default function(icon , className = '') {
    if (!(icon || false)) return null;
    return e('span',{ className: 'icon' + Helper.join(className) },
        e('i', { className: icon })
    );
};


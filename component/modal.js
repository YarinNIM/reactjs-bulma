/**
 * This is the modal component and its interaction
 * @author Yarin NIM <yarin.nim@allweb.com.kh>
 * @copyright allweb@2020
 *
 * @example
 * Modal.show({
 *  toast: ms, // The number of millisecond the modal box will hide
 *  hideClose: boolean, // If you need to hide the close (cross icon) button
 *  onShow: onShowCallback,  // The callback that run before showing the modal, return false to cancel
 *  onClose: onCloseCallback //  The callback that run before hide, return false to cancel
 * }, 'Here is the content', 'another content...');
 */

const html = document.getElementsByTagName('html')[0];
const modal = document.getElementById('modal');
const isClipped = 'is-clipped';

/* Shows the modal */
const show = function (props = {}, ...content) {
    if (props.onShow || false) {
        const stop = props.onShow(e) === false;
        if (stop) return false;
    }

    DomClass.remove(html, isClipped);
    DomClass.add(html, isClipped);
    props.content = content;
    props.key = Math.random();
    ReactDOM.render(
        e(Modal, props),
        modal
    );
};

const hide = function () {
    DomClass.remove(html, isClipped);
    ReactDOM.render(e('div', {}), modal);
};

// is to set how many ms the modal box disappear
const withToast = function (ms = false) {
    if (ms) {
        const timer = window.setTimeout(function () {
            hide();
            console.log(timer);
            window.clearTimeout(timer);
        }, ms);
    }
};

function Modal(props) {
    const [isActive, setStatus] = React.useState(true);
    const onClose = function (e) {
        if (props.onClose || false) {
            const stop = props.onClose(e) === false;
            if (stop) return false;
        }
        hide();
    };

    const content = props.content;
    const hideClose = props.hideClose || false;
    withToast(props.toast || false);
    return e('div', {className: 'modal is-active'},
        e('div', {className: 'modal-background'}),
        e('div', {className: 'modal-content'}, ...content),
        hideClose || e('div', {className: 'modal-close', onClick: onClose})
    );
}

// close dialog box
document.addEventListener('click', function (e) {
    (e.target.getAttribute('aria-label') === 'close') && hide();
});

export default {show, hide}

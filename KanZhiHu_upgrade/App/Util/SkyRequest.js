/**
 * Created by apple on 16/2/15.
 */

'use strict';

export default function httpGet(url:string, success, fail) {
    let method = 'GET';
    let isTimeout = false;
    let promise = fetch(url, {
        method
    })
        .then(resp => {
            if (isTimeout == false) {
                clearTimeout(timeout);
                return resp.json();
            }
        })
        .then(resObj => success(resObj))
        .catch(err => {
            clearTimeout(timeout);
            fail(err);
        });
    var timeout = setTimeout(function () {
        isTimeout = true;
        promise.done();
    }, 15000);
}
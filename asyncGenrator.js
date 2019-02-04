/**
 * Created by rob on 2/8/2017.
 */
function genie (questions) {
    let g = questions();
    pull();
    function pull () {
        let question = g.next();
        if (question.done) {
            return
        }
        ask(question.value, pull)
    }
    function ask (q, next) {
        xhr('https://computer.genie/?q=' + encodeURIComponent(q), got);
        function got (err, res, body) {
            if (err) {
                // todo
            }
            console.log(q);
            console.log('[Genie] ' + body.answer);
            next()
        }
    }
}
genie(function* () {
    yield '[Me] Will ES6 die a painful death?';
    yield '[Me] How youuu doing?';
});
function xhr (url, done) {
    setTimeout(function () {
        done(null, null, { answer: 'No' });
    }, 2000)
}

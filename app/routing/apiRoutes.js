var friends = require('../data/friends')

function api(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    })

    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;

        //make all scores into numbers
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i])
        }

        //start logic to find best friend at friend index 0
        var bestFriend = 0;

        //if user choose 1 and max score is 5 max difference is 40 so start here
        var leastDiffNum = 40;

        //loop over friends array
        for (var i = 0; i < friends.length; i++) {
            //num to check vs the least diff number if less than replace with this variable
            var totalDiffNum = 0;

            //loop over scores array and make a comparison Math.abs gives absolute value of the difference
            for (var j = 0; j < friends[i].scores.length; j++) {
                var diffNum = Math.abs(newFriend.scores[j] - friends[i].scores[j])
                totalDiffNum += diffNum;
            }
            if (totalDiffNum < leastDiffNum) {
                leastDiffNum = totalDiffNum;
                bestFriend = i;
            }
        }

        //push new friend to array

        friends.push(newFriend);

        //send back json information for the html to give modal

        res.json(friends[bestFriend]);

    })
}

module.exports = api;